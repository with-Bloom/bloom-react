type Props = {
  placeholder?: React.ReactNode;
};

const Textarea = ({ placeholder }: Props) => {
  return (
    <textarea
      className="text-gray600 h-[122px] w-[327px] rounded-[5px] bg-gray100 p-4 font-Pretendard text-[15px] font-medium placeholder-gray300 caret-indigo outline-indigo"
      placeholder={placeholder}
      maxLength={500}
    ></textarea>
  );
};

export default Textarea;
