import CloudIcon from 'assets/images/cloud.svg?react';

type Option = {
  target: string;
  color: string;
};

type Props = {
  options: Option[];
  onClick: () => void;
};

const ImageButton = ({ options, onClick }: Props) => {
  return (
    <ul className="grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-7">
      {options.map((el) => {
        return (
          <div key={el.target} className="flex flex-col items-center gap-[9px]">
            <CloudIcon className="cursor-pointer hover:fill-indigo" onClick={onClick} fill={el.color} />
            <span className="font-Pretendard text-sm font-medium text-gray500">{el.target}</span>
          </div>
        );
      })}
    </ul>
  );
};
export default ImageButton;
