import Layout from 'components/common/Layout';
import NavigateButton from 'components/common/NavigateButton';

import ErrorAvatar from 'assets/images/error-avatar.svg?react';

const TITLE = '잘못된 경로입니다';
const SUB_TITLE = '올바른 주소로 서비스를 이용해주세요';
const BUTTON_TEXT = '처음으로 돌아가기';

const NotFound = () => {
  return (
    <Layout>
      <div className="flex h-[calc(100vh-95px)] flex-col items-center justify-center">
        <ErrorAvatar />
        <span className="text-[22px] font-bold font-pretendard text-gray1100 mt-[33px]">{TITLE}</span>
        <span className="text-[15px] text-gray900 font-pretendard mt-[7px]">{SUB_TITLE}</span>
      </div>

      <NavigateButton path="/">{BUTTON_TEXT}</NavigateButton>
    </Layout>
  );
};

export default NotFound;
