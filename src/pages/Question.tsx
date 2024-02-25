import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { QUESTION_LIST } from 'constants/index';
import { API_MESSAGE } from 'constants/path';

import { AnswerContext } from 'context/AnswerContext';
import { PageContext } from 'context/PageContext';

import useFetch from 'hooks/useFetch';

import SelectComponent from 'components/question/SelectComponent';
import Header from 'components/common/Header';
import Layout from 'components/common/Layout';
import Loading from 'components/common/Loading';
import ProgressBar from 'components/question/ProgressBar';
import QuestionTitle from 'components/question/QuestionTitle';

const LAST_PAGE = 9;

const QuestionPage = () => {
  const { page, handlePrev, handleNext } = useContext(PageContext);
  const { answer, handleAnswerUpdate } = useContext(AnswerContext);

  const navigate = useNavigate();

  const { fetchData, isLoading } = useFetch(API_MESSAGE, answer);

  const handleClick = async (field: string, value: string) => {
    handleAnswerUpdate(field, value);

    if (page === LAST_PAGE) {
      const data = await fetchData();
      navigate('/result', { state: { data } });
    } else {
      handleNext();
    }
  };

  return (
    <Layout>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header onClick={handlePrev} />
          <ProgressBar currentPage={page} />
          {QUESTION_LIST.map(({ id, question, type, field, options, ga }) => {
            return (
              page === id && (
                <div key={id}>
                  <QuestionTitle>{question}</QuestionTitle>
                  <div className="flex h-[calc(100vh-273px)] flex-col justify-between">
                    {SelectComponent({
                      type: type,
                      options: options,
                      onClick: handleClick,
                      field: field,
                      ga: ga,
                    })}
                  </div>
                </div>
              )
            );
          })}
        </>
      )}
    </Layout>
  );
};

export default QuestionPage;
