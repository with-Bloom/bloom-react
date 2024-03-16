import NavigateButton from 'components/common/NavigateButton';

import Logo from 'assets/images/logo.svg?react';

const Home = () => {
  return (
    <div className="w-full h-screen bg-[url('/assets/bg_home.png')] bg-cover relative px-6 py-9">
      <div className="flex flex-col items-center justify-center gap-3 h-[calc(100%-55px)]">
        <Logo />
        <p className="font-medium font-pretendard text-[18px] text-gray1000">개인 맞춤형 축사 생성 서비스</p>
      </div>
      <NavigateButton path="onboarding">시작하기</NavigateButton>
    </div>
  );
};

export default Home;
