type Props = {
  options: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const Input = ({ options, onChange }: Props) => {
  return (
    <input
      className="options-gray400 h-11 w-[327px] rounded-[5px] bg-gray100 p-4 font-Pretendard text-[17px] tracking-[-0.3px] text-gray700 caret-indigo outline-indigo"
      placeholder={options}
      maxLength={10}
      onChange={onChange}
    ></input>
  );
};

export default Input;
