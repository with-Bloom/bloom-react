import CloudIcon from 'assets/images/cloud.svg?react';

type Props = {
  options?: React.ReactNode;
};

const ImageButton = ({ options }: Props) => {
  return (
    <ul className="grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-7">
      {options.map((el) => {
        return (
          <div key={el} className="flex flex-col items-center gap-[9px]">
            <CloudIcon />
            <span className="font-Pretendard text-sm font-medium text-gray400">{el}</span>
          </div>
        );
      })}
    </ul>
  );
};
export default ImageButton;
