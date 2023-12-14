import { useState } from 'react';
import { questionList } from 'src/data/questionList';
import Layout from 'layout/index';
import QuestionTitle from 'components/QuestionTitle';
import Header from 'components/Header';
import SelectComponent from 'components/SelectComponent';
import ProgressBar from 'components/ProgressBar';

const QuestionPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleClick = () => setCurrentPage((state) => state + 1);

  return (
    <>
      <Layout>
        <div className="flex h-full flex-col justify-between px-6 pb-10">
          <div>
            <Header />
            <ProgressBar currentPage={currentPage} />
            {questionList.map((el) => {
              return (
                currentPage === el.page && (
                  <div key={el.page}>
                    <QuestionTitle>{el.question}</QuestionTitle>
                    {SelectComponent({ type: el.type, options: el.options, onClick: handleClick })}
                  </div>
                )
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default QuestionPage;
