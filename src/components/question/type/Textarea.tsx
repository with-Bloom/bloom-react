import useInput from 'hooks/useInput';

import Button from 'components/common/Button';

type Props = {
  options: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (value: string) => void;
  ga: string;
};

const Textarea = ({ options, onClick, ga }: Props) => {
  const [value, handleChange] = useInput('');

  return (
    <>
      <label htmlFor="textarea" className="relative flex flex-col gap-3">
        <div className="h-[122px] w-[327px] rounded-[5px] bg-gray100 pt-[15px]">
          <textarea
            id="textarea"
            className=" h-[69px] w-[327px] resize-none bg-gray100 pl-[16px] pr-[35px] font-pretendard text-[15px] leading-[150%] tracking-[-0.5px] text-gray1000 placeholder-gray500 focus:outline-none"
            placeholder={options}
            maxLength={500}
            onChange={handleChange}
          ></textarea>
          <span className="absolute bottom-2.5 right-3.5 mt-[30px] font-pretendard text-[14px] tracking-[-0.3px] text-gray400">
            {value.length}/500자
          </span>
        </div>
      </label>
      <Button onClick={() => onClick(value)} disabled={value.length === 0} ga={ga}>
        다음
      </Button>
    </>
  );
};

export default Textarea;
