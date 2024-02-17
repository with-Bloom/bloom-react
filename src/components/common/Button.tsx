type Props = {
  children: string;
  onClick?: any;
  disabled?: any;
  size?: 'small' | 'medium';
  ga?: string;
};

const SIZES = {
  small: 'w-[275px]',
  medium: 'w-[327px]',
};

const Button = ({ children, onClick, disabled, size = 'medium', ga }: Props) => {
  const buttonWidthSize = SIZES[size];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      data-ga={ga} 
      className={`${buttonWidthSize} flex h-[55px] items-center justify-center rounded-[10px] bg-gray1000 font-pretendard text-[17px] font-bold text-white disabled:bg-gray-400`}
    >
      {children}
    </button>
  );
};

export default Button;
