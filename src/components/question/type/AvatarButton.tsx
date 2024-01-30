import CloudIcon from 'assets/images/cloud.svg?react';

type Options = {
  id: number;
  value: string;
  fill: string;
};

type Props = {
  options: Options[];
  onClick: React.MouseEventHandler<SVGSVGElement>;
};

const AvatarButton = ({ options, onClick }: Props) => {
  return (
    <ul className="grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-7">
      {options.map(({ id, value, fill }) => {
        return (
          <div key={id} className="flex flex-col items-center gap-[9px]">
            <CloudIcon className="cursor-pointer hover:fill-indigo" onClick={onClick} fill={fill} />
            <span className="font-Pretendard text-sm text-gray500">{value}</span>
          </div>
        );
      })}
    </ul>
  );
};

export default AvatarButton;
