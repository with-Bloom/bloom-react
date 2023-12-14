import Input from 'components/Input';
import ImageCardButton from 'components/Button/ImageCardButton';
import ImageButton from 'components/Button/ImageButton';
import PrimaryButton from 'components/Button/PrimaryButton';
import Textarea from 'components/Textarea';

type Props = {
  type: string;
  options: string | string[];
};

const SelectComponent = ({ type, options }: Props): React.ReactNode => {
  switch (type) {
    case 'input':
      return <Input placeholder={options as string} />;
    case 'image-card-button':
      return <ImageCardButton options={options as string[]} />;
    case 'image-button':
      return <ImageButton options={options as string[]} />;
    case 'primary-button':
      return <PrimaryButton options={options as string[]} />;
    case 'textarea':
      return <Textarea placeholder={options as string} />;
    default:
      return null;
  }
};

export default SelectComponent;
