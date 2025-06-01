"use client";

import data from "@/data.json";
import clsx from "clsx";

interface Props {
  selectedDestinationIndex: number;
  onSelectDestination: (destination: number) => void;
}

export const DestinationTab = ({
  selectedDestinationIndex,
  onSelectDestination,
}: Props) => {
  const destinationList = data.destinations.map(
    (destination) => destination.name,
  );

  return (
    <div className="flex items-center justify-center gap-8 md:justify-start">
      {destinationList.map((destination, index) => (
        <button
          key={index}
          onClick={() => onSelectDestination(index)}
          className={clsx(
            "text-preset-8 border-b-2 border-transparent pb-2 hover:cursor-pointer",
            index == selectedDestinationIndex
              ? "border-b-white text-white"
              : "text-light",
          )}
          type="button"
        >
          {destination}
        </button>
      ))}
    </div>
  );
};
