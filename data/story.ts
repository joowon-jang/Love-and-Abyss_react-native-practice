import { miaStory } from './stories/mia';
import { yuaStory } from './stories/yua';
import { reiStory } from './stories/rei';
import { kuroeStory } from './stories/kuroe';
import { nanaStory } from './stories/nana';

export type CharacterId = 'mia' | 'yua' | 'rei' | 'kuroe' | 'nana';
export type Emotion = 'default' | 'happy' | 'angry';
export type BackgroundType = 'room' | 'cafe' | 'street' | 'park' | 'school' | 'title' | 'club' | 'pcroom';
export type EndingType = 'true' | 'good' | 'normal' | 'bad';

export interface Choice {
  text: string;
  nextNode: string;
}

export interface StoryNode {
  id: string;
  speaker: string;
  text: string;
  background: BackgroundType;
  characterEmotion?: Emotion;
  choices?: Choice[];
  nextNode?: string;
  isEnding?: boolean;
  endingType?: EndingType;
  endingTitle?: string;
}

export interface RouteProfile {
  id: CharacterId;
  name: string;
  tags: string;
  tagline: string;
  summary: string;
  conflict: string;
  risk: string;
  background: BackgroundType;
}

export const routeProfiles: RouteProfile[] = [
  {
    id: 'mia',
    name: '미아',
    tags: '#지뢰계 #소꿉친구 #잠긴방',
    tagline: '어릴 적 약속을 아직 혼자 붙잡고 있는 아이',
    summary: '오래된 방에서 시작되는 재회. 미아는 버려졌다는 확신을 사랑으로 착각하고 있다.',
    conflict: '함께 있어 주는 것과 감시당하는 것을 구분시켜야 한다.',
    risk: '집착도 높음',
    background: 'room',
  },
  {
    id: 'yua',
    name: '유아',
    tags: '#양산형 #로맨틱 #확인욕구',
    tagline: '다정함을 증거로 수집하는 로맨틱한 불안',
    summary: '해질녘 공원에서 유아는 작은 시험들을 건넨다. 정답은 달콤한 말이 아니라 흔들리지 않는 태도다.',
    conflict: '상처를 달래되 무리한 증명 요구에는 선을 그어야 한다.',
    risk: '감정 기복 큼',
    background: 'park',
  },
  {
    id: 'rei',
    name: '레이',
    tags: '#천사계 #쿨뷰티 #거리감',
    tagline: '차갑게 굴수록 먼저 알아봐 주길 바라는 사람',
    summary: '텅 빈 교실에서 레이는 완벽한 무관심을 연기한다. 가까워지는 방법은 침범이 아니라 허락을 기다리는 것이다.',
    conflict: '고독을 존중하면서도 혼자가 전부는 아니라는 사실을 보여줘야 한다.',
    risk: '방어 심리 강함',
    background: 'school',
  },
  {
    id: 'kuroe',
    name: '크로에',
    tags: '#고딕펑크 #언더그라운드 #자기파괴',
    tagline: '상처를 센 척으로 번역해 버린 지하 클럽의 보컬',
    summary: '새벽의 라이브 클럽. 크로에는 관심을 조롱하고, 조롱 뒤에 구조 요청을 숨긴다.',
    conflict: '도발에 휘말리지 않고 무대 밖의 진심을 들어야 한다.',
    risk: '도발성 높음',
    background: 'club',
  },
  {
    id: 'nana',
    name: '나나',
    tags: '#사이버 #겜덕 #로그아웃공포',
    tagline: '온라인에서는 시끄럽고 오프라인에서는 쉽게 울어 버리는 아이',
    summary: 'PC방 한구석, 나나는 패배보다 로그아웃을 더 무서워한다. 함께 게임하는 것보다 중요한 건 현실로 돌아올 통로다.',
    conflict: '의존을 강화하지 않고 연결감을 남겨야 한다.',
    risk: '의존도 높음',
    background: 'pcroom',
  },
];

export const routeProfileMap: Record<CharacterId, RouteProfile> = {
  mia: routeProfiles[0],
  yua: routeProfiles[1],
  rei: routeProfiles[2],
  kuroe: routeProfiles[3],
  nana: routeProfiles[4],
};

export const storyData: Record<CharacterId, Record<string, StoryNode>> = {
  mia: miaStory,
  yua: yuaStory,
  rei: reiStory,
  kuroe: kuroeStory,
  nana: nanaStory,
};
