import { Link } from 'react-router-dom';

import Button from './Button';

type Props = {
  children: string;
  path: '/' | '/question' | '/result';
  ga?: string;
};

const NavigateButton = ({ children, path, ga }: Props) => {
  return (
    <Link to={path}>
      <Button ga={ga}>{children}</Button>
    </Link>
  );
};

export default NavigateButton;
