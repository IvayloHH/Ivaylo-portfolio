import Services from '@/components/HomeSections/Services';
import HorizontalCards from '@/components/HomeSections/HorizontalCards';
import StarsBackground from '@/components/StarsBackground';
import AnimatedNavbarResponsive from '@/components/header/Navbar';
import OverlaySection from '@/components/HomeSections/OverlaySection';

const HomePage = () => {
  return (
    <>
      <OverlaySection />
      <AnimatedNavbarResponsive />
      <StarsBackground />
      <HorizontalCards />
      <Services />
    </>
  );
};
export default HomePage;
