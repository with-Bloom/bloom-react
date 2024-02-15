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
      <div className="px-6 bg-cover bg-gradient pb-9">
        <Header noCloseBtn={true} onClick={handleClick} />
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
      <div className="px-6 pb-10 pt-[62px] bg-white">
        <CautionList />
        <Link to={'/'}>
          <Button>{HOME_BUTTON_TEXT}</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default ResultPage;
