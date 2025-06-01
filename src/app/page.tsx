import Link from "next/link";

const HomePage = () => {
  return (
    <section className="mx-auto max-w-[1110px] p-6 sm:justify-between sm:p-32 md:p-0">
      <div className="flex flex-col sm:gap-16 md:flex-row md:pt-[289px]">
        <div className="space-y-6 max-md:text-center md:flex-1">
          <h1 className="text-preset-5">
            So, You want to trave to
            <span className="text-preset-1 block">Space</span>
          </h1>
          <p className="text-preset-9">
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </div>

        <div className="flex items-center justify-center max-sm:h-96 md:flex-1">
          <div className="group relative">
            <div className="absolute inset-0 rounded-full bg-white/10 transition-transform duration-300 group-hover:scale-150"></div>
            <Link
              href="/destination"
              className="text-preset-4 relative z-999 flex aspect-square w-36 items-center justify-center rounded-full bg-white text-black uppercase sm:w-68"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
