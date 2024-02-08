import { useEffect, useState } from 'react';

import { UserAnswer } from 'types/index';

type ApiResponse = {
  messageId: string;
  resultData: string;
};

type UseFetchResponse = {
  fetchData: () => Promise<void>;
  data?: ApiResponse;
  loading: boolean;
};

const useFetch = (url: string, body: UserAnswer): UseFetchResponse => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('네트워크 응답이 OK가 아님');
      }

      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error('에러: ' + error);
    }
  };

  useEffect(() => {}, []);
  return { fetchData, data, loading };
};

export default useFetch;
