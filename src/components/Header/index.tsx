import { Link } from 'react-router-dom';
import ChevronIcon from 'assets/images/chevron-left.svg?react';
import CloseIcon from 'assets/images/close.svg?react';

const Header = () => {
  return (
    <div className="flex h-16 w-full items-center justify-between">
      <ChevronIcon />
      <Link to={'/'}>
        <CloseIcon />
      </Link>
    </div>
  );
};

export default Header;
