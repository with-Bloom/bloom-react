import Swal from 'sweetalert2';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Button from 'components/common/Button';
import Header from 'components/common/Header';
import Layout from 'components/common/Layout';
import CautionList from 'components/result/CautionList';

import ResultAvatar from 'assets/images/result-avatar.svg?react';

const COPY_BUTTON_TEXT = '축사 복사하기';
const HOME_BUTTON_TEXT = '홈으로 가기';

const ResultPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/question');
  };

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
  const result = location.state.data.resultData;
  const name = location.state.name;
  const RESULT_TITLE = `${name}님을 위한\n축사가 도착했어요`;

  return (
    <Layout style="result">
      <div className="flex flex-col items-center px-6 bg-cover bg-gradient">
        <Header noCloseBtn={true} onClick={handleClick} />

        <div className="mb-7 h-[68px] w-[327px] flex justify-between">
          <span className="text-2xl font-bold whitespace-pre-line font-pretendard text-gray1100">
            {RESULT_TITLE}
          </span>
          <ResultAvatar />
        </div>

        <div className="mb-5 w-[327px] rounded-[10px] border border-opacity-30 border-white bg-gradient-to-b from-[rgba(255,255,255,0.52)] to-[rgba(255,255,255,0.52)] px-[26px] pb-[70px] pt-[29px] backdrop-blur-[10px]">
          <span className="whitespace-pre-line font-pretendard text-[15px] leading-[170%] tracking-[-0.6px] text-gray900">
            {result}
          </span>
        </div>

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
          <Button ga='result_clipboard'>{COPY_BUTTON_TEXT}</Button>
        </CopyToClipboard>
        <span className="mt-[12px] mb-[45px] underline font-medium tracking-[-0.4px] text-sm text-gray600 font-pretendard" data-ga="result_retry">
          축사 다시 받아보기
        </span>
      </div>

      <div className="px-6 pb-10 pt-[62px] bg-white">
        <CautionList />
        <Link to={'/'}>
          <Button ga='result_home'>{HOME_BUTTON_TEXT}</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default ResultPage;
