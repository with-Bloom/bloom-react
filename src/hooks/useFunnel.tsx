import { useMemo, useState } from 'react';

import { Funnel, FunnelProps, NonEmptyArray, Step, StepProps } from 'components/question/\bfunnel/Funnel';

const useFunnel = <Steps extends NonEmptyArray<string>>(_: Steps, defaultStep: Steps[number]) => {
  const [step, setStep] = useState(defaultStep);

  const FunnelComponent = useMemo(
    () =>
      Object.assign((props: Omit<FunnelProps<Steps>, 'step'>) => <Funnel step={step} {...props} />, {
        Step: (props: StepProps<Steps>) => <Step {...props} />,
      }),
    [step],
  );

  return [FunnelComponent, setStep] as const;
};

export default useFunnel;
