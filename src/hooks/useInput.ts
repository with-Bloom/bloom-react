import { useState } from 'react';

const useInput = (initialValue: string) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return [inputValue, handleChange] as const
};

export default useInput;
