import { Link } from 'react-router-dom';

import EditIcon from 'assets/images/edit.svg?react';
import MeatballIcon from 'assets/images/meatball.svg?react';

const ResultContentBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-5 w-full rounded-[10px] border border-opacity-60 border-white px-[26px] pb-[26px] pt-[29px] backdrop-blur-sm backdrop-filter bg-clip-padding bg-white bg-opacity-50">
      <span className="whitespace-pre-line font-pretendard text-[15px] leading-[170%] tracking-[-0.6px] text-gray800">
        {children}
      </span>
      <div className="flex justify-between w-full mt-[26px]">
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
