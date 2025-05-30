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
    <section className="mx-auto max-w-[1110px] space-y-6 md:h-[792px]">
      <PageTitle index={3} title="Space Launch 101" />

      <section className="flex flex-col gap-8">
        <div className="pt-20">
          <div className="relative h-[300px] overflow-hidden sm:hidden md:block">
            <Image
              src={selectedTechnology.images.portrait}
              alt={selectedTechnology.name}
              fill
              className="object-cover object-bottom"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-10 px-6">
          <Pagination
            selectedTechnologyIndex={selectedTechnologyIndex}
            onTechnologyChange={handleTechnologyChange}
          />
          <div className="space-y-4 text-center md:text-left">
            <div className="space-y-4">
              <p className="text-preset-4 text-white/50">The Terminology...</p>
              <h2 className="text-preset-3">{selectedTechnology.name}</h2>
            </div>
            <p className="text-preset-9">{selectedTechnology.description}</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default TechnologyPage;
