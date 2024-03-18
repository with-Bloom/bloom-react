import TriangleIcon from 'assets/images/triangle.svg?react';

import QuestionTitle from '../QuestionTitle';

const BUTTON_VALUE = [
  { id: 1, value: '2분' },
  { id: 2, value: '3분' },
  { id: 3, value: '4분' },
  { id: 4, value: '5분' },
  { id: 5, value: '6분' },
];

const Step5 = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <QuestionTitle text={'축사를 몇 분으로\n하면 좋을까요?'} />
      <div className="flex flex-col gap-4">
        {BUTTON_VALUE.map(({ id, value }) => (
          <button
            key={id}
            className={`custom-hover flex h-[55px] w-full items-center justify-items-start rounded-[5px] bg-gray100 p-[13px] py-6 font-pretendard text-gray900 ${
              value === '3분' ? 'relative' : ''
            }`}
            data-ga="question_5th"
          >
            {value}
            {value === '3분' && (
              <div className="absolute right-[20px] mt-2.5 w-max rounded bg-gray800 px-3 py-2.5 text-xs text-white z-10 bottom-[-15px]">
                3~4분 길이의 축사가 가장 많아요!
                <TriangleIcon className="absolute bottom-[35px] right-0 mr-3 h-2" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Step5;
