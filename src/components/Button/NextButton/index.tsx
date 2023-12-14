type Props = {
  children: string;
  onClick: () => void;
};

const NextButton = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray700 flex h-[55px] w-[327px] items-center justify-center rounded-[10px] font-Pretendard text-[17px] font-bold text-white"
    >
      {children}
    </button>
  );
};

export default NextButton;
