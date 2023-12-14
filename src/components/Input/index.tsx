type Props = {
  placeholder: string;
};

const Input = ({ placeholder }: Props) => {
  return (
    <input
      className="text-gray700 h-11 w-[327px] rounded-[5px] bg-gray100 p-4 font-Pretendard text-[17px] font-medium placeholder-gray400 caret-indigo outline-indigo"
      placeholder={placeholder}
      maxLength={10}
    ></input>
  );
};

export default Input;
