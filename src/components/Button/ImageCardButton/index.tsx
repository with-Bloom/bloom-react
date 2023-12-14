import FlowerIcon from 'assets/images/flower.svg?react';

type Props = {
  options: string[];
  onClick: () => void;
};

const ImageCardButton = ({ options, onClick }: Props) => {
  return (
    <div className="flex justify-between">
      {options.map((el) => {
        return (
          <button
            key={el}
            className="flex h-[187px] w-[158px] flex-col items-center justify-between rounded-[5px] bg-gray100 py-6 font-Pretendard"
            onClick={onClick}
          >
            <FlowerIcon />
            <span className="font-Pretendard text-[17px] font-medium">{el}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ImageCardButton;
