import HomeAvatar from 'assets/images/home-avatar.svg?react';
import Logo from 'assets/images/logo.svg?react';

const TITLE = '막막한 축사 준비를 손쉽게';
const SUB_TITLE = '소중한 사람의 축복을 위한 결혼식 축사,\n진심을 전할 수 있도록 블룸이 도와드릴게요.';

const HeroSection = () => {
  return (
    <div className="flex h-[calc(100vh-95px)] flex-col items-center justify-center">
      <Logo className="mb-[17px]" />
      <HomeAvatar />
      <span className="mb-[15px] mt-[33px] font-pretendard text-[24px] font-bold leading-[34px] tracking-[-0.8px]	text-gray1100">
        {TITLE}
      </span>
      <span className="trackimg-[-0.5px] whitespace-pre-line text-center font-pretendard text-[15px] leading-[150%] text-gray900">
        {SUB_TITLE}
      </span>
    </div>
  );
};

export default HeroSection;
