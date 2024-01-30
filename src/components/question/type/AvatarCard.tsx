import FlowerIcon from 'assets/images/flower.svg?react';

type Options = {
  id: number;
  value: string;
  fill: string;
};

type Props = {
  options: Options[];
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const AvatarCard = ({ options, onClick }: Props) => {
  return (
    <div className="flex justify-between">
      {options.map(({ id, value, fill }) => {
        return (
          <button
            key={id}
            className="custom-hover flex h-[187px] w-[158px] flex-col items-center justify-between rounded-[5px] bg-gray-100 py-6 font-Pretendard"
            onClick={onClick}
          >
            <FlowerIcon fill={fill} />
            <span className="mt-2 font-Pretendard text-[17px]">{value}</span>
          </button>
        );
      })}
    </div>
  );
};

export default AvatarCard;
