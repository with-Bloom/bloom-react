import useInput from 'hooks/useInput';

import Button from 'components/common/Button';

type Props = {
  options: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (value: string) => void;
  ga: string;
};

const Input = ({ options, onClick, ga }: Props) => {
  const [value, handleChange] = useInput('');

  return (
    <>
      <input
        className="options-gray500 h-11 w-[327px] rounded-[5px] bg-gray100 p-4 font-pretendard text-[17px] tracking-[-0.3px] text-gray1000 caret-indigo outline-indigo"
        placeholder={options}
        maxLength={10}
        onChange={handleChange}
      ></input>
      <Button onClick={() => onClick(value)} disabled={value.length === 0} ga={ga}>
        다음
      </Button>
    </>
  );
};

export default Input;
