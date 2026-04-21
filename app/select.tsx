import React from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Background } from '../components/Background';
import { colors } from '../constants/colors';

const characters = [
  { id: 'mia', name: '미아', desc: '#지뢰계 #어리광 #소꿉친구', bg: 'room' },
  { id: 'yua', name: '유아', desc: '#양산형 #로맨틱 #집착', bg: 'park' },
  { id: 'rei', name: '레이', desc: '#천사계 #오버핏 #쿨뷰티', bg: 'school' },
  { id: 'kuroe', name: '크로에', desc: '#무기력 #고딕펑크 #언더그라운드', bg: 'club' },
  { id: 'nana', name: '나나', desc: '#사이버 #눈물 #겜덕', bg: 'pcroom' }
] as const;

export default function SelectScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Background type="title" />
      <BlurView intensity={90} tint="dark" style={StyleSheet.absoluteFillObject} />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>히로인 선택</Text>
        <Text style={styles.headerSub}>오늘 만날 아이는 누구?</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {characters.map((char, index) => (
          <Animated.View key={char.id} entering={FadeInDown.delay(index * 200).springify()}>
            <Pressable
              style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
              onPress={() => router.push({ pathname: '/game', params: { route: char.id } })}
              accessibilityRole="button"
              accessibilityLabel={`${char.name} 루트 선택`}
            >
              <View style={styles.cardInfo}>
                <Text style={styles.charName}>{char.name}</Text>
                <Text style={styles.charDesc}>{char.desc}</Text>
              </View>
            </Pressable>
          </Animated.View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontFamily: 'serif',
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.lightPink,
    textShadowColor: colors.darkPink,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  headerSub: {
    color: colors.white,
    marginTop: 8,
    fontSize: 16,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    gap: 16,
  },
  card: {
    backgroundColor: 'rgba(187, 62, 102, 0.2)',
    borderWidth: 2,
    borderColor: colors.lightPink,
    borderRadius: 16,
    padding: 24,
    minHeight: 120, // touch area a11y
    justifyContent: 'center',
  },
  cardPressed: {
    backgroundColor: 'rgba(187, 62, 102, 0.5)',
    transform: [{ scale: 0.98 }],
  },
  cardInfo: {
    gap: 8,
  },
  charName: {
    fontFamily: 'serif',
    fontSize: 28,
    color: colors.white,
    fontWeight: '800',
  },
  charDesc: {
    color: colors.lightPink,
    fontSize: 16,
  },
});
