import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

interface ShowcaseProps {
  image: StaticImageData;
  title: string;
  description: string;
  alternativeText: string;
  isVisible: boolean; 
}

const ShowcaseCard = ({
  image,
  title,
  description,
  alternativeText,
  isVisible, 
}: ShowcaseProps) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row gap-10 lg:flex-col lg:gap-3 bg-lime-100 py-10 px-6 rounded-xl"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }} // Use isVisible for animation
      transition={{ duration: 0.3 }}
    >
      <Image
        src={image}
        alt={alternativeText}
        className="h-[100px] w-[100px] lg:h-[200px] lg:w-[200px]"
      />
      <div className="flex flex-col gap-3">
        <p className="text-4xl font-semibold font-alegreya">{title}</p>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </motion.div>
  );
};

export default ShowcaseCard;
