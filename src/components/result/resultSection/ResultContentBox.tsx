const ResultContentBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-5 w-full rounded-[10px] border border-opacity-30 border-white bg-gradient-to-b from-[rgba(255,255,255,0.52)] to-[rgba(255,255,255,0.52)] px-[26px] pb-[70px] pt-[29px] backdrop-blur-[10px]">
      <span className="whitespace-pre-line font-pretendard text-[15px] leading-[170%] tracking-[-0.6px] text-gray900">
        {children}
      </span>
    </div>
  );
};

export default ResultContentBox;
