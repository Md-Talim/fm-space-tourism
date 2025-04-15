"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  index: number;
  label: string;
  link: string;
}

export const NavLink = ({ index, label, link }: Props) => {
  const pathname = usePathname();
  const isCurrentPage = pathname === link;

  return (
    <Link
      className={clsx(
        "condensed-3 flex h-24 items-center justify-center",
        "border-b-2 border-b-transparent hover:border-b-2 hover:border-b-white/50",
        isCurrentPage && "md:border-b-white",
      )}
      href={link}
    >
      <span>
        <span className="font-bold">0{index}</span> {label}
      </span>
    </Link>
  );
};

export const MobileNavLink = ({ index, label, link }: Props) => {
  const pathname = usePathname();
  const isCurrentPage = pathname === link;

  return (
    <Link
      className={clsx(
        "condensed-3 mx-auto w-52",
        "border-r-2 border-r-transparent hover:border-r-2 hover:border-r-white/50",
        isCurrentPage && "border-r-white",
      )}
      href={link}
    >
      <span>
        <span className="font-bold">0{index}</span> {label}
      </span>
    </Link>
  );
};
