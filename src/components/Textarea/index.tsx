type Props = {
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
  count: number;
};

const Textarea = ({ placeholder, onChange, count }: Props) => {
  return (
    <label htmlFor="hi" className="relative flex flex-col gap-3">
      <textarea
        id="hi"
        className="h-[122px] w-[327px] resize-none	overflow-auto rounded-[5px] bg-gray100 px-4 pb-[35px] pt-[15px] font-Pretendard text-[15px] tracking-[-0.5px] text-gray700 placeholder-gray400 caret-indigo outline-indigo"
        placeholder={placeholder}
        maxLength={500}
        onChange={onChange}
      ></textarea>
      <span className=" text-xxs text-gray1000 absolute bottom-2 right-3 text-sm">{count}/500자</span>
    </label>
  );
};

export default Textarea;
