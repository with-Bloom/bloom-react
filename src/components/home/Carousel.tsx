import { useState } from 'react';

type Props = {
  slides: string[];
};

const Carousel = ({ slides }: Props) => {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <div className="relative overflow-hidden">
        <div className={`flex translate-x-[-${current * 100}%]`}>
          {slides.map((img, index) => (
            <img key={index} src={img} />
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 cursor-pointer">
        {slides.map((_, index) => ( // 전달 받은 slides 개수만큼 button이 생성된다.
          <button
            key={index}
            className={`w-[9px] h-[9px] rounded-full  ${current === index ? 'bg-indigo' : 'bg-gray-200'}`}
            onClick={() => {
              setCurrent(index);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
