import Input from 'components/Input';
import ImageCardButton from 'components/Button/ImageCardButton';
import ImageButton from 'components/Button/ImageButton';
import PrimaryButton from 'components/Button/PrimaryButton';
import Textarea from 'components/Textarea';

type Props = {
  type: string;
  options: string | string[];
  onClick: () => void;
};

const SelectComponent = ({ type, options, onClick }: Props): React.ReactNode => {
  switch (type) {
    case 'input':
      return <Input placeholder={options as string} onClick={onClick} />;
    case 'image-card-button':
      return <ImageCardButton options={options as string[]} onClick={onClick} />;
    case 'image-button':
      return <ImageButton options={options as string[]} onClick={onClick} />;
    case 'primary-button':
      return <PrimaryButton options={options as string[]} onClick={onClick} />;
    case 'textarea':
      return <Textarea placeholder={options as string} onClick={onClick} />;
    default:
      return null;
  }
};

export default SelectComponent;
