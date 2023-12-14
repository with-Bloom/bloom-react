type Props = {
  children: string;
};

const NextButton = ({ children }: Props) => {
  return (
    <div className="bg-gray600 flex h-[55px] w-[327px] items-center justify-center rounded-[10px] font-Pretendard text-[17px] font-bold text-white">
      {children}
    </div>
  );
};

export default NextButton;
