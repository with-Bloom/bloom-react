import { Link } from 'react-router-dom';
import Layout from 'layout/index';
import NextButton from 'components/Button/NextButton';
import HomeCharacter from 'assets/images/home-character.svg?react';

const HomePage = () => {
  const title = '맞춤형 축사 문장 추천 서비스';
  const subTitle =
    '소중한 사람을 축복하기 위한 결혼식 축사,\n당신의 진심을 전달할 수 있도록 블룸이 도와드릴게요.';

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div>
          <HomeCharacter />
          <div className="mb-[40px] mt-[33px] flex flex-col items-center gap-[15px]">
            <span className="font-Pretendard text-2xl font-bold	text-gray500">{title}</span>
            <span className="font-Pretendard whitespace-pre-line text-center text-[15px] leading-[150%] text-gray300">
              {subTitle}
            </span>
          </div>
        </div>
        <div className="fixed bottom-6">
          <Link to={'/question'}>
            <NextButton>축사 만들러 가기</NextButton>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
