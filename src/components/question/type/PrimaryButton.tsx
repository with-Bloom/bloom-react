import { ButtonOptions } from 'types/index';

import TriangleIcon from 'assets/images/triangle.svg?react';

type Props = {
  field: string;
  ga: string;
  options: ButtonOptions[];
  // eslint-disable-next-line no-unused-vars
  onClick: (field: string, value: string) => void;
};

const TOOLTIP_TEXT = '3~4분 길이의 축사가 가장 많아요!';

const PrimaryButton = ({ field, ga, options, onClick }: Props) => {
  return (
    <ul className="flex flex-col gap-4">
      {options.map(({ id, value }) => (
        <div className="relative" key={id}>
          <button
            className={`custom-hover flex h-[55px] w-full items-center justify-items-start rounded-[5px] bg-gray100 p-[13px] py-6 font-pretendard text-gray1000 ${
              value === '3분' ? 'relative' : ''
            }`}
            data-ga={ga}
            onClick={() => onClick(field, value)}
          >
            {value}
          </button>
          {value === '3분' && (
            <div className="relative z-10">
              <div className="absolute right-3 top-[-25px] mt-2.5 w-max rounded bg-gray800 px-3 py-2.5 text-xs text-white">
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
