"use client";

import data from "@/data.json";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { MobileNavLink } from "./navlink";

export const MobileNav = () => {
  const navigationLinks = data.links;
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
    <div className="sm:hidden">
      <button
        className="relative z-[1001] h-10 cursor-pointer p-2.5 pr-6 md:hidden md:pr-10 lg:pr-16"
        onClick={handleMenuExpand}
        type="button"
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
        aria-label="Mobile navigation"
        className={clsx(
          "bg-blur absolute top-0 right-0 z-[1000] h-screen overflow-x-hidden pt-32 pl-8 transition-all duration-300 ease-in-out",
          isExpanded
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0",
        )}
      >
        <ul className="flex flex-col gap-7">
          {navigationLinks.map(({ link, label }, index) => (
            <li key={index}>
              <MobileNavLink index={index} link={link} label={label} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
