import FlowerIcon from 'assets/images/flower.svg?react';

type Props = {
  options?: React.ReactNode;
};

const ImageCardButton = ({ options }: Props) => {
  return (
    <ul className="flex justify-between">
      {options.map((el) => {
        return (
          <li
            key={el}
            className="flex h-[187px] w-[158px] flex-col items-center justify-between rounded-[5px] bg-gray100 py-6 font-Pretendard"
          >
            <FlowerIcon />
            <span className="font-Pretendard text-[17px] font-medium">{el}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default ImageCardButton;
