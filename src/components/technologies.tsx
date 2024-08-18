import { Alegreya } from "next/font/google";
import { TechnologiesStore } from "@/lib/technologies-data";
import { TechnologiesCard } from "./technologies-card";
const alegreya = Alegreya({
  subsets: ["latin"],
  weight: "700",
});

export default function Technologies() {
  return (
    <div className="flex flex-col gap-10 p-10">
      <p className={`text-4xl ${alegreya.className} text-center`}>
        Our Technology Stack ⚙️
      </p>

      <div className="flex flex-col gap-10">
        <p className="text-2xl font-semibold">Front End</p>
        <div className="flex justify-center lg:justify-start flex-wrap gap-x-20 ">
          {TechnologiesStore.map((tech) => (
            <TechnologiesCard key={tech.id} {...tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
