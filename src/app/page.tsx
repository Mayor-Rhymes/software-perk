import { AppSidebar } from '@/components/app-sidebar';
import Designs from '@/components/designs';
import Hero from '@/components/hero';
import Showcase from '@/components/showcase';
import Technologies from '@/components/technologies';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10">
      <Hero />
      <Showcase />
      <Designs />
      <Technologies />
    </main>
  );
}
