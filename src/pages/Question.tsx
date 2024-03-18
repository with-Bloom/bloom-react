import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES_PATH } from 'constants/routes';

import Header from 'components/common/Header';
import ProgressBar from 'components/question/ProgressBar';
import Step1 from 'components/question/step/Step1';
import Step2 from 'components/question/step/Step2';
import Step3 from 'components/question/step/Step3';
import Step4 from 'components/question/step/Step4';
import Step5 from 'components/question/step/Step5';
import Step6 from 'components/question/step/Step6';
import Step7 from 'components/question/step/Step7';
import Step8 from 'components/question/step/Step8';
import Step9 from 'components/question/step/step9';

type Steps = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

const Question = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState<Steps>(1);

  const prevStep = () => {
    if (step === 1) {
      navigate(ROUTES_PATH.home);
    }
    setStep(step - 1); //TODO: 타입 설정
  };

  return (
    <div className="h-full px-6 pb-9">
      <Header onPrev={prevStep} />
      <ProgressBar currentStep={step} />
      {step === 1 && <Step1 onNext={() => setStep(2)} />}
      {step === 2 && <Step2 onNext={() => setStep(3)} />}
      {step === 3 && <Step3 onNext={() => setStep(4)} />}
      {step === 4 && <Step4 onNext={() => setStep(5)} />}
      {step === 5 && <Step5 onNext={() => setStep(6)} />}
      {step === 6 && <Step6 onNext={() => setStep(7)} />}
      {step === 7 && <Step7 onNext={() => setStep(8)} />}
      {step === 8 && <Step8 onNext={() => setStep(9)} />}
      {step === 9 && <Step9 onNext={() => {}} />}
    </div>
  );
};

export default Question;
