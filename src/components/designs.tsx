import { Alegreya } from "next/font/google";
import { DesignCard } from "./design-card";

const alegreya = Alegreya({
    subsets: ["latin"],
    weight: "700",
  });

export default function Designs() {

    return (
        <div className="p-10">
            <p className={`text-4xl ${alegreya.className} text-center`}>We make designs that will make you go 😲</p>
            {/* <div className="grid grid-cols-3">
                <DesignCard />
                <DesignCard />
                <DesignCard />
                <DesignCard />
                <DesignCard />
            </div> */}
        </div>
    )
}