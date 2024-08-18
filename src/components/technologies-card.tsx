import Image, { StaticImageData } from "next/image";

interface TechnologiesCardProps {
  id: number;
  image: StaticImageData;
  title: string;
}
export const TechnologiesCard = ({id, image, title}: TechnologiesCardProps) => {
  return (
      <div className="flex flex-col gap-4 items-center justify-center border-2 border-lime-100 p-10 rounded-md hover:border-0 hover:shadow-md transition-shadow delay-200 duration-300 ">
          <Image src={image} alt={title} className="w-[100px] h-[100px]"/>
          <p>{title}</p>
    </div>
  );
};
