import Layout from 'components/common/Layout';
import NavigateButton from 'components/common/NavigateButton';
import HeroSection from 'components/home/HeroSection';

const BUTTON_TEXT = '축사 만들러 가기';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <NavigateButton path="/question" ga="onboarding_cta">
        {BUTTON_TEXT}
      </NavigateButton>
    </Layout>
  );
};

export default HomePage;
