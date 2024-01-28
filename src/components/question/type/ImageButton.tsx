import CloudIcon from 'assets/images/cloud.svg?react';

type Option = {
  label: string;
  fill: string;
};

type Props = {
  options: Option[];
  onClick: any;
};

const ImageButton = ({ options, onClick }: Props) => {
  return (
    <ul className="grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-7">
      {options.map((el) => {
        return (
          <div key={el.label} className="flex flex-col items-center gap-[9px]">
            <CloudIcon
              className="cursor-pointer hover:fill-indigo"
              onClick={() => onClick(el.label)}
              fill={el.fill}
            />
            <span className="font-Pretendard text-sm text-gray500">{el.label}</span>
          </div>
        );
      })}
    </ul>
  );
};
export default ImageButton;
