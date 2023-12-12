type Props = {
  placeholder: string;
};

const Input = ({ placeholder }: Props) => {
  return (
    <input
      className="caret-indigo bg-gray100 placeholder-gray200 text-gray400 h-11 w-[327px] rounded-[5px] p-4 text-[17px] font-medium outline-indigo"
      placeholder={placeholder}
      maxLength={10}
    ></input>
  );
};

export default Input;
