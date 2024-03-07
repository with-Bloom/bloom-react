import ResultAvatar from 'assets/images/result-avatar.svg?react';

type Props = {
  name: string;
};

const ResultTitle = ({ name }: Props) => {
  const RESULT_TITLE = `${name}님을 위한\n축사가 도착했어요`;

  return (
    <div className="mb-7 h-[68px] w-full flex justify-between">
      <span className="text-2xl font-bold whitespace-pre-line font-pretendard text-gray1100">
        {RESULT_TITLE}
      </span>
      <ResultAvatar />
    </div>
  );
};

export default ResultTitle;
