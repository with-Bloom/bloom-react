import NavigateButton from 'components/common/NavigateButton';

import ErrorAvatar from 'assets/images/error-avatar.svg?react';

const TITLE = '일시적인 오류가 발생했습니다';
const SUB_TITLE = '다시 시도해주세요';
const BUTTON_TEXT = '처음으로 돌아가기';

const Error = () => {
  return (
    <>
      <div className="flex h-[calc(100vh-95px)] flex-col items-center justify-center px-6">
        <ErrorAvatar />
        <span className="text-[22px] font-bold font-pretendard text-gray1000 mt-[33px]">{TITLE}</span>
        <span className="text-[15px] text-gray800 font-pretendard mt-[7px]">{SUB_TITLE}</span>
      </div>
      <NavigateButton path="home">{BUTTON_TEXT}</NavigateButton>
    </>
  );
};

export default Error;
