import LoadingCharactor from 'assets/images/loading-character.svg?react';
import { BeatLoader } from 'react-spinners';

const Loading = () => {
  const title = '축사는 보통 3~4분 정도로 준비하는\n경우가 많아요. 너무 길면 하객들이\n지루해 할 거예요.';

  return (
    <div className="absolute flex h-full w-[375px] flex-col justify-center bg-white px-6">
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="font-Pretendard text-[22px] font-bold tracking-[-0.5px] text-gray800">
            축사를 작성하고 있어요!
          </span>
          <BeatLoader color="#606873" size={9} />
        </div>
        <span className="block font-Pretendard tracking-[-0.4px] text-gray600">잠시만 기다려주세요</span>
      </div>

      {/* 카드 */}
      <div className="mt-6 flex h-[185px] w-[327px] justify-between rounded-xl bg-gray100 pl-4 pt-[30px] tracking-[-0.6px]">
        <span className="-[-0.6px]font-Pretendard whitespace-pre-line text-[15px] leading-[165%] text-gray600">
          {title}
        </span>
        <LoadingCharactor />
      </div>
    </div>
  );
};

export default Loading;
