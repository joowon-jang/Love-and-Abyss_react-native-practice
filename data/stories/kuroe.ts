import { StoryNode } from '../story';

export const kuroeStory: Record<string, StoryNode> = {
  start: {
    id: 'start',
    speaker: '나',
    text: '어둑어둑한 지하 라이브 클럽. 구석에서 스모키 화장을 한 소녀와 눈이 마주쳤다.',
    background: 'club',
    nextNode: 'look',
  },
  look: {
    id: 'look',
    speaker: '크로에',
    text: '…뭘 봐? 찌질하게 염탐하냐? 죽고 싶어?',
    background: 'club',
    characterEmotion: 'angry',
    choices: [
      { text: '미안해. 널 화나게 할 생각은 없었어.', nextNode: 'weak' },
      { text: '네가 너무 눈에 띄어서.', nextNode: 'bold' },
    ]
  },
  weak: {
    id: 'weak',
    speaker: '크로에',
    text: '하아… 미친 겁쟁이. 내 구역에서 당장 꺼져.',
    background: 'club',
    characterEmotion: 'default',
    nextNode: 'bad_end',
  },
  bold: {
    id: 'bold',
    speaker: '크로에',
    text: '하? 돌았냐? 간 덩이가 부었네. …너 좀 재밌다. 이리 와 봐.',
    background: 'club',
    characterEmotion: 'happy',
    nextNode: 'drink',
  },
  drink: {
    id: 'drink',
    speaker: '크로에',
    text: '여기서 내 옆에 가만히 앉아 있어. 도망가면 찔러버린다?',
    background: 'club',
    characterEmotion: 'angry',
    choices: [
      { text: '응. 도망 안 갈게.', nextNode: 'happy_path' },
      { text: '이제 집에 가야 하는데...', nextNode: 'yandere_path' },
    ]
  },
  happy_path: {
    id: 'happy_path',
    speaker: '크로에',
    text: '...말은 잘 듣네. 훗. 너, 내 펫(Pet)으로 임명해줄게.',
    background: 'club',
    characterEmotion: 'happy',
    nextNode: 'happy_end',
  },
  yandere_path: {
    id: 'yandere_path',
    speaker: '크로에',
    text: '...집? 으하학. 내 구역에 한번 발을 들인 이상 네 의지로 못 나가.',
    background: 'club',
    characterEmotion: 'angry',
    nextNode: 'yandere_end',
  },
  happy_end: {
    id: 'happy_end',
    speaker: '시스템',
    text: '[Happy End] 고딕 펑크 소녀의 충실한 펫이 되었습니다.',
    background: 'club',
    isEnding: true,
  },
  yandere_end: {
    id: 'yandere_end',
    speaker: '시스템',
    text: '[Bad End] 클럽 지하실에서 영원히 나갈 수 없게 되었다.',
    background: 'club',
    isEnding: true,
  },
  bad_end: {
    id: 'bad_end',
    speaker: '시스템',
    text: '[Normal End] 클럽에서 쫓겨나 일상으로 돌아갔다.',
    background: 'street',
    isEnding: true,
  }
};
