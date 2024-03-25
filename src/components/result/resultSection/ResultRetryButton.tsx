type Props = {
  onClick: React.MouseEventHandler<HTMLSpanElement>;
};

const ResultRetryButton = ({ onClick }: Props) => {
  return (
    <span
      className="mb-[45px] mt-[12px] cursor-pointer text-sm font-medium tracking-[-0.4px] text-gray600 underline "
      data-ga="result_retry"
      onClick={onClick}
    >
      축사 다시 받아보기
    </span>
  );
};

export default ResultRetryButton;
