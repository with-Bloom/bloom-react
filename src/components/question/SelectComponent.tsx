import AvatarButton from 'components/question/type/AvatarButton';
import AvatarCard from 'components/question/type/AvatarCard';
import Input from 'components/question/type/Input';
import PrimaryButton from 'components/question/type/PrimaryButton';
import Textarea from 'components/question/type/Textarea';
import { AvatarOptions, ButtonOptions, Options } from 'types/index';

type Props = {
  field: string;
  ga: string;
  options: Options;
  type: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (field: string, value: string) => void;
};

const SelectComponent = ({ field, ga, options, type, onClick }: Props) => {
  switch (type) {
    case 'input':
      return <Input options={options as string} field={field} ga={ga} onClick={onClick} />;

    case 'avatar-card':
      return <AvatarCard options={options as AvatarOptions[]} field={field} ga={ga} onClick={onClick} />;

    case 'avatar-button':
      return <AvatarButton options={options as AvatarOptions[]} field={field} ga={ga} onClick={onClick} />;

    case 'primary-button':
      return <PrimaryButton options={options as ButtonOptions[]} field={field} ga={ga} onClick={onClick} />;

    case 'textarea':
      return <Textarea options={options as string} field={field} ga={ga} onClick={onClick} />;

    default:
      return null;
  }
};

export default SelectComponent;
