import { useState } from 'react';

type Slide = {
  image: string;
  description: {
    title: string;
    subTitle: string;
  };
};

type Props = {
  slide: Slide[];
};

const WIDTH = '500px';

const Carousel = ({ slide }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      {/* 실제 보는 화면 */}
      <div style={{ width: WIDTH }}>
        {/* 슬라이드 영역  */}
        <div
          className="flex"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {/* 슬라이드 */}
          {slide.map(({ image, description }, index) => (
            <div key={index} className="flex-shrink-0" style={{ width: WIDTH }}>
              <img src={image} />
              <div className='flex flex-col items-center gap-[10px]'>
              <p className="font-bold font-pretendard text-[23px] text-gray1100">{description.title}</p>
              <p className="trackimg-[-0.5px] font-pretendard text-[14px] text-gray800 whitespace-pre-line">
                {description.subTitle}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 cursor-pointer">
        {slide.map((_, idx) => (
          <button
            key={idx}
            className={`w-[9px] h-[9px] rounded-full ${currentSlide === idx ? 'bg-indigo' : 'bg-gray-200'}`}
            onClick={() => {
              setCurrentSlide(idx);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
