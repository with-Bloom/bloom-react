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
  ga: string;
  options: string | Avatar[] | PrimaryButton[];
  type: 'input' | 'avatar-card' | 'avatar-button' | 'primary-button' | 'textarea' | string;
  // eslint-disable-next-line no-unused-vars
  onClick: (value: string) => void;
};

const SelectComponent = ({ ga, options, type, onClick }: Props) => {
  switch (type) {
    case 'input':
      return <Input options={options as string} ga={ga} onClick={onClick} />;

    case 'avatar-card':
      return <AvatarCard options={options as Avatar[]} ga={ga} onClick={onClick} />;

    case 'avatar-button':
      return <AvatarButton options={options as Avatar[]} ga={ga} onClick={onClick} />;

    case 'primary-button':
      return <PrimaryButton options={options as PrimaryButton[]} ga={ga} onClick={onClick} />;

    case 'textarea':
      return <Textarea options={options as string} ga={ga} onClick={onClick} />;

    default:
      return null;
  }
};

export default SelectComponent;
