import NavigateButton from 'components/common/NavigateButton';
import HeroSection from 'components/home/HeroSection';

const BUTTON_TEXT = '축사 만들러 가기';

const Home = () => {
  return (
    <div className="px-6">
      <HeroSection />
      <NavigateButton path="/question" ga="onboarding_cta">
        {BUTTON_TEXT}
      </NavigateButton>
    </div>
  );
};

export default Home;
