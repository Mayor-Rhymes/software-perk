import { StaticImageData } from "next/image";
import html from "../../public/images/html-logo.png";
import css from "../../public/images/CSS3.png";
import javascript from "../../public/images/JavaScript.png";
import tailwind from "../../public/images/Tailwind CSS.png";
import react from "../../public/images/react-logo.png";
import vue from "../../public/images/vue-logo.png";
import angular from "../../public/images/angular-logo.png";
import svelte from "../../public/images/svelte-logo.png";
// import html from "../../public/images/html-logo.png";


interface ITechnologies {
  id: number;
  image: StaticImageData;
  title: string
}

export const TechnologiesStore: ITechnologies[] = [
  {
    id: 1,
    image: html,
    title: "HTML"

  },
  {
    id: 2,
    image: css,
    title: "CSS"

  },
  {
    id: 3,
    image: javascript,
    title: "JAVASCRIPT"

  },
  {
    id: 4,
    image: tailwind,
    title: "TAILWIND"

  },
  {
    id: 5,
    image: react,
    title: "REACT"
  },
  {
    id: 6,
    image: vue,
    title: "VUE",
  },
  {
    id: 7,
    image: angular,
    title: "ANGULAR",
  },
  {
    id: 8,
    image: svelte,
    title: "SVELTE",
  },
];
