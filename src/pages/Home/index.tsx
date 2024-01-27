import { Link } from 'react-router-dom';
import Layout from 'layout/index';
import HomeImage from 'assets/images/home-image.svg?react';
import Logo from 'assets/images/logo.svg?react';

const TITLE = '막막한 축사 준비를 손쉽게';
const SUB_TITLE = '소중한 사람의 축복을 위한 결혼식 축사,\n진심을 전할 수 있도록 블룸이 도와드릴게요.';
const BUTTON_TEXT = '축사 만들러 가기'

const HomePage = () => {
  return (
    <Layout>
      <div className="flex h-full flex-col items-center justify-between pb-10">
        <div className="flex h-[calc(100vh-95px)] flex-col items-center justify-center">
          <Logo className="mb-[17px]" />
          <HomeImage />
          <span className="mb-[15px] mt-[33px] font-Pretendard text-[24px] font-bold leading-[34px] tracking-[-0.8px]	text-gray800">
            {TITLE}
          </span>
          <span className="trackimg-[-0.5px] whitespace-pre-line text-center font-Pretendard text-[15px] leading-[150%] text-gray600">
            {SUB_TITLE}
          </span>
        </div>
        <Link to={'/question'}>
          <div className="flex h-[55px] w-[327px] items-center justify-center rounded-[10px] bg-gray700 font-Pretendard text-[17px] font-bold text-white">
            {BUTTON_TEXT}
          </div>
        </Link>
      </div>
    </Layout>
  );
};

export default HomePage;
