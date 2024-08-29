import { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { DialogDescription, DialogTitle } from './ui/dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
//import { motion } from 'framer-motion';

const MobileNavBar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
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
              Software Perk
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
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavBar;
