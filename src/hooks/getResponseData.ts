import { UserAnswer } from 'types/index';

const getResponseData = async (url:string, body:UserAnswer) => {
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

    return result;
  } catch (error) {
    console.error('에러: ' + error);
  }
};

export default getResponseData;
