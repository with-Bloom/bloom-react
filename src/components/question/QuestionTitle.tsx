type Props = {
  children: string;
};

const QuestionTitle = ({ children }: Props) => {
  return (
    <div className="mb-[33px] mt-[52px] w-full">
      <span className="whitespace-pre-line font-Pretendard	text-[24px] font-bold leading-[34px] tracking-[-0.5px] text-gray800">
        {children}
      </span>
    </div>
  );
};

export default QuestionTitle;
