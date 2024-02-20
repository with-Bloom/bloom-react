export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray100: '#F7F8FA',
        gray200: '#F5F7F9',
        gray300: '#D0D1D2',
        gray400: '#C8CED5',
        gray500: '#B0B8C1',
        gray600: '#8F8E9C',
        gray700: '#686D75',
        gray800: '#464854',
        gray900: '#404349',
        gray1000: '#30343E',
        gray1100: '#191F28',
        indigo: '#7990F6',
      },

      backgroundImage: {
        gradient: 'url("/assets/bg_result.webp")',
      },
    },
    fontFamily: {
      pretendard: ['Pretendard'],
    },
    plugins: [],
  },
};
