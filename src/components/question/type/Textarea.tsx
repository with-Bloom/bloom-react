import useInput from 'hooks/useInput';

import Button from 'components/common/Button';

type Props = {
  field: string;
  ga: string;
  options: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (field: string, value: string) => void;
};

const Textarea = ({ field, ga, options, onClick }: Props) => {
  const [value, handleChange] = useInput('');

  return (
    <>
      <label className="relative flex flex-col gap-3" htmlFor="textarea">
        <div className="h-[200px] w-full rounded-[5px] bg-gray100 pt-[15px]">
          <textarea
            className="h-[159px] w-full resize-none bg-gray100 pl-[16px] pr-[35px] font-pretendard text-[15px] leading-[150%] tracking-[-0.5px] text-gray1000 placeholder-gray500 focus:outline-none"
            id="textarea"
            maxLength={400}
            placeholder={options}
            onChange={handleChange}
          ></textarea>
          <span className="absolute bottom-2.5 right-3.5 mt-[30px] font-pretendard text-[14px] tracking-[-0.3px] text-gray400">
            {value.length}/400자
          </span>
        </div>
      </label>
      <Button disabled={value.length === 0} ga={ga} onClick={() => onClick(field, value)}>
        {field === 'lastComment' ? '내 축사 확인하기' : '다음'}
      </Button>
    </>
  );
};

export default Textarea;
