import { StaticImageData } from "next/image";
import nextjs from "../../public/images/nextjs-logo.png"
import nuxtjs from "../../public/images/nuxtlogo.png";



interface ITechnologies {
  id: number;
  image: StaticImageData;
  title: string
}

export const fullstackStore: ITechnologies[] = [
  {
    id: 1,
    image: nextjs,
    title: "NEXT JS"

  },
  {
    id: 2,
    image: nuxtjs,
    title: "NUXT JS"

  },
  
  
];
