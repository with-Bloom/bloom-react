import { createContext, useState } from 'react';

import { UserAnswer } from 'types/index';

type ContextType = {
  answer: UserAnswer;
  // eslint-disable-next-line no-unused-vars
  handleAnswerUpdate: (field: string, value: string) => void;
};

const AnswerContext = createContext<ContextType>(null!);

const AnswerProvider = ({ children }: { children: React.ReactNode }) => {
  const [answer, setAnswer] = useState<UserAnswer>({
    userName: '',
    targetName: '',
    targetType: '',
    relationship: '',
    minute: '',
    speechType: '',
    concept: '',
    story: '',
    lastComment: '',
    isRenew: false,
  });

  const handleAnswerUpdate = (field: string, value: Value) => {
    setAnswer((prevAnswer) => ({ ...prevAnswer, [field]: value }));
  };

  return <AnswerContext.Provider value={{ answer, handleAnswerUpdate }}>{children}</AnswerContext.Provider>;
};

export { AnswerContext, AnswerProvider };
