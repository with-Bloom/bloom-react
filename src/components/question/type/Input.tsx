import useInput from 'hooks/useInput';

import Button from 'components/common/Button';

type Props = {
  ga: string;
  options: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (value: string) => void;
};

const Input = ({ ga, options, onClick }: Props) => {
  const [value, handleChange] = useInput('');

  return (
    <>
      <input
        className="options-gray500 h-11 w-[327px] rounded-[5px] bg-gray100 p-4 font-pretendard text-[17px] tracking-[-0.3px] text-gray1000 caret-indigo outline-indigo"
        maxLength={10}
        placeholder={options}
        onChange={handleChange}
      ></input>
      <Button disabled={value.length === 0} ga={ga} onClick={() => onClick(value)}>
        다음
      </Button>
    </>
  );
};

export default Input;
