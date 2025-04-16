import { BackgroundImage } from "@/components/background-image";
import { Navbar } from "@/components/navigation";
import clsx from "clsx";
import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import "./globals.css";

const bellefair = Bellefair({ weight: ["400"], variable: "--bellefair" });
const barlowCondensed = Barlow_Condensed({
  weight: ["400"],
  variable: "--barlow-condensed",
});
const barlow = Barlow({ weight: ["400"], variable: "--barlow" });

export const metadata: Metadata = {
  title: "Space Tourism Website",
  description: "Travel to space.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={clsx(
          bellefair.variable,
          barlow.variable,
          barlowCondensed.variable,
          "bg-dark antialiased",
        )}
      >
        <BackgroundImage />
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
