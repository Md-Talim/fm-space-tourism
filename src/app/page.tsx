import Link from "next/link";

const HomePage = () => {
  return (
    <section className="mx-auto flex flex-col p-6 sm:justify-between sm:gap-16 sm:p-32 md:w-[1110px] md:flex-row">
      <div className="space-y-6 max-md:text-center">
        <p className="text-preset-5">So, You want to trave to</p>
        <p className="text-preset-1">Space</p>
        <p className="text-preset-9">
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </div>

      <div className="flex items-center justify-center max-sm:h-96">
        <div className="group relative">
          <div className="absolute inset-0 rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-150 group-hover:cursor-pointer"></div>
          <Link
            href="/destination"
            className="text-preset-4 center aspect-square w-36 rounded-full bg-white text-black uppercase sm:w-68"
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
