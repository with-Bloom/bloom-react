import { Link } from 'react-router-dom';

import ChevronIcon from 'assets/images/chevron-left.svg?react';
import CloseIcon from 'assets/images/close.svg?react';

type Props = {
  noCloseBtn?: boolean;
};

const Header = ({ noCloseBtn = false }: Props) => {
  return (
    <div className="flex items-center justify-between w-full h-16">
      <ChevronIcon />
      {!noCloseBtn && (
        <Link to={'/'}>
          <CloseIcon />
        </Link>
      )}
    </div>
  );
};

export default Header;
