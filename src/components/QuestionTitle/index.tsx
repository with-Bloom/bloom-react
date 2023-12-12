type Props = {
  children: string;
};

const QuestionTitle = ({ children }: Props) => {
  return (
    <div className="mb-[33px] mt-[63px] w-full">
      <span className="text-gray500 mt-[63px]	whitespace-pre-line text-2xl font-bold">{children}</span>
    </div>
  );
};

export default QuestionTitle;
