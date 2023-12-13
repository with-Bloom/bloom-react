import { useState } from 'react';
import { questionList } from 'src/data/questionList';
import Layout from 'layout/index';
import QuestionTitle from 'components/QuestionTitle';
import Header from 'components/Header';
import Input from 'components/Input';
import PrimaryButton from 'components/Button/PrimaryButton';
import NextButton from 'components/Button/NextButton';
import FlowerIcon from 'assets/flower.svg?react';

const selectComponent = ({ type, options }) => {
  switch (type) {
    case 'input':
      return (
        <>
          <Input placeholder={options} />
          <NextButton>다음</NextButton>
        </>
      );
    case 'image-card-button':
      return (
        <div className="bg-gray100 flex h-[187px] w-[158px] flex-col items-center justify-between rounded-[5px] py-6 text-[17px] font-medium">
          <FlowerIcon />
          <span>신랑</span>
        </div>
      );
    case 'image-button':
      return <div>이미지</div>;
    case 'primary-button':
      return <PrimaryButton>{options}</PrimaryButton>;
  }
};

const QuestionPage = () => {
  const [currentPage, setCurrentPage] = useState(3);
  const LAST_PAGE = 9;
  const text = '축사를 할 사람의 \n 이름을 알려 주세요.';
  return (
    <>
      <Layout>
        <div>
          <Header />
          <span>
            {currentPage}/{LAST_PAGE}
          </span>
          {questionList.map((el) => {
            return (
              currentPage === el.page && (
                <>
                  <QuestionTitle>{el.question}</QuestionTitle>
                  {selectComponent(el)}
                </>
              )
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default QuestionPage;
