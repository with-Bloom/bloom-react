type Props = {
  children: string;
  disabled?: any;
  ga?: string;
  size?: 'small' | 'medium';
  onClick?: any;
};

const SIZES = {
  small: 'w-[275px]',
  medium: 'w-[327px]',
};

const Button = ({ children, disabled, ga, size = 'medium', onClick }: Props) => {
  const buttonWidthSize = SIZES[size];

  return (
    <button
      className={`${buttonWidthSize} flex h-[55px] items-center justify-center rounded-[10px] bg-gray1000 font-pretendard text-[17px] font-bold text-white disabled:bg-gray-400`}
      disabled={disabled}
      data-ga={ga}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
