import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserAnswer } from 'types/index';

import { QUESTION_LIST } from 'constants/index';
import { API_MESSAGE } from 'constants/path';

import useFetch from 'hooks/useFetch';

import Loading from 'pages/Loading';

import SelectComponent from 'components/SelectComponent';
import Button from 'components/common/Button';
import Header from 'components/common/Header';
import Layout from 'components/common/Layout';
import ProgressBar from 'components/question/ProgressBar';
import QuestionTitle from 'components/question/QuestionTitle';

const LAST_PAGE = 9;

const QuestionPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [inputCount, setInputCount] = useState<number>(0);
  const [input, setInput] = useState<string>('');
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

  const { fetchData, data, loading } = useFetch(API_MESSAGE, userAnswer);

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

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handleClick = async (value: any) => {
    const currentType = QUESTION_LIST[currentPage - 1].type;
    const currentKey = answerListKeysOrder[currentPage - 1];

    setUserAnswer((prevAnswerList) => {
      const updatedAnswerList = {
        ...prevAnswerList,
        [currentKey]: currentType === 'input' || currentType === 'textarea' ? input : value,
      };
      return updatedAnswerList;
    });

    if (currentPage === LAST_PAGE) {
      console.log(currentPage);
      fetchData();
      navigate('/result', { state: { data, name: userAnswer.userName } });
    } else {
      setCurrentPage((state) => state + 1);
      setInputCount(0);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputCount(e.target.value.length);
    setInput(e.target.value);
  };

  return (
    <>
      <Layout>
        {loading && <Loading />}
        <div className="flex h-full flex-col justify-between px-6 pb-10">
          <div>
            <Header />
            <ProgressBar currentPage={currentPage} />
          </div>
          {QUESTION_LIST.map(({ id, question, type, options }) => {
            return (
              currentPage === id && (
                <div className="flex h-[calc(100vh-84px)] flex-col justify-between">
                  <div key={id}>
                    <QuestionTitle>{question}</QuestionTitle>
                    {SelectComponent({
                      type: type,
                      options: options,
                      onClick: handleClick,
                      onChange: handleInputChange,
                      count: inputCount,
                    })}
                  </div>
                  {(type === 'input' || type === 'textarea') && (
                    <Button onClick={handleNext} disabled={inputCount === 0}>
                      다음
                    </Button>
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
