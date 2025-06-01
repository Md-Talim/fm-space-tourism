"use client";
import clsx from "clsx";

interface Props {
  selectedTechnologyIndex: number;
  onTechnologyChange: (index: number) => void;
}

export const Pagination = ({
  selectedTechnologyIndex,
  onTechnologyChange,
}: Props) => {
  return (
    <div className="flex gap-x-4 md:flex-col md:gap-y-8">
      {[0, 1, 2].map((item) => (
        <button
          key={item}
          className={clsx(
            "text-preset-4 aspect-square w-10 cursor-pointer rounded-full border sm:w-14 md:w-20",
            item === selectedTechnologyIndex
              ? "text-dark border-white bg-white"
              : "text-light border-white/25",
          )}
          onClick={() => onTechnologyChange(item)}
          type="button"
        >
          {item + 1}
        </button>
      ))}
    </div>
  );
};
