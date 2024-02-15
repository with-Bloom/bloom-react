import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserAnswer } from 'types/index';

import { QUESTION_LIST } from 'constants/index';
import { API_MESSAGE } from 'constants/path';

import useFetch from 'hooks/useFetch';
import usePageHistory from 'hooks/usePageHistory';

import SelectComponent from 'components/SelectComponent';
import Header from 'components/common/Header';
import Layout from 'components/common/Layout';
import Loading from 'components/common/Loading';
import ProgressBar from 'components/question/ProgressBar';
import QuestionTitle from 'components/question/QuestionTitle';

const LAST_PAGE = 9;

const QuestionPage = () => {
  const navigate = useNavigate();
  const [currentPage, handlePrev, handleNext] = usePageHistory(1);
  const [userAnswer, setUserAnswer] = useState<UserAnswer>({
    userName: '',
    targetName: '',
    targetType: '',
    relationship: '',
    minute: 0,
    speechType: '',
    concept: '',
    story: '',
    lastComment: '',
    isRenew: false,
  });

  const { fetchData, isLoading } = useFetch(API_MESSAGE, userAnswer);

  const answerListKeysOrder = [
    'userName',
    'targetName',
    'targetType',
    'relationship',
    'minute',
    'speechType',
    'concept',
    'story',
    'lastComment',
  ];

  const handleClick = async (value: string) => {
    const currentKey = answerListKeysOrder[currentPage - 1];

    setUserAnswer((prevAnswerList) => {
      const updatedAnswerList = {
        ...prevAnswerList,
        [currentKey]: value,
      };
      return updatedAnswerList;
    });

    if (currentPage === LAST_PAGE) {
      const data = await fetchData();
      navigate('/result', { state: { data, name: userAnswer.userName } });
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
          <ProgressBar currentPage={currentPage} />
          {QUESTION_LIST.map(({ id, question, type, options }) => {
            return (
              currentPage === id && (
                <div key={id}>
                  <QuestionTitle>{question}</QuestionTitle>
                  <div className="flex h-[calc(100vh-273px)] flex-col justify-between">
                    {SelectComponent({
                      type: type,
                      options: options,
                      onClick: handleClick,
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
