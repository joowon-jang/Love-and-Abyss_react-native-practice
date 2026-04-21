# 🖤 Love & Abyss
**~ 위태로운 소녀들의 연애 시뮬레이션 ~**

> **💡 Note:** 이 프로젝트는 **React Native 프레임워크 학습 및 기술 연습 목적**으로 제작된 토이 프로젝트입니다. 게임의 기획, 프론트엔드 코드 작성, 이미지 에셋 생성 등 모든 개발 과정은 **Gemini 3.1 Pro** 인공지능 모델과 페어 프로그래밍하여 구축되었습니다.

『Love & Abyss』는 지뢰계(Jirai-kei), 양산형, 천사계 등 서브컬처 계열의 뚜렷한 개성을 지닌 5명의 소녀들과의 아슬아슬한 관계를 다루는 **모바일 비주얼 노벨**입니다. 가벼운 호감에서 시작해, 선택지에 따라 애틋한 로맨스 혹은 광기 어린 집착으로 치닫는 멀티 엔딩을 경험해 보세요.

---

## ✨ Key Features

- **5인 5색의 멀티 시나리오**: 순수한 소꿉친구부터 뒷골목 클러버, 우울한 겜덕후까지 각기 다른 하위문화를 테마로 한 5가지의 고유 스토리 루트.
- **다이나믹 멀티 엔딩 시스템**: 매 순간 플레이어의 선택에 따라 이야기가 갈라지며, 해피 엔딩(True/Happy)부터 섬뜩한 배드 엔딩(Dead/Yandere)까지 다양한 결말이 기다립니다.
- **고품질 인터페이스 & 애니메이션**: `react-native-reanimated`와 `expo-blur`를 믹스하여 젤리처럼 부드럽게 반응하는 우아한 사이버펑크 핑크-네온 테마의 글래스모피즘(Glassmorphism) UI를 구현했습니다.
- **WCAG 접근성 타겟**: 큰 터치 타겟(최소 44x44px 이상)과 높은 대비율의 텍스트 그림자를 사용하여 모바일 기기에서의 최적의 피로도 없는 경험을 제공합니다. 

---

## 💘 Characters

| 이름 (Name) | 스타일 키워드 | 배경 | 설명 |
| :--- | :--- | :--- | :--- |
| **미아 (Mia)** | #지뢰계 #소꿉친구 | 내 방 | 어릴 적부터 알고 지낸 사이. 하지만 최근 들어 그녀의 관심이 도를 넘고 있다. |
| **유아 (Yua)** | #양산형 #집착 | 공원 | 푹신한 인형을 안고 다니는 순진한 겉모습. 하지만 마음속 깊은 곳엔 날카로운 칼날이 숨겨져 있다. |
| **레이 (Rei)** | #천사계 #쿨뷰티 | 교실 | 방과 후 빈 교실, 곁을 내주지 않는 쿨한 소녀. 그녀의 차가운 방어기제를 허물 수 있을까? |
| **크로에 (Kuroe)** | #고딕펑크 #언더그라운드 | 클럽 | 다크 고딕 룩. 무기력하고 위험한 뒷골목 라이브 클럽에서 우연히 마주친 폭군. |
| **나나 (Nana)** | #사이버 #겜덕 | PC방 | 비 오는 새벽의 게임센터. 매일 같이 게임에서 지며 훌쩍이는 고양이 귀 헤드셋의 피엔(Pien) 소녀. |

---

## 🛠️ Tech Stack

**Front-End**
- `React Native` & `Expo` (v52+)
- `Expo Router` (파일 시스템 기반 라우팅)
- `Expo Blur`, `Expo Image` (고성능 이미지/블러 처리)
- `react-native-reanimated` (물리 기반 애니메이션)
- `TypeScript` (엄격한 타입 안전성 및 모듈화)

## 📂 Project Structure

모듈화된 깨끗한 구조를 지향하며 컴포넌트와 비즈니스 대본 로직이 `app` 라우팅 폴더와 철저히 분리되어 있습니다.

```text
📦 zirai-visual-novel
 ┣ 📂 app                  # Expo Router 기반 앱 화면들 (index, game, select 등)
 ┣ 📂 assets               # 정적 이미지 자산 (아트워크, 배경, 아이콘)
 ┃ ┣ 📂 backgrounds        # 각 씬의 배경 아트워크 (8종)
 ┃ ┣ 📂 characters         # 5명의 캐릭터별 표정 스프라이트 (15종)
 ┣ 📂 components           # 재사용 가능한 UI 모음 (DialogBox, Character, OptionButton 등)
 ┣ 📂 data                 # 타입스크립트 기반 게임 대본 ও 로직
 ┃ ┣ 📜 story.ts           # Main Data Mapper & Type Declarations
 ┃ ┣ 📂 stories            # 모듈화된 개별 캐릭터들의 방대한 스토리라인 분기 파일
 ┣ 📜 README.md
 ┣ 📜 package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 설치 (v18.0.0 이상 권장)
- npm 혹은 yarn 패키지 매니저
- Expo Go 앱이 설치된 스마트폰 (또는 Android Studio / Xcode Simulator)

### Installation & Run
1. 저장소 클론 및 폴더 이동
```bash
cd zirai-visual-novel
```

2. 종속성 설치
```bash
npm install
```

3. Expo 개발 서버 실행
```bash
npx expo start
```

터미널에 표시된 QR 코드를 휴대폰의 카메라(iOS)나 Expo Go(Android/iOS) 로 스캔하여 즉시 플레이할 수 있습니다. 
만약 에뮬레이터로 실행하려면 `a`(Android) 또는 `i`(iOS) 키보드를 누르세요.

---

*본 프로젝트는 개발 과정에서 \`skills.sh\`에 정의된 전문 스킬 시스템(\`frontend-design\`, \`accessibility\`, \`vercel-react-native-skills\` 등)을 적극 활용하여 앱의 아키텍처와 시각적 품질을 최적화하였습니다.*
