"use client";

import { PageTitle } from "@/components/shared/page-title";
import data from "@/data.json";
import Image from "next/image";
import { useState } from "react";
import { CrewMemberPagination } from "./pagination";

const CrewPage = () => {
  const [selectedCrewMemberIndex, setSelectedCrewMemberIndex] = useState(0);
  const selectedCrewMember = data.crew[selectedCrewMemberIndex];

  const handleCrewMemberChange = (index: number) => {
    setSelectedCrewMemberIndex(index);
  };

  return (
    <section className="md:h-[792px mx-auto max-w-[1110px] space-y-6 p-6 sm:p-10 md:p-0 md:pt-12">
      <PageTitle index={1} title="Meet Your Crew" />

      <section className="flex flex-col items-center gap-8 md:flex-row">
        <div className="mx-auto mt-10 max-w-xl text-center md:text-left">
          <div className="flex flex-col justify-center gap-y-6 md:h-[671px]">
            <div className="flex flex-col gap-y-2 md:gap-y-3">
              <p className="text-preset-4 opacity-50">
                {selectedCrewMember.role}
              </p>
              <h2 className="text-preset-3 leading-tight">
                {selectedCrewMember.name}
              </h2>
            </div>
            <p className="text-preset-9 min-h-[164px] sm:min-h-[117px]">
              {selectedCrewMember.bio}
            </p>
          </div>

          <div className="">
            <CrewMemberPagination
              selectedCrewMemberIndex={selectedCrewMemberIndex}
              onSelectCrewMember={handleCrewMemberChange}
            />
          </div>
        </div>

        <div className="py-[26.5px] sm:py-[42px] md:mx-7">
          <div className="mask-gradient mx-auto max-h-full w-[300px] sm:h-[463px] sm:w-[446px] sm:max-w-full md:h-full md:w-full">
            <Image
              alt={selectedCrewMember.name}
              src={selectedCrewMember.images.webp}
              width={540}
              height={540}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default CrewPage;
