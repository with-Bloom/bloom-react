type Props = {
  onClick: () => void;
  children: string;
};

const NextButton = ({ children, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="bg-gray600 flex h-[55px] w-[327px] items-center justify-center rounded-[10px] font-Pretendard text-[17px] font-bold text-white"
    >
      {children}
    </div>
  );
};

export default NextButton;
