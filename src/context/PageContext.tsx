import { createContext, useState } from 'react';

type ContextType = {
  page: number;
  handlePrev: () => void;
  handleNext: () => void;
};

const PageContext = createContext<ContextType>(null!);

const PageProvider = ({ children }: { children: React.ReactNode }) => {
  const [page, setPage] = useState(1);

  const handlePrev = () => {
    setPage((page) => page - 1);
  };

  const handleNext = () => {
    setPage((page) => page + 1);
  };

  return <PageContext.Provider value={{ page, handlePrev, handleNext }}>{children}</PageContext.Provider>;
};

export { PageContext, PageProvider };
