import { useState } from 'react';
import { questionList } from 'src/data/questionList';
import Layout from 'layout/index';
import QuestionTitle from 'components/QuestionTitle';
import Header from 'components/Header';
import Input from 'components/Input';
import NextButton from 'components/Button/NextButton';

import ImageCardButton from 'components/Button/ImageCardButton';
import ImageButton from 'components/Button/ImageButton';
import Textarea from 'components/Textarea';
import PrimaryButton from 'components/Button/PrimaryButton';

const selectComponent = ({ type, options }) => {
  switch (type) {
    case 'input':
      return <Input placeholder={options} />;
    case 'image-card-button':
      return <ImageCardButton options={options} />;
    case 'image-button':
      return <ImageButton options={options} />;
    case 'primary-button':
      return <PrimaryButton options={options} />;
    case 'textarea':
      return <Textarea placeholder={options} />;
  }
};

const QuestionPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const LAST_PAGE = 9;

  return (
    <>
      <Layout>
        <div className="flex h-full flex-col justify-between px-6 pb-10">
          <div>
            <Header />
            <span className="font-Pretendard text-sm font-medium text-gray200">
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
          <NextButton>다음</NextButton>
        </div>
      </Layout>
    </>
  );
};

export default QuestionPage;
