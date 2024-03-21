import { Children, isValidElement } from 'react';

export type NonEmptyArray<T> = readonly [T, ...T[]];

export interface StepProps<Steps extends NonEmptyArray<string>> {
  name: Steps[number];
  children: React.ReactNode;
}

export interface FunnelProps<Steps extends NonEmptyArray<string>> {
  step: Steps[number];
  children: Array<React.ReactElement<StepProps<Steps>>> | React.ReactElement<StepProps<Steps>>;
}

export const Funnel = <Steps extends NonEmptyArray<string>>({ step, children }: FunnelProps<Steps>) => {
  const validChildren = Children.toArray(children).filter(isValidElement);

  const targetStep = validChildren.find((child) => (child.props as StepProps<Steps>).name === step);

  return <>{targetStep}</>;
};

export const Step = <Steps extends NonEmptyArray<string>>({ children }: StepProps<Steps>) => {
  return <>{children}</>;
};
