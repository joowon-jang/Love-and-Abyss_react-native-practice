import { StoryNode } from '../story';

export const yuaStory: Record<string, StoryNode> = {
  start: {
    id: 'start',
    speaker: '나',
    text: '노을이 지는 스산한 공원 앞, 유아가 곰인형을 꼬옥 안고 서있다.',
    background: 'park',
    nextNode: 'greet',
  },
  greet: {
    id: 'greet',
    speaker: '유아',
    text: '헤헤, 와 줬구나! 곰돌이랑 같이 쭉 기다리고 있었어 🎀',
    background: 'park',
    characterEmotion: 'happy',
    choices: [
      { text: '오래 기다렸지? 감기 걸리겠어.', nextNode: 'sweet' },
      { text: '왜 날 부른거야?', nextNode: 'direct' },
    ]
  },
  direct: {
    id: 'direct',
    speaker: '유아',
    text: '응? 그냥... 목소리가 듣고 싶어서. 유아, 방해된 걸까?',
    background: 'park',
    characterEmotion: 'angry',
    choices: [
      { text: '아니야. 마침 쉬는 중이었어.', nextNode: 'sweet' },
      { text: '다음부턴 갑자기 부르지 마.', nextNode: 'cold' },
    ]
  },
  sweet: {
    id: 'sweet',
    speaker: '유아',
    text: '유아는 다정하게 대해주는 사람이 너무 좋아. ...아니, 오직 너뿐인걸.',
    background: 'park',
    characterEmotion: 'happy',
    nextNode: 'suspicion',
  },
  cold: {
    id: 'cold',
    speaker: '유아',
    text: '앗... 유비상... 미, 미안해. 유아가 착한 아이로 있을 테니까 버리지 마...',
    background: 'park',
    characterEmotion: 'default',
    nextNode: 'crying',
  },
  suspicion: {
    id: 'suspicion',
    speaker: '나',
    text: '순간, 유아의 치마 주머니 사이로 뭔가 날카로운 금속 같은 것이 번쩍였다.',
    background: 'park',
    choices: [
      { text: '모르는 척 넘어간다.', nextNode: 'normal_end' },
      { text: '주머니에 있는 거 뭐야?', nextNode: 'yandere_reveal' },
    ]
  },
  yandere_reveal: {
    id: 'yandere_reveal',
    speaker: '유아',
    text: '아, 이거? 커터칼이야. 유아를 괴롭히는 나쁜 애들을 잘라내려고♡',
    background: 'park',
    characterEmotion: 'angry',
    nextNode: 'yandere_end',
  },
  crying: {
    id: 'crying',
    speaker: '유아',
    text: '훌쩍... 너무해. 날 사랑하지 않는 거구나...',
    background: 'park',
    characterEmotion: 'angry',
    nextNode: 'bad_end',
  },
  normal_end: {
    id: 'normal_end',
    speaker: '시스템',
    text: '[Normal End] 그녀의 비밀을 알지 못하고 평화롭게 헤어졌다.',
    background: 'park',
    isEnding: true,
  },
  yandere_end: {
    id: 'yandere_end',
    speaker: '시스템',
    text: '[True End] 너 또한 무사하지 못할 것이다.',
    background: 'park',
    isEnding: true,
  },
  bad_end: {
    id: 'bad_end',
    speaker: '시스템',
    text: '[Bad End] 유아와의 길었던 인연이 비참하게 끝났다.',
    background: 'park',
    isEnding: true,
  }
};
