"use client";

import { PageTitle } from "@/components/shared/page-title";
import data from "@/data.json";
import Image from "next/image";
import { useState } from "react";
import { DestinationTab } from "./destination-tab";

const DestinationPage = () => {
  const [selectedDestinationIndex, setSelectedDestinationIndex] = useState(0);
  const handleDestinationSelect = (index: number) => {
    setSelectedDestinationIndex(index);
  };

  const selectedDestination = data.destinations[selectedDestinationIndex];

  return (
    <section className="mx-auto max-w-[1110px] space-y-6 p-6 sm:p-10 md:p-0 md:pt-12">
      <PageTitle index={1} title="Pick Your Destination" />

      <section className="flex flex-col items-center gap-8 md:flex-row">
        <div className="py-[26.5px] sm:py-[42px] md:py-[127px]">
          <Image
            alt="Destination Moon"
            className="mx-auto aspect-square w-[150px] sm:w-[300px] md:mx-7 md:w-[480px]"
            src={selectedDestination.images.webp}
            width={480}
            height={480}
          />
        </div>

        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-10 md:px-12 md:text-left">
          <DestinationTab
            selectedDestinationIndex={selectedDestinationIndex}
            onSelectDestination={handleDestinationSelect}
          />

          <div>
            <h2 className="text-preset-2">{selectedDestination.name}</h2>
            <p className="text-preset-9">{selectedDestination.description}</p>
          </div>

          <hr className="border-t border-gray-600" />

          <div className="flex w-full flex-col gap-3 space-y-6 sm:flex-row">
            <div className="flex-1">
              <p className="text-preset-8 text-light">Est. Distance</p>
              <p className="font-bellefair text-[28px] text-white uppercase">
                {selectedDestination.distance}
              </p>
            </div>
            <div className="flex-1">
              <p className="text-preset-8 text-light">Est. Travel Time</p>
              <p className="font-bellefair text-[28px] text-white uppercase">
                {selectedDestination.travel}
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default DestinationPage;
