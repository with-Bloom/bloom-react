import { Link } from 'react-router-dom';
import ArrowIcon from 'assets/images/arrow.svg?react';
import ResultIcon from 'assets/images/result-icon.svg?react';
import { useLocation } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Swal from 'sweetalert2';

const precautionList = [
  {
    title: '📂 축사를 작성할 때',
    description: [
      '다 쓴 뒤, 소리내어 읽어보면서 듣기 편한지, 말하기 편한지 체크해 보아요. 본인이 말하기 편한 구어체 단어를 사용하는 게 좋아요. 진심을 담았는데 제대로 전달되지 않으면 아쉬우니까요.',
      '축사는 보통 3~4분 정도로 준비하는 경우가 많아요. 너무 길면 하객들이 지루해 할 거예요.',
      '길고 화려한 문장보다도, 무엇보다 진심을 전달하는 게 가장 중요해요.',
    ],
  },
  {
    title: '💌 축사를 준비할 때',
    description: [
      '미리 읽어보며 연습하면 말이 꼬일 확률이 줄어들어요. 실전처럼 BGM을 틀어놓고 연습해 보아요.',
      '축사를 미리 프린트해서, 문장을 어떻게 끊어 읽을지 미리 표시해 놓으면 좋아요.',
      '식장에 보면대가 있는지 미리 확인해 보세요. 보면대가 없다면 대본을 들고 읽어야 해서 불편해요.',
    ],
  },
  {
    title: '🎤 축사를 할 때',
    description: [
      '물을 많이 마셔요. 긴장을 푸는 데에도 도움이 될 거예요.',
      '마지막으로, 떨지 말고 신랑신부를 응시하면서 차분히 낭독한다면 모두가 감동할만한 축사가 될 거예요!',
    ],
  },
];

const ResultPage = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const location = useLocation();
  const answerList = location.state.answerList;

  const title = `${answerList.userName}님을 위한\n축사가 도착했어요`;
  const precaution = '축사를 읽을 때 이런 부분을\n조심해주세요';
  const speechContent = `
  나의 ${answerList.relationship}에게, 오늘 이렇게 많은 사람들 앞에서 너의 결혼을 축하하게
  되어서 너무 기뻐! 내가 널 처음 만났을 때가 아직도 생생하게 기억나는데, 우리 둘 다 교복 입고 학교
  다닐 때였잖아. 그때부터 지금까지 우리 참 많은 일들이 있었다 그치? 매일 학원 끝나면 같이
  떡볶이 먹고, 주말에는 영화도 보고 쇼핑도 하고... 그렇게 함께한 시간들이 차곡차곡 쌓여서 지금
  여기까지 온 것 같아. 이제는 서로 다른 길을 가야 한다는 게 조금 서운하기도 하지만, 그래도 난 네가
  행복해질 수 있다면 언제든지 응원할 준비가 되어있어! 너랑 같이 있으면 항상 웃음이 끊이지
  않았던 것 같아. 그래서 오늘 이 자리에서도 그 웃음들을 다시 한 번 느껴보고 싶어. 그리고 이제는
  배우자랑 새로운 집에서 새로운 삶을 시작하게 될 텐데, 그 안에서도 항상 밝고 긍정적인 모습 잃지
  않았으면 좋겠어. 물론 나도 옆에서 많이 도와줄게! 마지막으로, 너와 함께하는 모든
  순간들이 언제나 축복으로 가득하길 바랄게. 사랑한다 ${answerList.relationship}! 잘살아!
`;

  return (
    <div className="h-screen bg-slate-100">
      <div className="mx-auto  w-[375px] bg-white">
        <div className="bg-gradient bg-cover px-6 pb-10 ">
          <div className="flex h-16 w-full items-center justify-between">
            <ArrowIcon />
          </div>
          <div className="mb-7 flex h-[68px] items-center justify-between">
            <span className="whitespace-pre-line font-Pretendard	text-2xl font-bold text-gray800">
              {title}
            </span>
            <ResultIcon />
          </div>
          <div className="w-[327px] rounded-[10px] border border-solid border-white bg-gradient-to-b from-[rgba(255,255,255,0.52)] via-transparent to-[rgba(255,255,255,0.52)] px-[26px] py-[29px] pt-[29px] backdrop-blur-[10px]">
            <span className="font-Pretendard text-[15px] leading-[170%] tracking-[-0.6px] text-gray600">
              {speechContent}
            </span>
            <CopyToClipboard
              text={speechContent}
              onCopy={() =>
                Toast.fire({
                  icon: 'success',
                  title: '축사가 성공적으로 복사되었습니다!',
                  iconColor: '#7990F6',
                })
              }
            >
              <button className="mt-[57px] flex h-[55px] w-[275px] items-center justify-center rounded-[10px] bg-gray700 font-Pretendard text-[17px] font-bold text-white">
                축사 복사하기
              </button>
            </CopyToClipboard>
          </div>
        </div>
        <div className="px-6 pb-10 pt-[62px]">
          <div className="mb-[14px] whitespace-pre-line font-Pretendard text-[20px] font-bold leading-[28px] tracking-[-0.5px] text-gray800">
            {precaution}
          </div>
          {precautionList.map((el, index) => (
            <div key={index} className="mb-4 w-[327px] rounded-[10px] bg-gray900 px-4 py-[29px] opacity-70">
              <div className="mb-[6px] font-Pretendard text-base font-bold text-black">{el.title}</div>
              <ul className="list-disc pl-4">
                {el.description.map((desc, descIndex) => (
                  <li key={descIndex} className="mt-[12px] text-[14px] leading-[163%] tracking-[-0.5px]">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <Link to={'/'}>
            <button className="mt-[28px] flex h-[55px] w-[327px] items-center justify-center rounded-[10px] bg-gray700 font-Pretendard text-[17px] font-bold text-white">
              홈으로 가기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
