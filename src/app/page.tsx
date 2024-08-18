import Designs from "@/components/designs";
import Hero from "@/components/hero";
import Showcase from "@/components/showcase";
import Technologies from "@/components/technologies";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-10">
      <Hero />
      <Showcase />
      <Designs />
      <Technologies />
    </main>
  );
}
