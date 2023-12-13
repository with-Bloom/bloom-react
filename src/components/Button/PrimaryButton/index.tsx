type Props = {
  children: string;
};

const PrimaryButton = ({ children }: Props) => {
  return (
    <button className="flex h-11 w-[327px] items-center justify-items-start rounded-[5px] bg-gray100 p-[13px] text-[17px] font-medium text-gray400">
      {children}
    </button>
  );
};

export default PrimaryButton;
