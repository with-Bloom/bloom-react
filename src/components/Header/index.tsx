import { Link } from 'react-router-dom';
import ArrowIcon from 'assets/images/arrow.svg?react';
import CloseIcon from 'assets/images/close.svg?react';

const Header = () => {
  return (
    <div className="flex h-12 w-full items-center justify-between">
      <ArrowIcon />
      <Link to={'/'}>
        <CloseIcon />
      </Link>
    </div>
  );
};

export default Header;
