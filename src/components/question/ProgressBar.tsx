type Props = {
  currentPage: number;
};

const ProgressBar = ({ currentPage }: Props) => {
  const percentage = (currentPage / 9) * 100;

  return (
    <div className="flex items-center justify-between">
      <div className="h-[2.4px] w-[298px] bg-neutral-200">
        <div className="h-[2.4px] bg-indigo" style={{ width: `${percentage}%` }}></div>
      </div>
      <span className="font-pretendard text-sm font-medium text-gray300">
        {currentPage}/{9}
      </span>
    </div>
  );
};

export default ProgressBar;
