import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const usePageHistory = (initialPage: number) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const navigate = useNavigate();

  const handlePrev = () => {
    if (currentPage === 1) {
      navigate('/');
    }

    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return [currentPage, handlePrev, handleNext] as const;
};

export default usePageHistory;
