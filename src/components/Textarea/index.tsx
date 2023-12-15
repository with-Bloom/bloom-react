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
        className="resize-none text-gray700 h-[122px] w-[327px] rounded-[5px] bg-gray100 p-4 font-Pretendard text-[15px] font-medium placeholder-gray400 caret-indigo outline-indigo"
        placeholder={placeholder}
        maxLength={500}
        onChange={onChange}
      ></textarea>
      <span className="text-xxs absolute bottom-1 right-2 text-sm text-zinc-300">{count}/500자</span>
    </label>
  );
};

export default Textarea;
