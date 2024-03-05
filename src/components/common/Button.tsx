type Props = {
  children: string;
  disabled?: any;
  ga?: string;
  onClick?: any;
};

const Button = ({ children, disabled, ga, onClick }: Props) => {
  return (
    <button
      className="flex h-[55px] items-center justify-center rounded-[10px] bg-gray1000 font-pretendard text-[17px] font-bold text-white disabled:bg-gray-400 w-full"
      disabled={disabled}
      data-ga={ga}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
