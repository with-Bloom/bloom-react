type Props = {
  placeholder?: React.ReactNode;
};

const Input = ({ placeholder }: Props) => {
  return (
    <input
      className="text-gray600 h-11 w-[327px] rounded-[5px] bg-gray100 p-4 font-Pretendard text-[17px] font-medium placeholder-gray300 caret-indigo outline-indigo"
      placeholder={placeholder}
      maxLength={10}
    ></input>
  );
};

export default Input;
