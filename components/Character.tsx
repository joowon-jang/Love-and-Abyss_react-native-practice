import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';
import { Emotion } from '../data/story';

const charMap: Record<string, Record<Emotion, any>> = {
  mia: {
    default: require('../assets/images/characters/char_default.png'),
    happy: require('../assets/images/characters/char_happy.png'),
    angry: require('../assets/images/characters/char_angry.png'),
  },
  yua: {
    default: require('../assets/images/characters/char_yua_default.png'),
    happy: require('../assets/images/characters/char_yua_happy.png'),
    angry: require('../assets/images/characters/char_yua_angry.png'),
  },
  rei: {
    default: require('../assets/images/characters/char_rei_default.png'),
    happy: require('../assets/images/characters/char_rei_happy.png'),
    angry: require('../assets/images/characters/char_rei_angry.png'),
  },
  kuroe: {
    default: require('../assets/images/characters/char_kuroe_default.png'),
    happy: require('../assets/images/characters/char_kuroe_happy.png'),
    angry: require('../assets/images/characters/char_kuroe_angry.png'),
  },
  nana: {
    default: require('../assets/images/characters/char_nana_default.png'),
    happy: require('../assets/images/characters/char_nana_happy.png'),
    angry: require('../assets/images/characters/char_nana_angry.png'),
  }
};

interface CharacterProps {
  characterId: string;
  emotion?: Emotion;
}

export function Character({ characterId, emotion }: CharacterProps) {
  const { height } = useWindowDimensions();
  
  if (!emotion) return null;

  // Calculate dynamic character size based on screen height to make it large
  const charHeight = height * 1.15; // Make it significantly larger than screen so it looks big
  const charWidth = charHeight * 0.6; // Assuming approximate aspect ratio of sprite

  // @[/vercel-react-native-skills]: ui-expo-image
  return (
    <View style={styles.container} pointerEvents="none">
      <Image
        source={charMap[characterId]?.[emotion] as any}
        style={{ width: charWidth, height: charHeight }}
        contentFit="contain"
        transition={200}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: -1,
    paddingBottom: 0, // Allow character to overlay behind dialog
  },
});
