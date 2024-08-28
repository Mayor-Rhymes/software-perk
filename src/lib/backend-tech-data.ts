import { StaticImageData } from "next/image";
import expresslogo from "../../public/images/express-js.png";
import nest from "../../public/images/nestjs-logo.png"
import hono from "../../public/images/hono-logo.png"
import blazor from "../../public/images/blazor-logo.png"

// import html from "../../public/images/html-logo.png";


interface ITechnologies {
  id: number;
  image: StaticImageData;
  title: string
}

export const  backendStore: ITechnologies[] = [
  {
    id: 1,
    image: expresslogo,
    title: "EXPRESS JS"

  },
  {
    id: 2,
    image: nest,
    title: "NEST JS"

  },
  {
    id: 3,
    image: hono,
    title: "Hono JS"

  },
  {
    id: 4,
    image: blazor,
    title: "Blazor"

  },
  
];
