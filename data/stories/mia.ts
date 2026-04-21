import { StoryNode } from '../story';

export const miaStory: Record<string, StoryNode> = {
  start: {
    id: 'start',
    speaker: '나',
    text: '방 안, 미아가 내 침대 위에 앉아 말없이 바닥만 응시하고 있다. 분위기가 무겁다.',
    background: 'room',
    nextNode: 'mia_silence',
  },
  mia_silence: {
    id: 'mia_silence',
    speaker: '미아',
    text: '...너, 내가 연락 안 하면 평생 연락 안 할 작정이야?',
    background: 'room',
    characterEmotion: 'angry',
    choices: [
      { text: '미안, 요즘 너무 바빴어.', nextNode: 'excuse' },
      { text: '너도 연락 안 했잖아.', nextNode: 'fight' },
    ]
  },
  excuse: {
    id: 'excuse',
    speaker: '미아',
    text: '바빠? 그래... 네 세상은 이제 나 없이도 잘 돌아간다 이거지?',
    background: 'room',
    characterEmotion: 'default',
    nextNode: 'sadness',
  },
  fight: {
    id: 'fight',
    speaker: '미아',
    text: '하아?! 뻔뻔한 건 여전하네. 진짜 짜증나!',
    background: 'room',
    characterEmotion: 'angry',
    nextNode: 'angry_leave',
  },
  angry_leave: {
    id: 'angry_leave',
    speaker: '미아',
    text: '더 이상 너랑 할 말 없어. 갈게.',
    background: 'street',
    characterEmotion: 'angry',
    nextNode: 'bad_end',
  },
  sadness: {
    id: 'sadness',
    speaker: '미아',
    text: '...나만 여기 남겨진 기분이란 말야. 우리 어릴 땐 맨날 붙어있었는데...',
    background: 'room',
    characterEmotion: 'angry',
    choices: [
      { text: '앞으로 더 신경 쓸게. 약속해.', nextNode: 'promise' },
      { text: '우린 이젠 어른이잖아.', nextNode: 'adult' },
    ]
  },
  adult: {
    id: 'adult',
    speaker: '미아',
    text: '어른? 그게 다야? ...그래, 넌 원래 그런 쓰레기였지.',
    background: 'room',
    characterEmotion: 'default',
    nextNode: 'yandere_trigger',
  },
  promise: {
    id: 'promise',
    speaker: '미아',
    text: '정말? 약속... 어기면 죽여버릴지도 몰라. 엑, 농담이야...',
    background: 'room',
    characterEmotion: 'happy',
    nextNode: 'happy_end',
  },
  yandere_trigger: {
    id: 'yandere_trigger',
    speaker: '나',
    text: '순간, 등골이 서늘해졌다. 미아가 내 핸드폰을 낚아챈다.',
    background: 'room',
    nextNode: 'yandere_end',
  },
  happy_end: {
    id: 'happy_end',
    speaker: '시스템',
    text: '[Happy End] 미아와의 관계가 회복되었습니다.',
    background: 'room',
    isEnding: true,
  },
  bad_end: {
    id: 'bad_end',
    speaker: '시스템',
    text: '[Bad End] 소꿉친구와의 단절.',
    background: 'street',
    isEnding: true,
  },
  yandere_end: {
    id: 'yandere_end',
    speaker: '시스템',
    text: '[Dead End] 더 이상 내 방을 벗어날 수 없게 되었다...',
    background: 'room',
    isEnding: true,
  }
};
