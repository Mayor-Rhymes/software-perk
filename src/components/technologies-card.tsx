import Image, { StaticImageData } from "next/image";
//import { motion } from "framer-motion";

interface TechnologiesCardProps {
  id: number;
  image: StaticImageData;
  title: string;
}

export const TechnologiesCard = ({ id, image, title }: TechnologiesCardProps) => {
  return (
    <div
      className="flex bg-background text-black flex-col items-center justify-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <Image src={image} alt={title} className="w-16 h-16 object-contain" />
      <p className="mt-2 text-sm font-medium">{title}</p>
    </div>
  );
};
