import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { colors } from '../constants/colors';

interface OptionButtonProps {
  label: string;
  onPress: () => void;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function OptionButton({ label, onPress }: OptionButtonProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(0.95, { stiffness: 300, damping: 20 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { stiffness: 300, damping: 20 });
  };

  // @[/accessibility]: minHeight: 48 ensures target size >= 44x44
  // @[/vercel-react-native-skills]: animation-gpu-properties (scale used)
  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[styles.buttonContainer, animatedStyle]}
      accessibilityRole="button"
      accessibilityLabel={`선택지: ${label}`}
    >
      <LinearGradient
        colors={['rgba(187, 62, 102, 0.9)', 'rgba(18, 15, 19, 0.95)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <Text style={styles.text}>{label}</Text>
      </LinearGradient>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 8,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.lightPink,
    shadowColor: colors.darkPink,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 8,
    overflow: 'hidden',
  },
  gradient: {
    minHeight: 56, // Accessible touch target size & easy tapping
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontFamily: 'serif',
    fontWeight: '600',
    textShadowColor: colors.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 1,
  },
});
