import FlowerIcon from 'assets/images/flower.svg?react';

type Options = {
  id: number;
  value: string;
  fill: string;
};

type Props = {
  field: string;
  ga: string;
  options: Options[];
  // eslint-disable-next-line no-unused-vars
  onClick: (field: string, value: string) => void;
};

const AvatarCard = ({ field, ga, options, onClick }: Props) => {
  return (
    <div className="flex justify-between">
      {options.map(({ id, value, fill }) => {
        return (
          <button
            className="custom-hover flex h-[187px] w-[158px] flex-col items-center justify-between rounded-[5px] bg-gray-100 py-6 font-pretendard"
            key={id}
            data-ga={ga}
            onClick={() => onClick(field, value)}
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
