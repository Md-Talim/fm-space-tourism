import Image from "next/image";
import { MobileNav } from "./mobile-nav";
import { NavLink } from "./navlink";

export const Navbar = () => {
  return (
    <header className="relative my-10 flex items-center justify-between">
      {/* Logo */}
      <div className="pl-6 md:pl-10 lg:pl-16">
        <Image
          src="/assets/shared/logo.svg"
          height={48}
          width={48}
          alt="Logo"
        />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex">
        <ul className="flex items-center gap-12 bg-white/10 pr-6 pl-40 backdrop-blur-sm md:pr-10 lg:pr-16">
          <NavLink index={0} label="Home" link="/" />
          <NavLink index={1} label="Destination" link="/destination" />
          <NavLink index={2} label="Crew" link="/crew" />
          <NavLink index={3} label="Techonology" link="/technology" />
        </ul>
      </nav>

      {/* Mobile Nav */}
      <MobileNav />
    </header>
  );
};
