import MotionCard from '../MotionCard';
import { services } from '@/lib/constants';

const Services = () => {
  return (
    <section className="bg-zinc-900/50 pt-96">
      <h1 className="text-5xl text-zinc-100 md:text-8xl font-bold sticky top-30 px-24">
        WHAT I DO
      </h1>
      <div className="bg-transparent">
        {services.map((service, idx) => (
          <MotionCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
