import { useState } from 'react';
import { questionList } from 'src/data/questionList';
import Layout from 'layout/index';
import QuestionTitle from 'components/QuestionTitle';
import Header from 'components/Header';
import SelectComponent from 'components/SelectComponent';
import ProgressBar from 'components/ProgressBar';
import NextButton from 'components/Button/NextButton';

const QuestionPage = () => {
  const LAST_PAGE = 9;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [inputCount, setInputCount] = useState<number>(0);

  const handleClick = () => {
    setCurrentPage((state) => state + 1);
    setInputCount(0);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputCount(e.target.value.length);
  };

  return (
    <>
      <Layout>
        <div className="flex h-full flex-col justify-between px-6 pb-10">
          <div>
            <Header />
            <ProgressBar currentPage={currentPage} />
          </div>
          {questionList.map((el) => {
            return (
              currentPage === el.page && (
                <div className="flex h-[calc(100vh-84px)] flex-col justify-between">
                  <div key={el.page}>
                    <QuestionTitle>{el.question}</QuestionTitle>
                    {SelectComponent({
                      type: el.type,
                      options: el.options,
                      onClick: handleClick,
                      onChange: handleInputChange,
                      count: inputCount,
                    })}
                  </div>
                  {(el.type === 'input' || el.type === 'textarea') && (
                    <NextButton onClick={handleClick} disabled={inputCount === 0}>
                      {el.page === LAST_PAGE ? '내 축사 확인하기' : '다음'}
                    </NextButton>
                  )}
                </div>
              )
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default QuestionPage;
