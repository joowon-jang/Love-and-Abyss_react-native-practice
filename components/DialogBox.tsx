import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';
import { colors } from '../constants/colors';

interface DialogBoxProps {
  speaker: string;
  text: string;
  onNext: () => void;
  isInteractable: boolean;
}

export function DialogBox({ speaker, text, onNext, isInteractable }: DialogBoxProps) {
  const [displayedText, setDisplayedText] = useState('');

  // Typing effect
  useEffect(() => {
    let i = 0;
    setDisplayedText('');
    const timer = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, [text]);

  const isFinished = displayedText === text;

  const handlePress = () => {
    if (!isInteractable) return;
    if (!isFinished) {
      setDisplayedText(text); // Skip typing
    } else {
      onNext();
    }
  };

  // @[/vercel-react-native-skills]: ui-pressable
  // @[/accessibility]: min-width/height, contrast ratio for overlay and text
  return (
    <Pressable
      onPress={handlePress}
      style={styles.container}
      accessibilityRole="button"
      accessibilityLabel={`대화창. 발화자: ${speaker}. ${isInteractable ? '다음 대사로' : '선택 대기중'}`}
    >
      <View style={styles.nameBadge}>
        <Text style={styles.nameText}>{speaker}</Text>
      </View>
      <BlurView intensity={60} tint="dark" style={styles.blurContainer}>
        <View style={styles.textBox}>
          <Text style={styles.text} accessibilityRole="text">
            {displayedText}
          </Text>
        </View>
      </BlurView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    paddingBottom: 40,
  },
  nameBadge: {
    backgroundColor: colors.black,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignSelf: 'flex-start',
    borderWidth: 2,
    borderColor: colors.darkPink,
    borderBottomWidth: 0,
    marginLeft: 16, // Indent name badge slightly for aesthetic layout
    shadowColor: colors.darkPink,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 2,
  },
  nameText: {
    color: colors.white,
    fontWeight: '800',
    fontSize: 20,
    fontFamily: 'serif', // Elegant serif font for character name
    letterSpacing: 2,
  },
  blurContainer: {
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'rgba(255, 158, 189, 0.4)', // Semi-transparent border
    marginTop: -2, // Pull up to meet the badge seamlessly
  },
  textBox: {
    backgroundColor: 'rgba(18, 15, 19, 0.65)',
    padding: 24,
    minHeight: 130, // Taller for more breathing room
    // Jirai-kei visual flair: inner shadow/glow effect can be mocked via borders
    borderTopColor: colors.darkPink,
    borderTopWidth: 2,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    lineHeight: 30, // Better optical flow for Korean characters
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
