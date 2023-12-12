import Layout from 'layout/index';
import QuestionTitle from 'components/QuestionTitle';
import Header from 'components/Header';
import Input from 'components/Input';
import NextButton from 'components/Button/NextButton';

const QuestionPage = () => {
  const text = '축사를 할 사람의 \n 이름을 알려 주세요.';
  return (
    <>
      <Layout>
        <div>
          <Header/>
          <QuestionTitle>{text}</QuestionTitle>
          <Input placeholder="이름을 작성해주세요."></Input>
        </div>
        <NextButton>다음</NextButton>
      </Layout>
    </>
  );
};

export default QuestionPage;
