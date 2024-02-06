type Props = {
  children: string;
  onClick?: any;
  disabled?: any;
};

const Button = ({ children, onClick, disabled }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex h-[55px] w-[327px] items-center justify-center rounded-[10px] bg-gray700 font-Pretendard text-[17px] font-bold text-white disabled:bg-gray-400"
    >
      {children}
    </button>
  );
};

export default Button;
