type Props = {
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const Input = ({ placeholder, onChange }: Props) => {
  return (
    <input
      className="h-11 w-[327px] rounded-[5px] bg-gray100 p-4 font-Pretendard text-[17px] text-gray700 placeholder-gray400 caret-indigo outline-indigo"
      placeholder={placeholder}
      maxLength={10}
      onChange={onChange}
    ></input>
  );
};

export default Input;
