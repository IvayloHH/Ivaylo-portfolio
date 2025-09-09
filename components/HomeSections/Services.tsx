import MotionCard from '../MotionCard';
import { services } from '@/lib/constants';

const Services = () => {
  return (
    <section className="bg-zinc-900/50 backdrop-blur-xs pt-48 md:pt-96">
      <h1 className="text-5xl text-amber-50/90 md:text-7xl font-bold sticky top-20 md:top-30 px-10">
        WHAT I DO
      </h1>
      <div className="bg-transparent text-amber-100">
        {services.map((service, idx) => (
          <MotionCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
