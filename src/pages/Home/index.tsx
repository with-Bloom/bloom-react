import { Link } from 'react-router-dom';
import Layout from 'layout/index';
import HomeCharacter from 'assets/images/home-character.svg?react';

const HomePage = () => {
  const title = 'BLOOM';
  const subTitle =
    '소중한 사람을 축복하기 위한 결혼식 축사,\n당신의 진심을 전달할 수 있도록 블룸이 도와드릴게요.';

  return (
    <Layout>
      <div className="flex h-full flex-col items-center justify-between pb-10">
        <div className="flex h-[calc(100vh-95px)] flex-col items-center justify-center">
          <HomeCharacter />
          <span className="text-gray800 mb-[15px] mt-[33px] font-Pretendard text-[38px]	font-bold">
            {title}
          </span>
          <span className="text-gray600 whitespace-pre-line text-center font-Pretendard text-[15px] leading-[150%]">
            {subTitle}
          </span>
        </div>
        <Link to={'/question'}>
          <div className="bg-gray700 flex h-[55px] w-[327px] items-center justify-center rounded-[10px] font-Pretendard text-[17px] font-bold text-white">
            축사 만들러 가기
          </div>
        </Link>
      </div>
    </Layout>
  );
};

export default HomePage;
