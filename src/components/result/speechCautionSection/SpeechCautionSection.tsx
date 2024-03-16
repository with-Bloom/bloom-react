import NavigateButton from 'components/common/NavigateButton';

import CautionTitle from './CautionTitle';
import CautionList from './CautionList';

const HOME_BUTTON_TEXT = '홈으로 가기';

const SpeechCautionSection = () => {
  return (
    <div className="px-6 pb-10 pt-[62px] bg-white">
      <CautionTitle />
      <CautionList />
      <NavigateButton path="home" ga="result_home">
        {HOME_BUTTON_TEXT}
      </NavigateButton>
    </div>
  );
};

export default SpeechCautionSection;
