import { StoryNode } from '../story';

export const nanaStory: Record<string, StoryNode> = {
  start: {
    id: 'start',
    speaker: '나',
    text: '비 오는 게임센터 안. 구석 자리에서 고양이 헤드폰을 쓴 여자애가 훌쩍이고 있다.',
    background: 'pcroom',
    nextNode: 'cry',
  },
  cry: {
    id: 'cry',
    speaker: '나나',
    text: '삐에엥… 또 죽었어. 진짜 짜증나…',
    background: 'pcroom',
    characterEmotion: 'angry',
    choices: [
      { text: '무슨 게임 해? (말을 건다)', nextNode: 'talk' },
      { text: '(무시하고 내 게임을 하러 간다)', nextNode: 'ignore' },
    ]
  },
  ignore: {
    id: 'ignore',
    speaker: '나나',
    text: '저기 뒤에 너! 내가 우는데 말도 안 걸어주는 거야? 흥망해버려랏!',
    background: 'pcroom',
    characterEmotion: 'angry',
    nextNode: 'bad_end',
  },
  talk: {
    id: 'talk',
    speaker: '나나',
    text: '윽… 모르는 사람이 말 거는 거 엄청 싫은데. …근데 너 힐러 할 줄 알아?',
    background: 'pcroom',
    characterEmotion: 'default',
    nextNode: 'play',
  },
  play: {
    id: 'play',
    speaker: '나나',
    text: '잘하면 용서해줄게. 내 전속 힐러 할래? 매일 밤 10시간씩 접속 필수야!',
    background: 'pcroom',
    characterEmotion: 'happy',
    choices: [
      { text: '당연하지, 내가 널 지켜줄게.', nextNode: 'happy_path' },
      { text: '그건 무리야. 바빠.', nextNode: 'normal_path' },
    ]
  },
  happy_path: {
    id: 'happy_path',
    speaker: '나나',
    text: '정말!? 에헤헷, 너 제법 든든하잖아. 우리 듀오 닉네임 맞추자 ♡',
    background: 'pcroom',
    characterEmotion: 'happy',
    nextNode: 'happy_end',
  },
  normal_path: {
    id: 'normal_path',
    speaker: '나나',
    text: '...치, 쓸모없는 녀석. 가버려! 뉴비 강퇴!',
    background: 'pcroom',
    characterEmotion: 'angry',
    nextNode: 'normal_end',
  },
  happy_end: {
    id: 'happy_end',
    speaker: '시스템',
    text: '[Happy End] 사이버 지뢰계 소녀와 성공적인 랜선 듀오가 되었다!',
    background: 'pcroom',
    isEnding: true,
  },
  normal_end: {
    id: 'normal_end',
    speaker: '시스템',
    text: '[Normal End] 무리한 요구를 거절하고 내 삶을 살기로 했다.',
    background: 'street',
    isEnding: true,
  },
  bad_end: {
    id: 'bad_end',
    speaker: '시스템',
    text: '[Bad End] 게임센터에서 이름 모를 유저에게 저주를 받았다...',
    background: 'pcroom',
    isEnding: true,
  }
};
