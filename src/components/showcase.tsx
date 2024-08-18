import { Alegreya } from "next/font/google";
import ShowcaseCard from "./showcase-card";
import { ShowcaseStore } from "@/lib/showcase-data";
const alegreya = Alegreya({
  subsets: ["latin"],
  weight: "700",
});
export default function Showcase() {
  return (
    <div className="flex flex-col gap-5">
      <p className={`text-center text-4xl ${alegreya.className}`}>Our Expertise?</p>

      <p className="text-center text-3xl">It is pretty simple. We:</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 p-10 gap-10">
        {ShowcaseStore.map((card) => (
          <ShowcaseCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
