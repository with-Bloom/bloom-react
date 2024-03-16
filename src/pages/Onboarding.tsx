import NavigateButton from 'components/common/NavigateButton';
import Slider from 'components/home/Slider';

const slides = [
  {
    image: '/assets/onboarding_1.png',
    description: {
      title: '막막한 축사 준비를 손쉽게',
      subTitle: '소중한 사람의 축복을 위해 진심을 전할 수 있도록\nAI가 맞춤형 축사 문장을 바로 생성해 줘요.',
    },
  },

  {
    image: '/assets/onboarding_2.png',
    description: {
      title: '축사 주의사항도 미리 살펴보세요',
      subTitle: '축사가 막막하게 느껴진다면, 주의사항을\n미리 살펴보고 걱정을 덜어보세요.',
    },
  },
  {
    image: '/assets/onboarding_3.png',
    description: {
      title: '뻔하지 않은, 진심을 담은 축사',
      subTitle: '내 상황에 맞춰, 단 하나밖에 없는\n축사 문장을 만들어 드려요.',
    },
  },
];

// TODO: 무한 슬라이더 구현
const Onboarding = () => {
  const options = {
    slideWidth: 500,
    slideCount: 3,
    showDots: true,
  };

  return (
    <div className="px-6">
      <div className="w-full max-w-[500px]">
        <Slider {...options}>
          {slides.map(({ image, description }, index) => (
            <div key={index} className="w-[500px] flex-shrink-0 flex flex-col items-center">
              <img src={image} />
              <p className="font-bold font-pretendard text-[23px] text-gray1000">{description.title}</p>
              <p className="trackimg-[-0.5px] font-pretendard text-[14px] text-gray800 whitespace-pre-line">
                {description.subTitle}
              </p>
            </div>
          ))}
        </Slider>
      </div>
      <NavigateButton path="/question">축사 만들러 가기</NavigateButton>
    </div>
  );
};

export default Onboarding;
