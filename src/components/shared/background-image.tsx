"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const BackgroundImage = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Remove any existing background classes
    document.body.classList.remove(
      "bg-home",
      "bg-destination",
      "bg-crew",
      "bg-technology",
    );

    // Add the appropriate background class based on the current route
    if (pathname === "/") {
      document.body.classList.add("bg-home");
    } else if (pathname === "/destination") {
      document.body.classList.add("bg-destination");
    } else if (pathname === "/crew") {
      document.body.classList.add("bg-crew");
    } else if (pathname === "/technology") {
      document.body.classList.add("bg-technology");
    }
  }, [pathname]);

  return null;
};
