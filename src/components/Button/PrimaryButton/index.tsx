type Props = {
  children: string;
};

const PrimaryButton = ({ children }: Props) => {
  return (
    <button className="bg-gray100 text-gray400 flex h-11 w-[327px] items-center justify-items-start rounded-[5px] p-[13px] text-[17px] font-medium">
      {children}
    </button>
  );
};

export default PrimaryButton;
