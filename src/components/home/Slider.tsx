import { useState } from 'react';

type Props = {
  children: React.ReactNode;
  slideWidth: number;
  slideCount: number;
  showDots: boolean;
};

const Slider = ({ children, slideWidth, slideCount, showDots }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      {/* Viewer */}
      <div className="overflow-hidden" style={{ width: slideWidth }}>
        {/* Slider */}
        <div
          className="flex"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${slideWidth * slideCount}`,
          }}
        >
          {/* Slide */}
          {children}
        </div>
      </div>
      {/* Dots : showDots === true */}
      {showDots && (
        <div className="flex justify-center gap-2 mt-5 cursor-pointer">
          {[...Array(slideCount)].map((_, idx) => (
            <button
              key={idx}
              className={`w-[9px] h-[9px] rounded-full ${currentSlide === idx ? 'bg-indigo' : 'bg-gray-200'}`}
              onClick={() => {
                setCurrentSlide(idx);
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Slider;

/* Use Example
<Slider {...options}>
  <div className="w-[slideWidth] flex-shrink-0 ..."> --> slideContentWrapper
    ...innerSlideContent
  </div>
</Slider>
*/
