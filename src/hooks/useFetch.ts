import { useState } from 'react';

type ResponseData = {
  messageId: string;
  resultData: string;
};

type UseFetchResponse = {
  fetchData: () => Promise<ResponseData>;
  isLoading: boolean;
};

const useFetch = <T>(url: string, body: T): UseFetchResponse => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('네트워크 응답이 OK가 아님');
      }

      const { data } = await response.json();

      setIsLoading(false);
      return data;
    } catch (error) {
      console.error('에러: ' + error);
    }
  };

  return { fetchData, isLoading };
};

export default useFetch;
