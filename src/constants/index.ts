export const QUESTION_LIST = [
  {
    page: 1,
    question: '축사를 할 분의\n이름을 알려 주세요.',
    type: 'input',
    options: 'ex. 홍길동',
  },
  {
    page: 2,
    question: '축사를 받을 분의\n이름을 알려 주세요.',
    type: 'input',
    options: 'ex. 홍길동',
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
    options: 'ex. 오빠는 나에게 신부 언니와의 연애를\n자주 상담했다.',
  },
  {
    page: 9,
    question: '축사에서 마지막으로 하고\n싶은 말이 있다면 알려 주세요.',
    type: 'textarea',
    options: 'ex. 행복하게 잘 살아라!',
  },
];

export const CAUTION_TEXT_LIST = [
  '축사를 다 쓴 뒤, 소리내어\n읽어보면서 듣기 편한지, 말하기\n편한지 체크해 보아요.',
  '축사는 본인이 말하기 편한\n구어체 단어를 사용하는 게 좋아요.\n진심을 담았는데 제대로 전달되지\n않으면 아쉬우니까요.',
  '축사는 보통 3~4분 정도로 준비하는\n경우가 많아요. 너무 길면 하객들이\n지루해 할 거예요.',
  '길고 화려한 문장보다도, 무엇보다\n진심을 전달하는 게 가장 중요해요.',
  '미리 읽어보며 연습하면 말이 꼬일\n확률이 줄어들어요. 실전처럼 BGM을\n틀어놓고 연습해 보아요.',
  '축사를 미리 프린트해서, 문장을\n어떻게 끊어 읽을지 미리 표시해\n놓으면 좋아요.',
  '식장에 보면대가 있는지 미리\n확인해 보세요. 보면대가 없다면\n대본을 들고 읽어야 해서 불편해요.',
  '축사를 하는 당일에는 물을\n많이 마셔요. 긴장을 푸는 데에도\n도움이 될 거예요.',
  '떨지 말고 신랑신부를 응시하면서\n차분히 낭독한다면 모두가 감동할만한\n축사가 될 거예요!',
];

export const CAUTION_TEXT_CATEGORIES = [
  {
    title: '📂 축사를 작성할 때',
    description: [
      '다 쓴 뒤, 소리내어 읽어보면서 듣기 편한지, 말하기 편한지 체크해 보아요. 본인이 말하기 편한 구어체 단어를 사용하는 게 좋아요. 진심을 담았는데 제대로 전달되지 않으면 아쉬우니까요.',
      '축사는 보통 3~4분 정도로 준비하는 경우가 많아요. 너무 길면 하객들이 지루해 할 거예요.',
      '길고 화려한 문장보다도, 무엇보다 진심을 전달하는 게 가장 중요해요.',
    ],
  },
  {
    title: '💌 축사를 준비할 때',
    description: [
      '미리 읽어보며 연습하면 말이 꼬일 확률이 줄어들어요. 실전처럼 BGM을 틀어놓고 연습해 보아요.',
      '축사를 미리 프린트해서, 문장을 어떻게 끊어 읽을지 미리 표시해 놓으면 좋아요.',
      '식장에 보면대가 있는지 미리 확인해 보세요. 보면대가 없다면 대본을 들고 읽어야 해서 불편해요.',
    ],
  },
  {
    title: '🎤 축사를 할 때',
    description: [
      '물을 많이 마셔요. 긴장을 푸는 데에도 도움이 될 거예요.',
      '마지막으로, 떨지 말고 신랑신부를 응시하면서 차분히 낭독한다면 모두가 감동할만한 축사가 될 거예요!',
    ],
  },
];
