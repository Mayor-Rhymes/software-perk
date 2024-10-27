import { Contact2, CreditCard, Server, UsersRound } from 'lucide-react';
import { Sidebar, SidebarContent } from './ui/sidebar';


const menuItems = [
  { href: '/services', label: 'Services', icon: Server},
  { href: '/pricing', label: 'Pricing', icon: CreditCard },
  { href: '/about', label: 'About', icon: UsersRound},
  { href: '/contact', label: 'Contact', icon: Contact2},
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent />
    </Sidebar>
  );
}
