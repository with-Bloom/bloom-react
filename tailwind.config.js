export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray100: '#F7F8FA',
        gray200: '#D9DEE0',
        gray300: '#D0D1D2',
        gray400: '#B0B8C1',
        gray500: '#686D75',
        gray600: '#404349',
        gray700: '#30343E',
        gray800: '#191F28',
        indigo: '#7990F6',
        gray900: '#F5F7F9',
      },
      backgroundImage: {
        gradient: 'url("/images/background.jpg")',
      },
    },
    fontFamily: {
      Pretendard: ['Pretendard'],
    },
    plugins: [],
  },
};
