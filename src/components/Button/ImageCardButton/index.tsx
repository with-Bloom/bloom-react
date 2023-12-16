import FlowerIcon from 'assets/images/flower.svg?react';

type Option = {
  target: string;
  color: string;
};

type Props = {
  options: Option[];
  onClick: any;
};

const ImageCardButton = ({ options, onClick }: Props) => {
  return (
    <div className="flex justify-between">
      {options.map((el) => {
        return (
          <button
            key={el.target}
            className="flex h-[187px] w-[158px] flex-col items-center justify-between rounded-[5px] bg-gray100 py-6 font-Pretendard hover:bg-gray-200"
            onClick={() => onClick(el.target)}
          >
            <FlowerIcon fill={el.color} />
            <span className="font-Pretendard text-[17px] font-medium">{el.target}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ImageCardButton;
