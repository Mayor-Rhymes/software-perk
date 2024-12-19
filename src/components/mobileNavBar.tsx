import { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Contact2, CreditCard, Menu, Moon, Server, Sun, UsersRound } from 'lucide-react';
import Link from 'next/link';
import { DialogDescription, DialogTitle } from './ui/dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { useTheme } from 'next-themes';

//import { motion } from 'framer-motion';

const MobileNavBar = () => {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();

  const menuItems = [
    { href: '/services', label: 'Services', icon: Server },
    //{ href: '/pricing', label: 'Pricing', icon: CreditCard },
    { href: '/about', label: 'About', icon: UsersRound },
    { href: '/contact', label: 'Contact', icon: Contact2 },
  ];

  return (
    <div className="bg-background">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <DialogTitle>
            <VisuallyHidden.Root>Menu</VisuallyHidden.Root>
          </DialogTitle>
          <DialogDescription>
            <VisuallyHidden.Root>Navigation</VisuallyHidden.Root>
          </DialogDescription>
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-10">
              <Link href="/" className="text-2xl font-bold">
                NexGenesis
              </Link>
            </div>
            <nav className="flex-grow">
              <ul className="space-y-4">
                {menuItems.map((item, index) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-2 text-lg hover:text-primary transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      <item.icon className="h-6 w-6 inline-block mr-2" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="shadow-lg rounded-lg p-2">
              <DropdownMenuItem className="cursor-pointer rounded-lg text-sm font-medium p-2 hover:bg-gray-200 transition-colors" onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer rounded-lg text-sm font-medium p-2 hover:bg-gray-200 transition-colors" onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer rounded-lg text-sm font-medium p-2 hover:bg-gray-200 transition-colors" onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavBar;
