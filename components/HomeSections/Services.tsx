import MotionCard from '../MotionCard';
import { services } from '@/lib/constants';

const Services = () => {
  return (
    <section>
      <h1 className="text-9xl font-bold text-gray-200 text-center">
        What I offer
      </h1>
      <div className="bg-transparent p-4 max-w-[1440px] mx-auto mb-[50vh]">
        {services.map((service, idx) => (
          <MotionCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
