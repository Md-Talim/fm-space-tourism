import { Navbar } from "@/components/navigation";
import { BackgroundImage } from "@/components/shared/background-image";
import clsx from "clsx";
import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import "./globals.css";

const bellefair = Bellefair({
  weight: ["400"],
  variable: "--bellefair",
  subsets: ["latin"],
});
const barlowCondensed = Barlow_Condensed({
  weight: ["400"],
  variable: "--barlow-condensed",
  subsets: ["latin"],
});
const barlow = Barlow({
  weight: ["400"],
  variable: "--barlow",
  subsets: ["latin"],
});

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
          "antialiased",
        )}
      >
        <div className="min-h-screen overflow-x-hidden overflow-y-hidden">
          <BackgroundImage />
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
