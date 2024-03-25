import { AvatarOptions } from 'types/index';

import FlowerIcon from 'assets/images/flower.svg?react';

type Props = {
  field: string;
  ga: string;
  options: AvatarOptions[];
  // eslint-disable-next-line no-unused-vars
  onClick: (field: string, value: string) => void;
};

const AvatarCard = ({ field, ga, options, onClick }: Props) => {
  return (
    <div className="flex justify-between gap-3">
      {options.map(({ id, value, fill }) => {
        return (
          <button
            className="custom-hover flex h-[187px] w-full flex-col items-center justify-between rounded-[5px] bg-gray-100 py-6 "
            key={id}
            data-ga={ga}
            onClick={() => onClick(field, value)}
          >
            <FlowerIcon fill={fill} />
            <span className="mt-2 text-[17px]">{value}</span>
          </button>
        );
      })}
    </div>
  );
};

export default AvatarCard;
