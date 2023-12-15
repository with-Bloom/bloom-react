export const questionList = [
  {
    page: 1,
    question: '축사를 할 사람의\n이름을 알려 주세요.',
    type: 'input',
    options: '이름을 작성해주세요.',
  },
  {
    page: 2,
    question: '축사를 받을 사람의\n이름을 알려 주세요.',
    type: 'input',
    options: '이름을 작성해주세요.',
  },
  {
    page: 3,
    question: '축사를 받을 사람은\n신랑인가요, 신부인가요?',
    type: 'image-card-button',
    options: [
      { target: '신랑', color: '#AEC9FF' },
      { target: '신부', color: '#FB5500' },
    ],
  },
  {
    page: 4,
    question: '축사를 받는 사람을\n뭐라고 부르면 좋을까요?',
    type: 'image-button',
    options: [
      { target: '친구', color: '#C9F4B4' },
      { target: '오빠', color: '#D6E3FF' },
      { target: '언니', color: '#F96E47' },
      { target: '동생', color: '#D1CEFF' },
      { target: '형', color: '#AEC9FF' },
      { target: '누나', color: '#E991FB' },
      { target: '기타', color: '#C9F4B4' },
    ],
  },
  {
    page: 5,
    question: '축사를 몇 분으로\n하면 좋을까요?',
    type: 'primary-button',
    options: ['2분', '3분', '4분', '5분', '6분'],
  },
  {
    page: 6,
    question: '축사 말투는\n어떻게 할까요?',
    type: 'primary-button',
    options: ['반말', '존댓말'],
  },
  {
    page: 7,
    question: '축사의 컨셉은\n무엇인가요?',
    type: 'primary-button',
    options: ['감동', '행복', '재치', '차분', '눈물'],
  },
  {
    page: 8,
    question: '축사 중간에 들어갈 재밌는\n에피소드가 있다면 알려 주세요.',
    type: 'textarea',
    options: 'ex. 오빠는 나에게 신부 언니와의 연애\n고민 상담했다. (최대 500자)',
  },
  {
    page: 9,
    question: '축사에서 마지막으로 하고\n싶은 말이 있다면 알려 주세요.',
    type: 'textarea',
    options: 'ex. 행복하게 잘 살아라! (최대 500자)',
  },
];
