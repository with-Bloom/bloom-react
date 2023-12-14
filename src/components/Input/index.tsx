import NextButton from 'components/Button/NextButton';

type Props = {
  placeholder: string;
  onClick: () => void;
};

const Input = ({ placeholder, onClick }: Props) => {
  return (
    <>
      <input
        className="text-gray700 h-11 w-[327px] rounded-[5px] bg-gray100 p-4 font-Pretendard text-[17px] font-medium placeholder-gray400 caret-indigo outline-indigo"
        placeholder={placeholder}
        maxLength={10}
      ></input>
      <NextButton onClick={onClick}>다음</NextButton>
    </>
  );
};

export default Input;
