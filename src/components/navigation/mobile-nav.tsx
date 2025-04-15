"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { MobileNavLink } from "./navlink";

export const MobileNav = () => {
  const hamburgerIcon = "/assets/shared/icon-hamburger.svg";
  const closeIcon = "/assets/shared/icon-close.svg";

  const [isExpanded, setIsExpanded] = useState(false);
  const [menuIcon, setMenuIcon] = useState(
    isExpanded ? closeIcon : hamburgerIcon,
  );

  const handleMenuExpand = () => {
    setIsExpanded(!isExpanded);
    setMenuIcon(isExpanded ? hamburgerIcon : closeIcon);
  };

  return (
    <div className="md:hidden">
      <button
        className="h-10 cursor-pointer p-2.5 pr-6 md:hidden md:pr-10 lg:pr-16"
        onClick={handleMenuExpand}
      >
        <Image
          src={menuIcon}
          height={25}
          width={25}
          alt="Menu Icon"
          className="object-contain"
        />
      </button>

      <nav
        className={clsx(
          "bg-dark absolute top-20 left-0 w-full py-6 transition-all duration-300 ease-in-out",
          isExpanded
            ? "translate-x-0 opacity-100"
            : "pointer-events-none -translate-x-full opacity-0",
        )}
      >
        <ul className="flex flex-col gap-7">
          <MobileNavLink index={0} label="Home" link="/" />
          <MobileNavLink index={1} label="Destination" link="/destination" />
          <MobileNavLink index={2} label="Crew" link="/crew" />
          <MobileNavLink index={3} label="Techonology" link="/techonology" />
        </ul>
      </nav>
    </div>
  );
};
