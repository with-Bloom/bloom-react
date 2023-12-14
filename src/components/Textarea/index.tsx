type Props = {
  placeholder: string;
};

const Textarea = ({ placeholder }: Props) => {
  return (
    <textarea
      className="text-gray700 h-[122px] w-[327px] rounded-[5px] bg-gray100 p-4 font-Pretendard text-[15px] font-medium placeholder-gray400 caret-indigo outline-indigo"
      placeholder={placeholder}
      maxLength={500}
    ></textarea>
  );
};

export default Textarea;
