import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import { BackgroundType } from '../data/story';

const bgMap: Record<BackgroundType, any> = {
  room: require('../assets/images/backgrounds/bg_room.png'),
  cafe: require('../assets/images/backgrounds/bg_cafe.png'),
  street: require('../assets/images/backgrounds/bg_street.png'),
  park: require('../assets/images/backgrounds/bg_park.png'),
  school: require('../assets/images/backgrounds/bg_school.png'),
  title: require('../assets/images/backgrounds/bg_title.png'),
  club: require('../assets/images/backgrounds/bg_club.png'),
  pcroom: require('../assets/images/backgrounds/bg_pcroom.png'),
};

interface BackgroundProps {
  type: BackgroundType;
}

export function Background({ type }: BackgroundProps) {
  // @[/vercel-react-native-skills]: ui-expo-image
  // @[/accessibility]: Decorative image needs no alt label but let's provide visual info
  return (
    <View style={styles.container}>
      <Image
        source={bgMap[type]}
        style={StyleSheet.absoluteFillObject}
        contentFit="cover"
        transition={300}
        accessibilityIgnoresInvertColors
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
    zIndex: -2,
  },
});
