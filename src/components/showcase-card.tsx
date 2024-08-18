import { Alegreya } from "next/font/google";
import Image, { StaticImageData } from "next/image";
const alegreya = Alegreya({
  subsets: ["latin"],
  weight: "700",
});
interface ShowcaseProps {
  image: StaticImageData;
  title: string;
  description: string;
  alternativeText: string;
}

const ShowcaseCard = ({
  image,
  title,
  description,
  alternativeText,
}: ShowcaseProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 lg:flex-col lg:gap-3 bg-lime-100 py-10 px-6 rounded-xl">
      <Image
        src={image}
        alt={alternativeText}
        className="h-[100px] w-[100px] lg:h-[200px] lg:w-[200px]"
      />
      <div className="flex flex-col gap-3">
        <p className={`text-4xl font-semibold ${alegreya.className}`}>
          {title}
        </p>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ShowcaseCard;
