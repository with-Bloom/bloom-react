import { useLocation, useNavigate } from 'react-router-dom';

import Header from 'components/common/Header';
import Layout from 'components/common/Layout';
import CopyToClipboardButton from 'components/result/resultSection/ClipboardButton';
import ResultContentBox from 'components/result/resultSection/ResultContentBox';
import ResultRetryButton from 'components/result/resultSection/ResultRetryButton';
import ResultSection from 'components/result/resultSection/ResultSection';
import ResultTitle from 'components/result/resultSection/ResultTitle';
import SpeechCautionSection from 'components/result/speechCautionSection/SpeechCautionSection';

const ResultPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/question');
  };
  const location = useLocation();
  const result = location.state.data.resultData;
  const name = location.state.name;

  return (
    <Layout style="result">
      <ResultSection>
        <Header noCloseBtn={true} onClick={handleClick} />
        <ResultTitle name={name} />
        <ResultContentBox>{result}</ResultContentBox>
        <CopyToClipboardButton copyText={result} />
        <ResultRetryButton />
      </ResultSection>

      <SpeechCautionSection />
    </Layout>
  );
};

export default ResultPage;
