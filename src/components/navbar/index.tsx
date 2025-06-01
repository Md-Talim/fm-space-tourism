import data from "@/data.json";
import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import { NavLink } from "./navlink";

export const Navbar = () => {
  const navigationLinks = data.links;

  return (
    <header className="relative flex items-center justify-between py-6 md:py-0 md:pt-10">
      {/* Logo */}
      <div className="pl-6 md:pl-10 lg:pl-16">
        <div className="relative h-12 w-12">
          <Link href="/">
            <Image src="/assets/shared/logo.svg" fill alt="Logo" />
          </Link>
        </div>
      </div>

      {/* Navigation Links */}
      <nav aria-label="Primary navigation" className="hidden sm:flex">
        <ul className="bg-blur flex items-center gap-12 pr-6 pl-40 md:pr-10 lg:pr-16">
          {navigationLinks.map(({ link, label }, index) => (
            <li key={index}>
              <NavLink index={index} link={link} label={label} />
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Nav */}
      <MobileNav />
    </header>
  );
};
