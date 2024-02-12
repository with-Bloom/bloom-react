import useInput from 'hooks/useInput';

import Button from 'components/common/Button';

type Props = {
  options: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (value: string) => void;
};

const Input = ({ options, onClick }: Props) => {
  const [value, handleChange] = useInput('');

  return (
    <>
      <input
        className="options-gray400 h-11 w-[327px] rounded-[5px] bg-gray100 p-4 font-Pretendard text-[17px] tracking-[-0.3px] text-gray700 caret-indigo outline-indigo"
        placeholder={options}
        maxLength={10}
        onChange={handleChange}
      ></input>
      <Button onClick={() => onClick(value)} disabled={value.length === 0}>
        다음
      </Button>
    </>
  );
};

export default Input;
