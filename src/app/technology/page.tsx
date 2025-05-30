"use client";

import { PageTitle } from "@/components/shared/page-title";
import data from "@/data.json";
import Image from "next/image";
import { useState } from "react";
import { Pagination } from "./pagination";

const TechnologyPage = () => {
  const technologyList = data.technology;
  const [selectedTechnologyIndex, setSelectedTechnologyIndex] = useState(0);
  const selectedTechnology = technologyList[selectedTechnologyIndex];

  const handleTechnologyChange = (index: number) => {
    setSelectedTechnologyIndex(index);
  };

  return (
    <section className="my-6 space-y-6 sm:my-10 md:my-12 md:ml-[165px] xl:mx-auto xl:max-w-[1275px]">
      <div className="sm:px-10 md:px-0">
        <PageTitle index={3} title="Space Launch 101" />
      </div>

      <section className="flex flex-col items-center justify-between gap-8 md:flex-row-reverse md:flex-wrap xl:flex-nowrap">
        <div className="pt-20 sm:pt-16 md:pt-0">
          <div className="relative h-[300px] w-screen overflow-hidden sm:hidden md:block md:h-[600px] md:w-[608px]">
            <Image
              src={selectedTechnology.images.portrait}
              alt={selectedTechnology.name}
              fill
              className="object-cover object-bottom"
            />
          </div>
          <div className="relative hidden sm:block sm:h-[356px] sm:w-screen md:hidden">
            <Image
              src={selectedTechnology.images.landscape}
              alt={selectedTechnology.name}
              fill
              className="object-cover object-bottom"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-10 px-6 sm:px-10 md:flex-row md:px-0">
          <Pagination
            selectedTechnologyIndex={selectedTechnologyIndex}
            onTechnologyChange={handleTechnologyChange}
          />
          <div className="space-y-4 text-center md:space-y-6 md:text-left">
            <div className="space-y-4">
              <p className="text-preset-4 text-white/50">The Terminology...</p>
              <h2 className="text-preset-3">{selectedTechnology.name}</h2>
            </div>
            <p className="text-preset-9 max-w-prose">
              {selectedTechnology.description}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default TechnologyPage;
