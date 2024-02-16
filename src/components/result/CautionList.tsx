import { CAUTION_CATEGORIES } from 'constants/index';

const CAUTION_TITLE = '축사를 읽을 때 이런 부분을\n조심해주세요';

const CautionList = () => {
  return (
    <>
      <div className="mb-[14px] whitespace-pre-line font-pretendard text-[20px] font-bold leading-[28px] tracking-[-0.5px] text-gray1100">
        {CAUTION_TITLE}
      </div>
      {CAUTION_CATEGORIES.map((el, index) => (
        <div key={index} className="mb-4 w-[327px] rounded-[10px] bg-gray200 px-4 py-[29px] opacity-70">
          <div className="mb-[6px] font-pretendard text-base font-bold text-black">{el.title}</div>
          <ul className="pl-4 list-disc">
            {el.description.map((desc, descIndex) => (
              <li key={descIndex} className="mt-[12px] text-[14px] leading-[163%] tracking-[-0.5px]">
                {desc}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default CautionList;
