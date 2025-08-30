import HorizontalCards from '@/components/HomeSections/HorizontalCards';
import StarsBackground from '@/components/StarsBackground';
import OverlaySection from '@/components/HomeSections/OverlaySection';

const HomePage = () => {
  return (
    <>
      <StarsBackground />
      <OverlaySection />
      <section className="text-white text-4xl md:text-7xl relative mt-[240vh] max-w-[1440px] mx-auto z-10 leading-20">
        Design meets performance. I build responsive, motion-first apps that
        scale — for startups, small teams, and growing brands.
      </section>
      <HorizontalCards />
    </>
  );
};
export default HomePage;

// 1) Who I am
// 2) Hero section
// 3) About section
// 4) What I do
// 5) What I offer
// 6) Home section
// 7) Featured projects section
// 8) Per project text
// 9) Tech stack section
// 10) Testimonials section
// 11) Career goals
// 12) Work experience
// 13) My skills
// 14) FAQ questions
// 15) How I work
// 16) Contact / Book a meeting
