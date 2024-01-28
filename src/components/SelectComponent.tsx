import Input from 'components/question/type/Input';
import ImageCardButton from 'components/question/type/ImageCardButton';
import ImageButton from 'components/question/type/ImageButton';
import PrimaryButton from 'components/question/type/PrimaryButton';
import Textarea from 'components/question/type/Textarea';

type imageButtonProps = {
  target: string;
  color: string;
};

type Props = {
  type: string;
  options: string | string[] | imageButtonProps[];
  onClick: any;
  onChange?: React.ChangeEventHandler<HTMLElement> | undefined;
  count?: number;
};

const SelectComponent: React.FC<Props> = ({ type, options, onClick, onChange, count }: Props) => {
  switch (type) {
    case 'input':
      return <Input placeholder={options as string} onChange={onChange} />;
    case 'image-card-button':
      return <ImageCardButton options={options as imageButtonProps[]} onClick={onClick} />;
    case 'image-button':
      return <ImageButton options={options as imageButtonProps[]} onClick={onClick} />;
    case 'primary-button':
      return <PrimaryButton options={options as string[]} onClick={onClick} />;
    case 'textarea':
      return <Textarea placeholder={options as string} onChange={onChange} count={count || 0} />;
    default:
      return null;
  }
};

export default SelectComponent;
