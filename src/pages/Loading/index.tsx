import LoadingCharactor from 'assets/images/loading-character.svg?react';
import { BeatLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import ArrowIcon from 'assets/images/arrow.svg?react';
import CloseIcon from 'assets/images/close.svg?react';
import { CAUTION_TEXT_LIST } from 'constants/index';
import { getRandomText } from 'utils/index';

const TITLE = '축사를 작성하고 있어요!';
const SUB_TITLE = '잠시만 기다려 주세요';

const Loading = () => {
  const randomCautionText = getRandomText(CAUTION_TEXT_LIST);

  return (
    <div className="flex h-full w-[375px] flex-col bg-white px-6">
      <div className="flex h-16 w-full items-center justify-between">
        <ArrowIcon />
        <Link to={'/'}>
          <CloseIcon />
        </Link>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="mt-[36px] flex items-center justify-between">
          <span className=" font-Pretendard text-[22px] font-bold tracking-[-0.5px] text-gray800">
            {TITLE}
          </span>
          <BeatLoader color="#606873" size={9} />
        </div>
        <span className="block font-Pretendard tracking-[-0.4px] text-gray600">{SUB_TITLE}</span>
      </div>

      <div className="mt-6 flex h-[185px] w-[327px] justify-between rounded-xl bg-gray100 pl-4 pt-[30px] tracking-[-0.6px]">
        <span className="-[-0.6px]font-Pretendard whitespace-pre-line text-[15px] leading-[165%] text-gray600">
          {randomCautionText}
        </span>
        <LoadingCharactor />
      </div>
    </div>
  );
};

export default Loading;
