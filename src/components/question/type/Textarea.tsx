type Props = {
  options: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
  count: number;
};

const Textarea = ({ options, onChange, count }: Props) => {
  return (
    <label htmlFor="hi" className="relative flex flex-col gap-3">
      <div className="h-[122px] w-[327px] rounded-[5px] bg-gray100 pt-[15px]">
        <textarea
          id="hi"
          className=" h-[69px] w-[327px] resize-none bg-gray100 pl-[16px] pr-[35px] font-Pretendard text-[15px] leading-[150%] tracking-[-0.5px] text-gray700 placeholder-gray400 focus:outline-none"
          placeholder={options}
          maxLength={500}
          onChange={onChange}
        ></textarea>
        <span className="absolute bottom-2.5 right-3.5 mt-[30px] font-Pretendard text-[14px] tracking-[-0.3px] text-gray1000">
          {count}/500자
        </span>
      </div>
    </label>
  );
};

export default Textarea;
