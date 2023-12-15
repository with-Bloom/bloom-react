type Props = {
  children: string;
  onClick: () => void;
  disabled: boolean;
};

const NextButton = ({ children, onClick, disabled }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`bg-${
        disabled ? 'gray400' : 'gray700'
      } flex h-[55px] w-[327px] items-center justify-center rounded-[10px] font-Pretendard text-[17px] font-bold text-white transition-opacity ease-in-out`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default NextButton;
