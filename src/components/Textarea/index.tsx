type Props = {
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
  count: number;
};

const Textarea = ({ placeholder, onChange, count }: Props) => {
  return (
    <label htmlFor="hi" className="relative flex flex-col gap-3">
      <div className="h-[122px] w-[327px] rounded-[5px] bg-gray-100 pt-[15px]">
        <textarea
          id="hi"
          className=" h-[69px] w-[327px] resize-none bg-gray-100 pl-[16px] pr-[35px] font-Pretendard text-[15px] leading-[150%] tracking-[-0.5px] text-gray700 placeholder-gray400 focus:outline-none"
          placeholder={placeholder}
          maxLength={500}
          onChange={onChange}
        ></textarea>
        <span className="text-xxs text-gray1000 absolute bottom-2.5 right-3.5 mt-[30px] text-sm">
          {count}/500자
        </span>
      </div>
    </label>
  );
};

export default Textarea;
