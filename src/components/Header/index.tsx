import ArrowIcon from 'assets/arrow.svg?react';
import CloseIcon from 'assets/close.svg?react';

const Header = () => {
  return (
    <div className="flex h-12 w-full items-center justify-between">
      <ArrowIcon />
      <CloseIcon />
    </div>
  );
};

export default Header;
