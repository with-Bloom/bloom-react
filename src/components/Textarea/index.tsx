import NextButton from 'components/Button/NextButton';

type Props = {
  placeholder: string;
  onClick: () => void;
};

const Textarea = ({ placeholder, onClick }: Props) => {
  return (
    <>
      <textarea
        className="text-gray600 h-[122px] w-[327px] rounded-[5px] bg-gray100 p-4 font-Pretendard text-[15px] font-medium placeholder-gray300 caret-indigo outline-indigo"
        placeholder={placeholder}
        maxLength={500}
      ></textarea>
      <NextButton onClick={onClick}>다음</NextButton>
    </>
  );
};

export default Textarea;
