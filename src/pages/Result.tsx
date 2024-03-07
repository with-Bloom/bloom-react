import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { API_MESSAGE } from 'constants/path';

import { AnswerContext } from 'context/AnswerContext';

import useFetch from 'hooks/useFetch';

import Header from 'components/common/Header';
import Loading from 'components/common/Loading';
import CopyToClipboardButton from 'components/result/resultSection/ClipboardButton';
import ResultContentBox from 'components/result/resultSection/ResultContentBox';
import ResultRetryButton from 'components/result/resultSection/ResultRetryButton';
import ResultTitle from 'components/result/resultSection/ResultTitle';
import SpeechCautionSection from 'components/result/speechCautionSection/SpeechCautionSection';

const Result = () => {
  const [result, setResult] = useState('');

  const location = useLocation();

  useEffect(() => {
    const originResult = location.state.data.resultData;

    if (originResult) {
      setResult(originResult);
    }
  }, []);

  const { answer, handleAnswerUpdate } = useContext(AnswerContext);
  const { fetchData, isLoading } = useFetch(API_MESSAGE, answer);
  const name = answer.userName;

  const handleRefetch = async () => {
    handleAnswerUpdate('isRenew', true);

    const data = await fetchData();
    const newResult = data.resultData;

    setResult(newResult);
  };

  return (
    <>
      {isLoading ? (
        <Loading isRenew={true} />
      ) : (
        <>
          <div className="flex flex-col items-center px-6 bg-cover bg-gradient">
            <Header />
            <ResultTitle name={name} />
            <ResultContentBox>{result}</ResultContentBox>
            <CopyToClipboardButton copyText={result} />
            <ResultRetryButton onClick={handleRefetch} />
          </div>

          <SpeechCautionSection />
        </>
      )}
    </>
  );
};

export default Result;
