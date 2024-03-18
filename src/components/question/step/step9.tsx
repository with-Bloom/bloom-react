import Button from 'components/common/Button';

import QuestionTitle from '../QuestionTitle';

type Props = {
  onNext: () => void;
};

const Step9 = ({ onNext }: Props) => {
  return (
    <div className="flex flex-col justify-between w-full h-[calc(100%-84px)]">
      <div>
        <QuestionTitle text={'축사에서 마지막으로 하고\n싶은 말이 있다면 알려 주세요.'} />
        <label className="relative flex flex-col gap-3" htmlFor="textarea">
          <div className="h-[200px] w-full rounded-[5px] bg-gray100 pt-[15px]">
            <textarea
              className="h-[159px] w-full resize-none bg-gray100 pl-[16px] pr-[35px] font-pretendard text-[15px] leading-[150%] tracking-[-0.5px] text-gray900 placeholder-gray500 focus:outline-none"
              id="textarea"
              maxLength={400}
              placeholder="ex. 행복하게 잘 살아라!"
            />
            <span className="absolute bottom-2.5 right-3.5 mt-[30px] font-pretendard text-[14px] tracking-[-0.3px] text-gray400">
              0/400자
            </span>
          </div>
        </label>
      </div>
      <Button onClick={onNext} ga="question_9th">
        내 축사 확인하기
      </Button>
    </div>
  );
};

export default Step9;
