import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';
import Animated, { SlideInUp, ZoomIn } from 'react-native-reanimated';
import { Background } from '../components/Background';
import { OptionButton } from '../components/OptionButton';
import { colors } from '../constants/colors';

export default function TitleScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Background type="title" />
      
      <Animated.View 
        entering={ZoomIn.duration(1000).springify()} 
        style={styles.titleContainerWrapper}
      >
        <BlurView intensity={80} tint="dark" style={styles.titleContainer}>
          <Text style={styles.title}>Love & Abyss</Text>
          <Text style={styles.subtitle}>~ 위태로운 소녀들의 연애 시뮬레이션 ~</Text>
        </BlurView>
      </Animated.View>

      <Animated.View 
        entering={SlideInUp.delay(500).springify()} 
        style={styles.menuContainer}
      >
        <OptionButton label="스토리 시작하기" onPress={() => router.push('/select' as any)} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainerWrapper: {
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: colors.darkPink,
    shadowColor: colors.darkPink,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
    transform: [{ translateY: -40 }],
  },
  titleContainer: {
    paddingVertical: 40,
    paddingHorizontal: 50,
    alignItems: 'center',
    backgroundColor: 'rgba(50, 10, 20, 0.4)', // Slightly tainted dark red/pink tint
  },
  title: {
    fontSize: 42,
    fontWeight: '900',
    color: colors.white,
    marginBottom: 12,
    fontFamily: 'serif',
    textShadowColor: 'rgba(255, 60, 150, 0.9)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
  },
  subtitle: {
    fontSize: 16,
    color: colors.lightPink,
    fontFamily: 'serif',
    letterSpacing: 2,
    opacity: 0.9,
  },
  menuContainer: {
    position: 'absolute',
    bottom: 120,
    width: '80%',
    maxWidth: 400,
  },
});
