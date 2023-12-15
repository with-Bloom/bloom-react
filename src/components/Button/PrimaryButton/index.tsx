import TriangleIcon from 'assets/images/triangle.svg?react';

type Props = {
  options: string[];
  onClick: () => void;
};

const PrimaryButton = ({ options, onClick }: Props) => {
  const tooltipText = '3~4분 길이의 축사가 가장 많아요!';

  return (
    <ul className="flex flex-col gap-3">
      {options.map((el) => (
        <div key={el} className="relative">
          <button
            className={`text-gray700 flex h-11 w-[327px] items-center justify-items-start rounded-[5px] bg-gray100 p-[13px] py-6 font-Pretendard font-medium hover:bg-gray-200 ${
              el === '3분' ? 'relative' : ''
            }`}
            onClick={onClick}
          >
            {el}
          </button>
          {el === '3분' && (
            <div className="relative z-10">
              <div className="absolute right-3 top-[-20px] mt-2.5 w-max rounded bg-indigo px-3 py-2.5 text-xs text-white">
                {tooltipText}
                <TriangleIcon className="absolute bottom-full right-0 mr-3 h-2" />
              </div>
            </div>
          )}
        </div>
      ))}
    </ul>
  );
};

export default PrimaryButton;
