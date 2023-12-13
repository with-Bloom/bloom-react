import { Link } from 'react-router-dom';
import Layout from 'layout/index';
import NextButton from 'components/Button/NextButton';
import HomeCharacter from 'assets/home-character.svg?react';

const HomePage = () => {
  const title = '축사를 할 사람 축사';
  const subTitle = '인생의 꽃피는 찬란한 순간을 인생의\n같이 만들어보세요 찬란한';

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div>
          <HomeCharacter />
          <div className="mb-[40px] mt-[33px] flex flex-col items-center gap-[15px]">
            <span className="text-gray500 text-2xl	font-bold">{title}</span>
            <span className="whitespace-pre-line text-center text-[15px] leading-[150%] text-gray300">
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
