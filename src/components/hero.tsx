import { Alegreya } from "next/font/google";
import Image from "next/image";
import engine from "../../public/images/computer-engineer.png";
import engine2 from "../../public/images/computer-engineer-2.png";

const alegreya = Alegreya({
  subsets: ["latin"],
  weight: "700",
});

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4 sm:px-8 md:px-16 lg:px-20 py-16 lg:py-20 min-h-[600px] lg:min-h-[700px] relative">
      <h1 className={`text-center text-3xl sm:text-4xl lg:text-6xl ${alegreya.className} max-w-4xl`}>
        Transforming Ideas into Digital Reality
      </h1>

      <div className="flex flex-col gap-4 max-w-2xl text-center">
        <p className="text-base sm:text-lg">
          We are a cutting-edge software company that combines innovative solutions with stunning design.
        </p>
        <p className="text-base sm:text-lg">
          Our team delivers fast, cost-effective, and efficient results that bring your visionary ideas to life.
        </p>
      </div>
      
      <button className="bg-black text-white border-none px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg">
        Get a Quote
      </button>

      <p className="text-sm text-center mt-4">Take the first step towards making your digital dreams a reality!</p>

      <Image 
        src={engine} 
        alt="Software Engineer" 
        className="w-24 h-24 sm:w-32 sm:h-32 lg:w-64 lg:h-64 absolute left-4 sm:left-8 lg:left-16 top-1/2 -translate-y-1/2 drop-shadow-lg"
      />
      <Image 
        src={engine2} 
        alt="Software Engineer" 
        className="w-24 h-24 sm:w-32 sm:h-32 lg:w-64 lg:h-64 absolute right-4 sm:right-8 lg:right-16 top-1/2 -translate-y-1/2 drop-shadow-lg"
      />
    </div>
  );
}