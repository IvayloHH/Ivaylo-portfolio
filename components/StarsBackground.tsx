'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ===== Sprite texture so points appear circular
const makeDotTexture = () => {
  const size = 64;
  const data = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = (x + 0.5 - size / 2) / (size / 2);
      const dy = (y + 0.5 - size / 2) / (size / 2);
      const d = Math.sqrt(dx * dx + dy * dy);
      const a = Math.max(0, 1 - d);
      const i = (y * size + x) * 4;
      data[i] = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
      data[i + 3] = Math.round(a * a * 255);
    }
  }
  const tex = new THREE.DataTexture(data, size, size);
  tex.needsUpdate = true;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearFilter;
  return tex;
};

// ===== Scene background as a radial gradient texture
function SkyBackground({
  colors = ['#000000', '#020617', '#000000'],
  stops = [0, 0.6, 1],
  center = [0.5, 0.2] as [number, number],
  radius = 0.9,
}: {
  colors?: string[];
  stops?: number[];
  center?: [number, number]; // 0..1 (x,y) relative to canvas
  radius?: number; // 0..1 of canvas size
}) {
  const texture = useMemo(() => {
    const size = 1024;
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const ctx = c.getContext('2d')!;
    const [cx, cy] = center;
    const g = ctx.createRadialGradient(
      size * cx,
      size * cy,
      size * 0.05,
      size * 0.5,
      size * 0.5,
      size * radius
    );
    for (let i = 0; i < colors.length; i++) {
      g.addColorStop(stops[i] ?? i / (colors.length - 1), colors[i]);
    }
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);

    const tex = new THREE.CanvasTexture(c);
    tex.needsUpdate = true;
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, [center, colors, radius, stops]);

  return <primitive attach="background" object={texture} />;
}

// ===== Starfield (super-simplified wandering)
export type StarfieldProps = {
  count?: number;
  color?: THREE.ColorRepresentation;
  spread?: number;
  size?: number;
  scrollParallax?: number;
  idleDrift?: number;
};

function Starfield({
  count = 1000,
  color = '#c7d2fe',
  spread = 240,
  size = 1.0,
  scrollParallax = 0.3,
  idleDrift = 1.0,
}: StarfieldProps) {
  const groupRef = useRef<THREE.Group | null>(null);
  const pointsRef = useRef<THREE.Points | null>(null);
  const [scrollY, setScrollY] = useState(0);

  const basePositions = useRef<Float32Array | null>(null);
  const phase = useRef<Float32Array | null>(null);
  const radius = useRef<Float32Array | null>(null);
  const speed = useRef<Float32Array | null>(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const ph = new Float32Array(count);
    const ra = new Float32Array(count);
    const sp = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      positions[ix] = (Math.random() - 0.5) * spread;
      positions[ix + 1] = (Math.random() - 0.5) * spread;
      positions[ix + 2] = (Math.random() - 0.5) * spread;
      ph[i] = Math.random() * Math.PI * 2;
      ra[i] = 0.5 + Math.random();
      sp[i] = 0.2 + Math.random() * 0.6;
    }

    basePositions.current = positions.slice();
    phase.current = ph;
    radius.current = ra;
    speed.current = sp;

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [count, spread]);

  const dotTex = useMemo(() => makeDotTexture(), []);
  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      map: dotTex,
      color,
      size,
      sizeAttenuation: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      alphaTest: 0.02,
    });
  }, [dotTex, color, size]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.position.y = -(scrollY * 0.001 * scrollParallax);
      groupRef.current.rotation.z = Math.sin(t * 0.1) * 0.02;
    }

    const pts = pointsRef.current;
    if (!pts) return;

    const attr = pts.geometry.getAttribute('position') as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;
    const base = basePositions.current!;
    const ph = phase.current!;
    const ra = radius.current!;
    const sp = speed.current!;

    const scale = idleDrift * 0.01;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const ang = t * sp[i] + ph[i];
      const r = ra[i] * scale;
      arr[ix] = base[ix] + Math.cos(ang) * r;
      arr[ix + 1] = base[ix + 1] + Math.sin(ang) * r;
      arr[ix + 2] = base[ix + 2];
    }

    attr.needsUpdate = true;
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef} geometry={geometry} material={material} />
    </group>
  );
}

export default function StarfieldHeroGradient() {
  return (
    <section className="w-full text-white">
      <div
        className="pointer-events-none fixed inset-0 -z-9"
        style={{
          background:
            'radial-gradient(130% 80% at 50% 130%, rgba(171, 7, 7, 0.4) 0%, rgba(0,0,0,0) 100%)',
        }}
      />
      <div className="pointer-events-none fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 90], fov: 60 }}>
          <SkyBackground
            colors={['#000000', '#000000', '#000000']}
            stops={[0, 0.6, 1]}
            center={[0.5, 0.2]}
            radius={0.95}
          />
          <Starfield
            count={500}
            color="#da5555"
            spread={200}
            size={1}
            scrollParallax={2}
            idleDrift={100}
          />
        </Canvas>
      </div>
    </section>
  );
}
