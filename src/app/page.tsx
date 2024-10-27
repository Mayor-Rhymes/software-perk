import Designs from "@/components/designs";
import Hero from "@/components/hero";
import Showcase from "@/components/showcase";
import Technologies from "@/components/technologies";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarProvider>
    <main className="min-h-screen flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10">
      <SidebarTrigger />
      <Hero />
      <Showcase />
      <Designs />
      <Technologies />
    </main>
    </SidebarProvider>
  );
}