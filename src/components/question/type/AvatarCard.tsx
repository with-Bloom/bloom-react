import FlowerIcon from 'assets/images/flower.svg?react';

type Options = {
  id: number;
  value: string;
  fill: string;
};

type Props = {
  options: Options[];
  // eslint-disable-next-line no-unused-vars
  onClick: (value: string) => void;
  ga: string
};

const AvatarCard = ({ options, onClick, ga }: Props) => {
  return (
    <div className="flex justify-between">
      {options.map(({ id, value, fill }) => {
        return (
          <button
            key={id}
            className="custom-hover flex h-[187px] w-[158px] flex-col items-center justify-between rounded-[5px] bg-gray-100 py-6 font-pretendard"
            onClick={() => onClick(value)}
            data-ga={ga}
          >
            <FlowerIcon fill={fill} />
            <span className="mt-2 font-pretendard text-[17px]">{value}</span>
          </button>
        );
      })}
    </div>
  );
};

export default AvatarCard;
