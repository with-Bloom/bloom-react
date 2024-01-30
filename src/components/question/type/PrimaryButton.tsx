import TriangleIcon from 'assets/images/triangle.svg?react';

type Options = {
  id: number;
  value: string;
};

type Props = {
  options: Options[];
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const TOOLTIP_TEXT = '3~4분 길이의 축사가 가장 많아요!';

const PrimaryButton = ({ options, onClick }: Props) => {
  return (
    <ul className="flex flex-col gap-3">
      {options.map(({ id, value }) => (
        <div key={id} className="relative">
          <button
            className={`custom-hover flex h-11 w-[327px] items-center justify-items-start rounded-[5px] bg-gray100 p-[13px] py-6 font-Pretendard text-gray700 ${
              value === '3분' ? 'relative' : ''
            }`}
            onClick={onClick}
          >
            {value}
          </button>
          {value === '3분' && (
            <div className="relative z-10">
              <div className="absolute right-3 top-[-20px] mt-2.5 w-max rounded bg-grat1100 px-3 py-2.5 text-xs text-white">
                {TOOLTIP_TEXT}
                <TriangleIcon className="absolute bottom-[35px] right-0 mr-3 h-2" />
              </div>
            </div>
          )}
        </div>
      ))}
    </ul>
  );
};

export default PrimaryButton;
