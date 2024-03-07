type Props = {
  onClick: React.MouseEventHandler<HTMLSpanElement>;
};

const ResultRetryButton = ({ onClick }: Props) => {
  return (
    <span
      className="cursor-pointer mt-[12px] mb-[45px] underline font-medium tracking-[-0.4px] text-sm text-gray600 font-pretendard"
      data-ga="result_retry"
      onClick={onClick}
    >
      축사 다시 받아보기
    </span>
  );
};

export default ResultRetryButton;
