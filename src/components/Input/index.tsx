type Props = {
  placeholder?: React.ReactNode;
};

const Input = ({ placeholder }: Props) => {
  return (
    <input
      className="h-11 w-[327px] rounded-[5px] bg-gray100 p-4 text-[17px] font-medium text-gray400 placeholder-gray200 caret-indigo outline-indigo"
      placeholder={placeholder}
      maxLength={10}
    ></input>
  );
};

export default Input;
