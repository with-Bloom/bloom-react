import { getRandomText } from 'utils/index';

import { useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

import { CAUTION_LIST } from 'constants/index';

import LoadingAvatar from 'assets/images/loading-avatar.svg?react';
import RenewAvatar from 'assets/images/renew-avatar.svg?react';

import Header from './Header';

const SUB_TITLE = '잠시만 기다려 주세요';

type Props = {
  isRenew?: boolean;
};

const Loading = ({ isRenew = false }: Props) => {
  const TITLE = isRenew ? '축사를 다시 작성하고 있어요!' : '축사를 작성하고 있어요!';
  const randomCaution = getRandomText(CAUTION_LIST);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/question');
  };

  return (
    <div>
      <Header onClick={handleClick} />
      <div className="flex flex-col gap-1.5">
        <div className="mt-[36px] flex items-center justify-between">
          <span className=" font-Pretendard text-[22px] font-bold tracking-[-0.5px] text-gray800">
            {TITLE}
          </span>
          <BeatLoader color="#606873" size={9} />
        </div>
        <span className="block font-Pretendard tracking-[-0.4px] text-gray600">{SUB_TITLE}</span>
      </div>
      {isRenew ? (
        <div className="mt-[25px] float-right">
          <RenewAvatar />
        </div>
      ) : (
        <div className="mt-6 flex h-[185px] w-[327px] justify-between rounded-xl bg-gray100 pl-4 pt-[30px] tracking-[-0.6px]">
          <span className="-[-0.6px]font-Pretendard whitespace-pre-line text-[15px] leading-[165%] text-gray600">
            {randomCaution}
          </span>
          <LoadingAvatar />
        </div>
      )}
    </div>
  );
};

export default Loading;
