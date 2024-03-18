import Button from 'components/common/Button';

import QuestionTitle from '../QuestionTitle';

type Props = {
  onNext: () => void;
};

const Step2 = ({ onNext }: Props) => {
  return (
    <div className="flex flex-col justify-between w-full h-[calc(100%-84px)]">
      <div>
        <QuestionTitle text={'축사를 받을 사람의\n이름을 알려 주세요.'} />
        <input
          className="options-gray500 h-[55px] w-full rounded-[5px] bg-gray100 p-4 font-pretendard text-[17px] tracking-[-0.3px] text-gray900 caret-indigo outline-indigo"
          maxLength={10}
          placeholder="홍길동"
        />
      </div>
      <Button onClick={onNext} data-ga="question_2rd">
        다음
      </Button>
    </div>
  );
};

export default Step2;
