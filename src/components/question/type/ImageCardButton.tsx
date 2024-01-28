import FlowerIcon from 'assets/images/flower.svg?react';

type Option = {
  label: string;
  fill: string;
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
            key={el.label}
            className="custom-hover flex h-[187px] w-[158px] flex-col items-center justify-between rounded-[5px] bg-gray-100 py-6 font-Pretendard"
            onClick={() => onClick(el.label)}
          >
            <FlowerIcon fill={el.fill} />
            <span className="mt-2 font-Pretendard text-[17px]">{el.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ImageCardButton;
