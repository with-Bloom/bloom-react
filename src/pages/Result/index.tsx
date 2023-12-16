import Layout from 'layout/index';
import ArrowIcon from 'assets/images/arrow.svg?react';
import ResultIcon from 'assets/images/result-icon.svg?react';
import { useLocation } from 'react-router-dom';

// const precautionList = [
//   {
//     title: '📂 축사를 작성할 때',
//     description: [
//       '다 쓴 뒤, 소리내어 읽어보면서 듣기 편한지, 말하기 편한지 체크해 보아요. 본인이 말하기 편한 구어체 단어를 사용하는 게 좋아요. 진심을 담았는데 제대로 전달되지 않으면 아쉬우니까요.',
//       '축사는 보통 3~4분 정도로 준비하는 경우가 많아요. 너무 길면 하객들이 지루해 할 거예요.',
//       '길고 화려한 문장보다도, 무엇보다 진심을 전달하는 게 가장 중요해요.',
//     ],
//   },
//   {
//     title: '💌 축사를 준비할 때',
//     description: [
//       '미리 읽어보며 연습하면 말이 꼬일 확률이 줄어들어요. 실전처럼 BGM을 틀어놓고 연습해 보아요.',
//       '축사를 미리 프린트해서, 문장을 어떻게 끊어 읽을지 미리 표시해 놓으면 좋아요.',
//       '식장에 보면대가 있는지 미리 확인해 보세요. 보면대가 없다면 대본을 들고 읽어야 해서 불편해요.',
//     ],
//   },
//   {
//     title: '🎤 축사를 할 때',
//     description: [
//       '물을 많이 마셔요. 긴장을 푸는 데에도 도움이 될 거예요.',
//       '마지막으로, 떨지 말고 신랑신부를 응시하면서 차분히 낭독한다면 모두가 감동할만한 축사가 될 거예요!',
//     ],
//   },
// ];

const ResultPage = () => {
  const title = '수빈님을 위한\n축사가 도착했어요';
  const precaution = '축사를 읽을 때 이런 부분을\n조심해주세요';
  const location = useLocation();
  const result = location.state.result;

  console.log('응담결과:' + result);

  return (
    <Layout>
      <div className="bg-gradient px-6 pb-10 ">
        <div className="flex h-16 w-full items-center justify-between">
          <ArrowIcon />
        </div>
        <div className="mb-7 flex h-[68px] items-center justify-between">
          <span className="whitespace-pre-line font-Pretendard	text-2xl font-bold text-gray800">{title}</span>
          <ResultIcon />
        </div>
        <div className=" w-[327px] border border-solid border-white bg-gradient-to-b from-[rgba(255,255,255,0.52)] via-transparent to-[rgba(255,255,255,0.52)] px-[26px] py-[29px] pt-[29px] backdrop-blur-[10px]">
          <span className="font-Pretendard text-[15px] leading-[170%] text-gray600">{result.result}</span>
          <button className="mt-[57px] flex h-[55px] w-[275px] items-center justify-center rounded-[10px] bg-gray700 font-Pretendard text-[17px] font-bold text-white">
            축사 복사하기
          </button>
        </div>
        <span>{precaution}</span>
        <div className="bg-gray900 w-[327px] rounded-[10px] px-4 py-[29px] opacity-70	"></div>
        <button className="mt-[57px] flex h-[55px] w-[327px] items-center justify-center rounded-[10px] bg-gray700 font-Pretendard text-[17px] font-bold text-white">
          홈으로 가기
        </button>
      </div>
    </Layout>
  );
};

export default ResultPage;
