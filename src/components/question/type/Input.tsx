import useInput from 'hooks/useInput';

import Button from 'components/common/Button';

type Props = {
  field: string;
  ga: string;
  options: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (field: string, value: string) => void;
};

const Input = ({ field, ga, options, onClick }: Props) => {
  const [value, handleChange] = useInput('');

  return (
    <>
      <input
        className="options-gray500 h-11 w-full rounded-[5px] bg-gray100 p-4 font-pretendard text-[17px] tracking-[-0.3px] text-gray1000 caret-indigo outline-indigo"
        maxLength={10}
        placeholder={options}
        onChange={handleChange}
      ></input>
      <Button disabled={value.length === 0} ga={ga} onClick={() => onClick(field, value)}>
        다음
      </Button>
    </>
  );
};

export default Input;
