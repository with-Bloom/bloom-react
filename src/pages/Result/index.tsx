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

  const result = location.state.result;
  const name = location.state.name;

  const title = `${name}님을 위한\n축사가 도착했어요`;
  const precaution = '축사를 읽을 때 이런 부분을\n조심해주세요';

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
              {result.result}
            </span>
            <CopyToClipboard
              text="복사확인"
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
          {precautionList.map((el) => (
            <div
              key={el.title}
              className="mb-4 w-[327px]  rounded-[10px] bg-gray900 px-4 py-[29px] opacity-70"
            >
              <span className="mb-[18px] font-Pretendard text-base font-bold text-black">{el.title}</span>
              {el.description.map((el) => (
                <li key={el} className="trackgin-[-0.5px] text-[14px] leading-[163%]">
                  {el}
                </li>
              ))}
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
