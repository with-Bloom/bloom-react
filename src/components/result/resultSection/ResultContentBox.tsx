import EditIcon from 'assets/images/edit.svg?react';
import MeatballIcon from 'assets/images/meatball.svg?react';
import { Link } from 'react-router-dom';

const ResultContentBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-5 w-full rounded-[10px] border border-white border-opacity-60 bg-white bg-opacity-50 bg-clip-padding px-[26px] pb-[26px] pt-[29px] backdrop-blur-sm backdrop-filter">
      <span className="whitespace-pre-line text-[15px] leading-[170%] tracking-[-0.6px] text-gray800">
        {children}
      </span>
      <div className="mt-[26px] flex w-full justify-between">
        <MeatballIcon />
        <Link to={'/edit'}>
          <EditIcon />
        </Link>
      </div>
    </div>
  );
};

export default ResultContentBox;
//
