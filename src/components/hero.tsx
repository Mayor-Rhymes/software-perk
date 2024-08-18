import { Roboto, Noto_Sans, Alegreya } from "next/font/google";
import Image from "next/image";
import engine from "../../public/images/computer-engineer.png";
import engine2 from "../../public/images/computer-engineer-2.png";
const roboto = Roboto({
  subsets: ["latin"],
  weight: "700",
});

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: "700",
});
const alegreya = Alegreya({
  subsets: ["latin"],
  weight: "700",
});

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-10 px-20 relative pt-16 text-lg py-20 lg:h-[700px]">
      <p className={`text-center text-4xl lg:text-6xl ${alegreya.className}`}>
        Providing that je ne sai quoi your idea needs.
      </p>

      <div className="flex flex-col gap-4 lg:gap-1">
        <p className="text-center">
          We are a solutions based software company with an eye for design and a
          flair for creativity.
        </p>
        <p className="text-center">
          We build fast, cheaply and efficiently while still providing a
          concrete outlet for your lofty ideas.
        </p>
          </div>
          
          <button className="bg-black self-center text-white border-none w-48 p-4 rounded-2xl transition-all duration-300 delay-100 hover:bg-white hover:text-black hover:shadow-md">
             Get a quote
          </button>

          <p className="text-sm text-center">Get a quote from us and make your dreams a reality!</p>

          <Image src={engine} alt="Hello" height="300" width="300" className="h-[100px] w-[100px] lg:h-[300px] lg:w-[300px] lg:absolute left-5 top-60 drop-shadow-lg"/>
          <Image src={engine2} alt="Hello" height="300" width="300" className="h-[100px] w-[100px] lg:h-[300px] lg:w-[300px] lg:absolute right-5 top-60 drop-shadow-lg"/>
    </div>
  );
}
