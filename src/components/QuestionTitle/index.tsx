type Props = {
  children: string;
};

const QuestionTitle = ({ children }: Props) => {
  return (
    <div className="mb-11 mt-[63px] w-full">
      <span className="text-gray700 mt-[63px] whitespace-pre-line	font-Pretendard text-2xl font-bold">
        {children}
      </span>
    </div>
  );
};

export default QuestionTitle;
