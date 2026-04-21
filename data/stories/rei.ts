import { StoryNode } from '../story';

export const reiStory: Record<string, StoryNode> = {
  start: {
    id: 'start',
    speaker: '나',
    text: '텅 빈 방과 후의 로맨틱한 교실. 레이가 창밖을 내려다보고 있다.',
    background: 'school',
    nextNode: 'rei_intro',
  },
  rei_intro: {
    id: 'rei_intro',
    speaker: '레이',
    text: '...뭐야? 아직도 안 갔어? 시끄러우니까 입 꼭 다물고 있어.',
    background: 'school',
    characterEmotion: 'default',
    choices: [
      { text: '너 혼자 남은게 걱정돼서.', nextNode: 'tsundere' },
      { text: '알았어, 갈게.', nextNode: 'leave' },
    ]
  },
  leave: {
    id: 'leave',
    speaker: '레이',
    text: '...갈 거면서 왜 말 걸어. 문 닫고 똑바로 가라.',
    background: 'school',
    characterEmotion: 'angry',
    nextNode: 'bad_end',
  },
  tsundere: {
    id: 'tsundere',
    speaker: '레이',
    text: '참나, 별꼴이야. 널 누가 걱정해달래? 난 그냥 하늘 구경 중이었어.',
    background: 'school',
    characterEmotion: 'angry',
    nextNode: 'approach',
  },
  approach: {
    id: 'approach',
    speaker: '레이',
    text: '...가까이 오지 마. 내 공간 뺏지 말라고. ...라고 말했지만, 안 쫓아낼게.',
    background: 'school',
    characterEmotion: 'happy',
    choices: [
      { text: '옆에 같이 앉는다', nextNode: 'sit' },
      { text: '조금 거리를 유지하고 서 있는다', nextNode: 'stand' },
    ]
  },
  stand: {
    id: 'stand',
    speaker: '레이',
    text: '하아, 진짜 눈치 없네. 거기서 뭐 하냐, 허수아비야?',
    background: 'school',
    characterEmotion: 'default',
    nextNode: 'normal_end',
  },
  sit: {
    id: 'sit',
    speaker: '레이',
    text: '뭐, 뭐하는 짓이야?! ...너, 샴푸 냄새 괜찮네.',
    background: 'school',
    characterEmotion: 'happy',
    nextNode: 'happy_end',
  },
  bad_end: {
    id: 'bad_end',
    speaker: '시스템',
    text: '[Bad End] 당신의 차가운 대처에 쿨뷰티 그녀의 마음은 영원히 닫혀버렸다.',
    background: 'school',
    isEnding: true,
  },
  normal_end: {
    id: 'normal_end',
    speaker: '시스템',
    text: '[Normal End] 미숙한 거리감 속에서 조용히 해가 졌다.',
    background: 'school',
    isEnding: true,
  },
  happy_end: {
    id: 'happy_end',
    speaker: '시스템',
    text: '[Happy End] 츤데레 천사계 미소녀와 마음의 거리가 한 뼘 좁혀졌다♡',
    background: 'school',
    isEnding: true,
  }
};
