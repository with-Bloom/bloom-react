import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type ContextType = {
  page: number;
  handlePrev: () => void;
  handleNext: () => void;
};

type Props = {
  children: React.ReactNode;
};

const PageContext = createContext<ContextType>(null!); // todo: null! 타입이 적절한지 체크

const PageContextProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const handlePrev = () => {
    if (page === 1) {
      navigate('/');
    }
    setPage((page) => page - 1);
  };

  const handleNext = () => {
    setPage((page) => page + 1);
  };

  return <PageContext.Provider value={{ page, handlePrev, handleNext }}>{children}</PageContext.Provider>;
};

export { PageContext, PageContextProvider };
