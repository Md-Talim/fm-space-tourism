interface CrewMemberPaginationProps {
  selectedCrewMemberIndex: number;
  onSelectCrewMember: (index: number) => void;
}

export const CrewMemberPagination = ({
  selectedCrewMemberIndex,
  onSelectCrewMember,
}: CrewMemberPaginationProps) => {
  return (
    <div className="flex justify-center space-x-4 md:justify-start">
      {[0, 1, 2, 3].map((memberIndex) => (
        <button
          key={memberIndex}
          className={`h-3 w-3 rounded-full transition-colors ${
            memberIndex === selectedCrewMemberIndex
              ? "bg-white"
              : "bg-gray-500 opacity-50 hover:opacity-100"
          }`}
          onClick={() => onSelectCrewMember(memberIndex)}
          type="button"
        />
      ))}
    </div>
  );
};
