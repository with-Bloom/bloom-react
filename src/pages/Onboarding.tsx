import Carousel from 'components/home/Carousel';

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

const Onboarding = () => {
  return (
    <>
      <Carousel slide={slides} />
    </>
  );
};

export default Onboarding;
