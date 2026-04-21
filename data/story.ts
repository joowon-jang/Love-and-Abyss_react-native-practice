import { miaStory } from './stories/mia';
import { yuaStory } from './stories/yua';
import { reiStory } from './stories/rei';
import { kuroeStory } from './stories/kuroe';
import { nanaStory } from './stories/nana';

export type Emotion = 'default' | 'happy' | 'angry';
export type BackgroundType = 'room' | 'cafe' | 'street' | 'park' | 'school' | 'title' | 'club' | 'pcroom';

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
}


export const storyData: Record<string, Record<string, StoryNode>> = {
  mia: miaStory,
  yua: yuaStory,
  rei: reiStory,
  kuroe: kuroeStory,
  nana: nanaStory,
};
