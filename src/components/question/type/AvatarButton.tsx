import { AvatarOptions } from 'types/index';

import CloudIcon from 'assets/images/cloud.svg?react';

type Props = {
  field: string;
  ga: string;
  options: AvatarOptions[];
  // eslint-disable-next-line no-unused-vars
  onClick: (field: string, value: string) => void;
};

const AvatarButton = ({ field, ga, options, onClick }: Props) => {
  return (
    <ul className="grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-7">
      {options.map(({ id, value, fill }) => {
        return (
          <div className="flex flex-col items-center gap-[9px]" key={id}>
            <CloudIcon
              className="cursor-pointer hover:fill-indigo"
              data-ga={ga}
              fill={fill}
              onClick={() => onClick(field, value)}
            />
            <span className="text-sm font-pretendard text-gray700">{value}</span>
          </div>
        );
      })}
    </ul>
  );
};

export default AvatarButton;
