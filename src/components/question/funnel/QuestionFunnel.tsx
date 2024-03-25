import useFunnel from 'hooks/useFunnel';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Step8 from './Step8';
import Step9 from './step9';

const STEPS = [
  'userName',
  'targetName',
  'targetType',
  'relationship',
  'minute',
  'speechType',
  'concept',
  'story',
  'textarea',
] as const;

const QuestionFunnel = () => {
  const [Funnel, setStep] = useFunnel(STEPS, 'userName');
  return (
    <Funnel>
      <Funnel.Step name="userName">
        <Step1 onNext={() => setStep('targetName')} />
      </Funnel.Step>
      <Funnel.Step name="targetName">
        <Step2 onNext={() => setStep('targetType')} />
      </Funnel.Step>
      <Funnel.Step name="targetType">
        <Step3 onNext={() => setStep('relationship')} />
      </Funnel.Step>
      <Funnel.Step name="relationship">
        <Step4 onNext={() => setStep('minute')} />
      </Funnel.Step>
      <Funnel.Step name="minute">
        <Step5 onNext={() => setStep('speechType')} />
      </Funnel.Step>
      <Funnel.Step name="speechType">
        <Step6 onNext={() => setStep('concept')} />
      </Funnel.Step>
      <Funnel.Step name="concept">
        <Step7 onNext={() => setStep('story')} />
      </Funnel.Step>
      <Funnel.Step name="story">
        <Step8 onNext={() => setStep('textarea')} />
      </Funnel.Step>
      <Funnel.Step name="textarea">
        <Step9 onNext={( )=> {}}/> {/* fetch 처리 */}
      </Funnel.Step>
    </Funnel>
  );
};

export default QuestionFunnel;
