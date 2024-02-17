import AvatarButton from 'components/question/type/AvatarButton';
import AvatarCard from 'components/question/type/AvatarCard';
import Input from 'components/question/type/Input';
import PrimaryButton from 'components/question/type/PrimaryButton';
import Textarea from 'components/question/type/Textarea';

type PrimaryButton = {
  id: number;
  value: string;
};

type Avatar = {
  id: number;
  value: string;
  fill: string;
};

type Props = {
  type: 'input' | 'avatar-card' | 'avatar-button' | 'primary-button' | 'textarea' | string;
  options: string | Avatar[] | PrimaryButton[];
  // eslint-disable-next-line no-unused-vars
  onClick: (value: string) => void;
  ga: string;
};

const SelectComponent = ({ type, options, onClick, ga }: Props) => {
  switch (type) {
    case 'input':
      return <Input options={options as string} onClick={onClick} ga={ga} />;

    case 'avatar-card':
      return <AvatarCard options={options as Avatar[]} onClick={onClick} ga={ga} />;

    case 'avatar-button':
      return <AvatarButton options={options as Avatar[]} onClick={onClick} ga={ga} />;

    case 'primary-button':
      return <PrimaryButton options={options as PrimaryButton[]} onClick={onClick} ga={ga} />;

    case 'textarea':
      return <Textarea options={options as string} onClick={onClick} ga={ga} />;

    default:
      return null;
  }
};

export default SelectComponent;
