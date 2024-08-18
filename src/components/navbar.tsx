import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-[80px] flex items-center px-8">
      <Link href="/">
        <p className="grow text-xl">Software Perk</p>
      </Link>

      <ul className="flex grow-[2] items-center justify-evenly">
        <li className="hover:font-semibold hover:text-black">
          <Link href="services">Services</Link>
        </li>
        <li className="hover:font-semibold hover:text-black">
          <Link href="pricing">Pricing</Link>
        </li>
        <li className="hover:font-semibold hover:text-black">
          <Link href="history">History</Link>
        </li>
      </ul>
    </nav>
  );
}
