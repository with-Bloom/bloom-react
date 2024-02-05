import Input from 'components/question/type/Input';
import AvatarCard from 'components/question/type/AvatarCard';
import AvatarButton from 'components/question/type/AvatarButton';
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
  onClick?: React.MouseEventHandler<SVGSVGElement> | React.MouseEventHandler<HTMLButtonElement> | undefined;
  onChange?: React.ChangeEventHandler<HTMLElement> | undefined;
  count?: number;
};

const SelectComponent: React.FC<Props> = ({ type, options, onClick, onChange, count }: Props) => {
  switch (type) {
    case 'input':
      return <Input options={options as string} onChange={onChange} />;

    case 'avatar-card':
      return (
        <AvatarCard
          options={options as Avatar[]}
          onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
        />
      );

    case 'avatar-button':
      return (
        <AvatarButton
          options={options as Avatar[]}
          onClick={onClick as React.MouseEventHandler<SVGSVGElement>}
        />
      );

    case 'primary-button':
      return (
        <PrimaryButton
          options={options as PrimaryButton[]}
          onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
        />
      );

    case 'textarea':
      return <Textarea options={options as string} onChange={onChange} count={count || 0} />;

    default:
      return null;
  }
};

export default SelectComponent;
