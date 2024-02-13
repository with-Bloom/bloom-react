import Swal from 'sweetalert2';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link, useLocation } from 'react-router-dom';

import { CAUTION_TEXT_CATEGORIES } from 'constants/index';

import Button from 'components/common/Button';
import Header from 'components/common/Header';

import ResultAvatar from 'assets/images/result-avatar.svg?react';

const CAUTION_TITLE = '축사를 읽을 때 이런 부분을\n조심해주세요';
const COPY_BUTTON_TEXT = '축사 복사하기';
const HOME_BUTTON_TEXT = '홈으로 가기';

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
  const result = location.state.data;
  const name = location.state.name;
  const RESULT_TITLE = `${name}님을 위한\n축사가 도착했어요`;

  return (
    <div className="h-screen bg-slate-100">
      <div className="mx-auto  w-[375px] bg-white">
        <div className="px-6 pb-10 bg-cover bg-gradient ">
          <Header noCloseBtn={true} />
          <div className="mb-7 flex h-[68px] items-center justify-between">
            <span className="text-2xl font-bold whitespace-pre-line font-Pretendard text-gray800">
              {RESULT_TITLE}
            </span>
            <ResultAvatar />
          </div>
          <div className="w-[327px] rounded-[10px] border border-solid border-white bg-gradient-to-b from-[rgba(255,255,255,0.52)] via-transparent to-[rgba(255,255,255,0.52)] px-[26px] py-[29px] pt-[29px] backdrop-blur-[10px]">
            <span className="font-Pretendard text-[15px] leading-[170%] tracking-[-0.6px] text-gray600">
              {result}
            </span>
            <CopyToClipboard
              text={result}
              onCopy={() =>
                Toast.fire({
                  icon: 'success',
                  title: '축사가 성공적으로 복사되었습니다!',
                  iconColor: '#7990F6',
                })
              }
            >
              <Button size="small">{COPY_BUTTON_TEXT}</Button>
            </CopyToClipboard>
          </div>
        </div>
        <div className="px-6 pb-10 pt-[62px]">
          <div className="mb-[14px] whitespace-pre-line font-Pretendard text-[20px] font-bold leading-[28px] tracking-[-0.5px] text-gray800">
            {CAUTION_TITLE}
          </div>
          {CAUTION_TEXT_CATEGORIES.map((el, index) => (
            <div key={index} className="mb-4 w-[327px] rounded-[10px] bg-gray900 px-4 py-[29px] opacity-70">
              <div className="mb-[6px] font-Pretendard text-base font-bold text-black">{el.title}</div>
              <ul className="pl-4 list-disc">
                {el.description.map((desc, descIndex) => (
                  <li key={descIndex} className="mt-[12px] text-[14px] leading-[163%] tracking-[-0.5px]">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <Link to={'/'}>
            <Button>{HOME_BUTTON_TEXT}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
