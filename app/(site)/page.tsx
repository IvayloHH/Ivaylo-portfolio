import HorizontalCards from '@/components/HomeSections/HorizontalCards';
import StarsBackground from '@/components/StarsBackground';
import OverlaySection from '@/components/HomeSections/OverlaySection';
import InnerSections from '@/components/HomeSections/Credibility';
import AboutDemo from '@/components/HomeSections/AboutDemo';
import FinalCTA from '@/components/HomeSections/FinalCTA';
import Services from '@/components/HomeSections/Services';

const HomePage = () => {
  return (
    <>
      <div
        id="scroll-top-anchor"
        className="h-[1px] pointer-events-none opacity-0"
        aria-hidden
      />
      <StarsBackground />
      <OverlaySection />
      <InnerSections />
      <Services />
      <HorizontalCards />
      <AboutDemo />
      <FinalCTA />
    </>
  );
};
export default HomePage;
