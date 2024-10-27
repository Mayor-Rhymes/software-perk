'use client';

import Link from 'next/link';
import { useMedia } from 'react-use';
import MobileNavBar from './mobileNavBar';

//import { motion } from "framer-motion";

const menuItems = [
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const isMobile = useMedia('(max-width: 1020px)', false);
  

  if (isMobile) {
    return <MobileNavBar />;
  }

  return (
    <nav className="hidden items-center justify-between h-20 px-6 sm:flex">
      <Link href="/" className="text-2xl font-bold">
        Software Perk
      </Link>

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
      </ul>
    </nav>
  );
}
