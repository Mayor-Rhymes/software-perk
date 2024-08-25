import { Alegreya } from "next/font/google";

const alegreya = Alegreya({
  subsets: ["latin"],
  weight: "700",
});

export default function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h2 className={`${alegreya.className} text-xl mb-3`}>{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}