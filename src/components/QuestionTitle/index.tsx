type Props = {
  children: string;
};

const QuestionTitle = ({ children }: Props) => {
  return (
    <div className="mb-[33px] mt-[52px] w-full">
      <span className="text-gray800 whitespace-pre-line	font-Pretendard text-2xl font-bold">
        {children}
      </span>
    </div>
  );
};

export default QuestionTitle;
