import ShowcaseCard from "./showcase-card";
import { ShowcaseStore } from "@/lib/showcase-data";

export default function Showcase() {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 px-4 sm:px-6 md:px-8 lg:px-10">
      <p className="text-center text-2xl sm:text-3xl md:text-4xl font-alegreya">Our Expertise?</p>

      <p className="text-center text-xl sm:text-2xl md:text-3xl">It is pretty simple. We:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {ShowcaseStore.map((card) => (
          <ShowcaseCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}