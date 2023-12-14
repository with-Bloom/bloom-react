type Props = {
  options: string[];
  onClick: () => void;
};

const PrimaryButton = ({ options, onClick }: Props) => {
  return (
    <ul className="flex flex-col gap-3">
      {options.map((el) => {
        return (
          <button
            key={el}
            className="text-gray700 flex h-11 w-[327px] items-center justify-items-start rounded-[5px] bg-gray100 p-[13px] font-Pretendard text-[17px] font-medium"
            onClick={onClick}
          >
            {el}
          </button>
        );
      })}
    </ul>
  );
};

export default PrimaryButton;
