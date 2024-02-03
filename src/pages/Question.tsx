import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QUESTION_LIST } from 'constants/index';
import Layout from 'components/common/Layout';
import QuestionTitle from 'components/question/QuestionTitle';
import Header from 'components/common/Header';
import SelectComponent from 'components/SelectComponent';
import ProgressBar from 'components/question/ProgressBar';
import NextButton from 'components/common/NextButton';
import Loading from 'pages/Loading';
import { API_MESSAGE } from 'constants/path';
import getResponseData from 'hooks/getResponseData';
import { UserAnswer } from 'types/index';

const QuestionPage = () => {
  const LAST_PAGE = 9;
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [inputCount, setInputCount] = useState<number>(0);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
  });

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
      setIsLoading(true);
      const result = getResponseData(API_MESSAGE, userAnswer)
      navigate('/result', { state: { result: result, name: userAnswer.userName } });
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
        {isLoading && <Loading />}
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
                    <NextButton onClick={handleClick} disabled={inputCount === 0}>
                      {id === LAST_PAGE ? '내 축사 확인하기' : '다음'}
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
