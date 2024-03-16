import { Link } from 'react-router-dom';

import { ROUTES_PATH } from 'constants/routes';

import Button from './Button';

type Props = {
  children: string;
  path: keyof typeof ROUTES_PATH;
  ga?: string;
};

const NavigateButton = ({ children, path, ga }: Props) => {
  return (
    <Link to={ROUTES_PATH[path]}>
      <Button ga={ga}>{children}</Button>
    </Link>
  );
};

export default NavigateButton;
