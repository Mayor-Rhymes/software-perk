"use client";

import Link from "next/link";
import { useMedia } from "react-use";
import MobileNavBar from "./mobileNavBar";
import { Moon, MoonIcon, Sun } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";

//import { motion } from "framer-motion";

const menuItems = [
  { href: "/services", label: "Services" },
  //{ href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const isMobile = useMedia("(max-width: 1020px)", false);
  const { setTheme } = useTheme()
  if (isMobile) {
    return <MobileNavBar />;
  }

  return (
    <nav className="hidden bg-background items-center justify-between h-20 px-6 sm:flex">
       <div className="flex items-center space-x-2">
        <Image src="/images/LogoNexGenesis.png" alt="NexGenesis" width={40} height={40} />
        <Link href="/" className="text-2xl font-bold">
          NexGenesis
        </Link>
      </div>

      <ul className="flex items-center space-x-8">
        {menuItems.map((item, index) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-lg font-medium hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}

        <li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="cursor-pointer rounded-lg text-sm font-medium p-2 hover:bg-gray-400 transition-colors" onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer rounded-lg text-sm font-medium p-2 hover:bg-gray-400 transition-colors" onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer rounded-lg text-sm font-medium p-2 hover:bg-gray-400 transition-colors" onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>
    </nav>
  );
}
