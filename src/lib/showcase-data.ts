import { StaticImageData } from "next/image";
import ideate from "../../public/images/ideate.png";
import design from "../../public/images/design.png";
import implement from "../../public/images/implement.png";


interface IShowcase {
  id: number;
  image: StaticImageData;
  title: string;
  alternativeText: string;
  description: string;
}

export const ShowcaseStore: IShowcase[] = [
  {
    id: 1,
    image: ideate,
    title: "Ideate",
    alternativeText: "Ideate image",
    description:
      "We help refine your ideas and make them sharper, clearer and bolder.",
  },
  {
    id: 2,
    image: design,
    title: "Design",
    alternativeText: "Design image",
    description:
      "We are expert designers with \
      a very talented and creative UI/UX \
      and product design team that works \
       like a well-oiled machine",
  },
  {
    id: 3,
    image: implement,
    title: "Implement",
    alternativeText: "Implement image",
    description:
      "We create seamless prototypes of your ideas and prove that they work!",
  },
];
