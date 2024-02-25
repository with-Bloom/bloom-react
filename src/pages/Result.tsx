import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { API_MESSAGE } from 'constants/path';

import { AnswerContext } from 'context/AnswerContext';

import useFetch from 'hooks/useFetch';

import Header from 'components/common/Header';
import Layout from 'components/common/Layout';
import Loading from 'components/common/Loading';
import CopyToClipboardButton from 'components/result/resultSection/ClipboardButton';
import ResultContentBox from 'components/result/resultSection/ResultContentBox';
import ResultRetryButton from 'components/result/resultSection/ResultRetryButton';
import ResultSection from 'components/result/resultSection/ResultSection';
import ResultTitle from 'components/result/resultSection/ResultTitle';
import SpeechCautionSection from 'components/result/speechCautionSection/SpeechCautionSection';

const ResultPage = () => {
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
    <Layout style="result">
      {isLoading ? (
        <Loading isRenew={true} />
      ) : (
        <>
          <ResultSection>
            <Header noCloseBtn={true} />
            <ResultTitle name={name} />

            <ResultContentBox>{result}</ResultContentBox>

            <CopyToClipboardButton copyText={result} />
            <ResultRetryButton onClick={handleRefetch} />
          </ResultSection>

          <SpeechCautionSection />
        </>
      )}
    </Layout>
  );
};

export default ResultPage;
