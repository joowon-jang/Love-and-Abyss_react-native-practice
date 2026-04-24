import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { ZoomIn } from 'react-native-reanimated';
import { BlurView } from 'expo-blur';
import { Background } from '../components/Background';
import { Character } from '../components/Character';
import { DialogBox } from '../components/DialogBox';
import { OptionButton } from '../components/OptionButton';
import { CharacterId, storyData, StoryNode } from '../data/story';

export default function GameScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { route } = useLocalSearchParams<{ route: string }>();
  const routeParam = route || 'mia';
  // default to 'mia' if directly visited without params or with an invalid route
  const characterId: CharacterId = routeParam in storyData ? (routeParam as CharacterId) : 'mia';
  const [currentNodeId, setCurrentNodeId] = useState<string>('start');
  
  const node: StoryNode = storyData[characterId][currentNodeId];

  const handleNext = () => {
    if (node.isEnding) {
      // Don't auto-proceed if ending, user must click the ending buttons
      return; 
    }
    if (node.nextNode) {
      setCurrentNodeId(node.nextNode);
    }
  };

  const handleChoice = (nextNode: string) => {
    setCurrentNodeId(nextNode);
  };

  const showChoices = Array.isArray(node.choices) && node.choices.length > 0;

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom, paddingTop: insets.top }]}>
      <Background type={node.background} />
      <Character characterId={characterId} emotion={node.characterEmotion} />
      
      {showChoices && !node.isEnding && (
        <View style={styles.choicesContainer}>
          {node.choices!.map((choice, i) => (
            <OptionButton 
              key={i} 
              label={choice.text} 
              onPress={() => handleChoice(choice.nextNode)} 
            />
          ))}
        </View>
      )}

      {node.isEnding && (
        <Animated.View style={styles.endingContainer} entering={ZoomIn.duration(800).springify()}>
          <BlurView intensity={70} tint="dark" style={styles.endingBlurCard}>
            <View style={{ marginBottom: 20 }}>
              <OptionButton label="캐릭터 선택창으로" onPress={() => router.replace('/select' as any)} />
              <OptionButton label="타이틀로 돌아가기" onPress={() => router.replace('/')} />
            </View>
          </BlurView>
        </Animated.View>
      )}

      <DialogBox 
        speaker={node.speaker} 
        text={node.text} 
        onNext={handleNext} 
        isInteractable={!showChoices && !node.isEnding}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  choicesContainer: {
    position: 'absolute',
    top: '40%',
    left: 20,
    right: 20,
    zIndex: 10,
  },
  endingContainer: {
    position: 'absolute',
    top: '30%',
    left: 40,
    right: 40,
    zIndex: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  endingBlurCard: {
    padding: 20,
    borderRadius: 20,
    overflow: 'hidden',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 100, 150, 0.1)', 
    borderWidth: 1,
    borderColor: 'rgba(255, 60, 150, 0.4)',
  }
});
