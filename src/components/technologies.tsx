import { TechnologiesStore } from '@/lib/frontend-tech-data';
import { backendStore } from '@/lib/backend-tech-data';
import { TechnologiesCard } from './technologies-card';
import { fullstackStore } from '@/lib/fullstack-tech-data';

export default function Technologies() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10">
      <p
        className="text-2xl sm:text-3xl md:text-4xl font-alegreya text-center"
      >
        Our Technology Stack ⚙️
      </p>

      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
        <p className="text-center text-xl sm:text-2xl font-semibold md:text-start lg:text-start">Front End</p>
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {TechnologiesStore.map((tech) => (
            <TechnologiesCard key={tech.id} {...tech} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
        <p className="text-center text-xl sm:text-2xl font-semibold md:text-start lg:text-start">Back End</p>
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {backendStore.map((tech) => (
            <TechnologiesCard key={tech.id} {...tech} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
        <p className="text-center text-xl sm:text-2xl font-semibold md:text-start lg:text-start">FullStack</p>
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {fullstackStore.map((tech) => (
            <TechnologiesCard key={tech.id} {...tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
