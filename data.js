/* 벌꿀오소리의 화 처리법 — 게임 데이터
   카드 문구·수치는 여기서만 고치면 됩니다.
   opt.type: hold(참기) · burst(터뜨리기) · heal(건강하게 풀기, game 지정) · trap(샌드백) · plain(좋은 일, eff 지정)
   heal game: dig 굴 파기 · breath 수영 호흡 · name 이름 붙이기 · write 끄적이고 묻기 · talk 털어놓기 · nap 한숨 자기 */
window.GAME_DATA = {
  opening: [
    { img: null, text: '현대 사회에는 화가 많다고 한다.' },
    { img: 'walk', text: '그런데 화가 많은 건, 사실 아주 자연스러운 현상이다.' },
    { img: 'speed', text: '여기 벌꿀오소리가 있다. 세상에서 가장 겁 없고 성깔 있는 동물 중 하나로 불린다.' },
    { img: 'pigscream', text: '화를 잘못 다루면… 이렇게 된다.' },
    { img: 'surprise', text: '오늘부터 일주일, 우리는 이 작은 맹수가 화를 어떻게 처리하는지 관찰해 보기로 했다.' }
  ],

  roles: {
    student: {
      name: '학생', img: 'desk', pig: '돼지 선배', friend: '햄스터 친구',
      blurb: '과제, 팀플, 시험. 화낼 일이 끊이지 않는 캠퍼스의 일주일.',
      early: '일찍 뻗었다'
    },
    worker: {
      name: '직장인', img: 'walk', pig: '돼지 부장', friend: '햄스터 동기',
      blurb: '지하철, 회의, 잔소리. 서류가방 하나 들고 버티는 회사의 일주일.',
      early: '조퇴했다'
    }
  },

  days: [
    { label: '월요일', short: '월', theme: '월요병', intro: '월요일이다. 관찰 대상은 이미 조금 화가 나 있다.' },
    { label: '화요일', short: '화', theme: '쌓이는 일', intro: '화요일. 작은 일들이 조용히 쌓이기 시작한다.' },
    { label: '수요일', short: '수', theme: '억울한 날', intro: '수요일. 한 주의 한가운데, 억울한 일이 찾아오기 좋은 날이다.' },
    { label: '목요일', short: '목', theme: '과부하', intro: '목요일. 할 일이 개체의 처리 용량을 넘기 시작한다.' },
    { label: '금요일', short: '금', theme: '거의 다 왔다', intro: '금요일. 끝이 보인다. 방심은 금물이다.' },
    { label: '토요일', short: '토', theme: '쉬는데도 화남', intro: '토요일. 쉬는 날에도 화는 쉬지 않는다.' },
    { label: '일요일', short: '일', theme: '일요일 밤', intro: '일요일. 마지막 날이다. 내일이 벌써 신경 쓰인다.' }
  ],

  events: {
    student: [
      [ // 월
        { t: '08:50', title: '1교시 출석, 알람을 세 번 껐다', img: 'desk', anger: 12, tag: '짜증',
          opts: [
            { type: 'hold', label: '헐레벌떡 뛰면서 속으로만 욕한다' },
            { type: 'burst', label: '알람한테 “너 때문이야!” 소리친다', line: '알람은 대답하지 않았다. 옆방 친구가 벽을 쳤다.' },
            { type: 'heal', game: 'dig', label: '전력질주로 화를 털어낸다' } ] },
        { t: '10:30', title: '교수님이 과제를 하나 더 얹었다', img: 'think', anger: 15, tag: '짜증',
          opts: [
            { type: 'hold', label: '“네…” 하고 받아 적는다' },
            { type: 'burst', label: '“지난주에도 주셨잖아요!” 외친다', line: '강의실이 조용해졌다. 교수님이 이름을 물었다.' },
            { type: 'heal', game: 'breath', label: '숨을 네 번 천천히 고른다' } ] },
        { t: '12:30', title: '학식 줄에서 누가 앞으로 새치기했다', img: 'surprise', anger: 15, tag: '무시당한 느낌',
          opts: [
            { type: 'hold', label: '못 본 척 핸드폰을 본다' },
            { type: 'burst', label: '“저기요! 줄 안 보여요?” 크게 말한다', line: '새치기한 사람이 사과했다. 그런데 모두가 쳐다본다.' },
            { type: 'heal', game: 'name', label: '지금 이 기분에 이름을 붙여 본다' } ] },
        { t: '15:00', title: '팀플 단톡방, 다들 읽고 대답이 없다', img: 'stripe', anger: 18, tag: '서운함',
          opts: [
            { type: 'hold', label: '“제가 할게요” 하고 혼자 다 한다' },
            { type: 'burst', label: '“다들 손가락 없어요?” 보낸다', line: '단톡방에 정적이 흘렀다. 한 명이 방을 나갔다.' },
            { type: 'heal', game: 'talk', label: '햄스터 친구한테 털어놓는다' } ] },
        { t: '22:00', title: '월요일인데 벌써 금요일처럼 피곤하다', img: 'room', anger: 8, tag: '피곤함',
          opts: [
            { type: 'hold', label: '억지로 과제 창을 연다' },
            { type: 'burst', label: '베개를 던진다', line: '베개는 책상 위 컵을 쓰러뜨렸다.' },
            { type: 'heal', game: 'nap', label: '일단 한숨 잔다' } ] }
      ],
      [ // 화
        { t: '09:00', title: '버스 카드 잔액 부족, 뒷사람의 한숨', img: 'walk', anger: 12, tag: '민망함',
          opts: [
            { type: 'hold', label: '얼굴이 빨개진 채 내린다' },
            { type: 'burst', label: '“한숨 쉬지 마세요!” 돌아본다', line: '뒷사람도 화가 났다. 버스가 조금 늦게 출발했다.' },
            { type: 'heal', game: 'breath', label: '다음 버스를 기다리며 숨을 고른다' } ] },
        { t: '11:00', title: '돼지 선배가 팀플 자료를 전부 갈아엎자고 한다', img: 'pigpoint', anger: 20, tag: '짜증',
          opts: [
            { type: 'hold', label: '“네, 다시 할게요” 한다' },
            { type: 'burst', label: '“선배가 하세요 그럼!” 한다', line: '돼지 선배가 빨개졌다. 둘이 같이 빨개졌다.' },
            { type: 'heal', game: 'write', label: '하고 싶은 말을 적어서 묻는다' } ] },
        { t: '13:00', title: '햄스터 친구가 초코바를 나눠줬다', img: 'hamster', anger: 0, tag: '고마움', good: true,
          opts: [
            { type: 'plain', label: '고맙다고 꼭 말한다', eff: { anger: -15, rel: 10 }, line: '햄스터 친구가 수줍게 끄덕였다.' },
            { type: 'plain', label: '반은 아껴 둔다', eff: { anger: -10, energy: 12 }, line: '주머니 속 초코바가 든든하다.' },
            { type: 'plain', label: '같이 벤치에 앉아 멍 때린다', eff: { anger: -20, energy: 5 }, line: '아무 말도 안 했는데 좀 나아졌다.' } ] },
        { t: '16:00', title: '도서관 옆자리 키보드 소리가 천둥 같다', img: 'think', anger: 15, tag: '짜증',
          opts: [
            { type: 'hold', label: '이어폰을 끼고 버틴다' },
            { type: 'burst', label: '책상을 쾅 친다', line: '도서관 전체가 이쪽을 본다. 키보드 소리는 멈췄다.' },
            { type: 'heal', game: 'write', label: '포스트잇에 불만을 적고 구긴다' } ] },
        { t: '23:30', title: '과제 파일이 저장 안 되고 꺼졌다', img: 'speed', anger: 25, tag: '불안',
          opts: [
            { type: 'hold', label: '말없이 처음부터 다시 친다' },
            { type: 'burst', label: '노트북한테 소리 지른다', line: '노트북은 재부팅했다. 룸메이트가 깼다.' },
            { type: 'heal', game: 'dig', label: '밖에 나가 한 바퀴 뛴다' } ] }
      ],
      [ // 수
        { t: '09:30', title: '내가 만든 슬라이드를 선배가 자기가 했다고 발표', img: 'pigdesk', anger: 25, tag: '억울함',
          opts: [
            { type: 'hold', label: '웃으면서 박수 친다' },
            { type: 'burst', label: '“그거 제가 만든 건데요?” 손 든다', line: '사실이긴 하다. 그런데 분위기가 얼어붙었다.' },
            { type: 'heal', game: 'name', label: '이 기분이 정확히 뭔지 이름 붙인다' } ] },
        { t: '12:00', title: '돼지 선배: “화날 땐 이거 쳐. 샌드백!”', img: 'pigscream', anger: 5, tag: '짜증', trapEvent: true,
          opts: [
            { type: 'trap', label: '샌드백을 신나게 친다' },
            { type: 'heal', game: 'dig', label: '정중히 거절하고 굴 파러 간다' },
            { type: 'hold', label: '“괜찮아요” 하고 웃는다' } ] },
        { t: '14:00', title: '교수님이 내 이름을 또 틀리게 부른다. 세 번째다', img: 'surprise', anger: 12, tag: '무시당한 느낌',
          opts: [
            { type: 'hold', label: '틀린 이름에 “네” 하고 대답한다' },
            { type: 'burst', label: '“제 이름은 그게 아닌데요!” 한다', line: '교수님이 당황했다. 다음 주엔 맞게 부를지도 모른다.' },
            { type: 'heal', game: 'breath', label: '숨 한 번 고르고 넘긴다' } ] },
        { t: '17:00', title: '엄마 전화: “요즘 뭐 하고 다니니”', img: 'stripe', anger: 15, tag: '서운함',
          opts: [
            { type: 'hold', label: '“그냥 잘 지내” 하고 끊는다' },
            { type: 'burst', label: '“나도 바빠!” 하고 끊는다', line: '끊고 나니 마음이 더 무겁다.' },
            { type: 'heal', game: 'talk', label: '햄스터 친구한테 털어놓는다' } ] },
        { t: '21:00', title: '생각해 보니 아침 발표 일, 아직도 억울하다', img: 'cream', anger: 15, tag: '억울함',
          opts: [
            { type: 'hold', label: '잊은 척 드라마를 튼다' },
            { type: 'burst', label: '선배한테 장문의 카톡을 보낸다', line: '읽음 표시가 떴다. 답은 없다.' },
            { type: 'heal', game: 'write', label: '하고 싶은 말을 다 적고 묻는다' } ] }
      ],
      [ // 목
        { t: '10:00', title: '시험 범위가 갑자기 두 장 늘었다', img: 'speed', anger: 20, tag: '불안',
          opts: [
            { type: 'hold', label: '묵묵히 형광펜을 꺼낸다' },
            { type: 'burst', label: '“이건 반칙이에요!” 외친다', line: '몇 명이 박수를 쳤다. 범위는 그대로다.' },
            { type: 'heal', game: 'breath', label: '숨부터 고르고 계획을 다시 짠다' } ] },
        { t: '13:00', title: '카페 와이파이가 계속 끊긴다', img: 'think', anger: 12, tag: '짜증',
          opts: [
            { type: 'hold', label: '새로고침을 스무 번 누른다' },
            { type: 'burst', label: '카운터에 가서 따진다', line: '알바생 잘못은 아니었다. 괜히 미안해졌다.' },
            { type: 'heal', game: 'dig', label: '짐 싸서 도서관까지 뛴다' } ] },
        { t: '16:00', title: '뱀 출현: 과제 마감이 오늘 자정으로 당겨졌다', img: 'swim', anger: 30, tag: '불안', snake: true,
          opts: [
            { type: 'hold', label: '밥 거르고 바로 시작한다' },
            { type: 'burst', label: '뱀을 들이받는다', line: '물렸다. 벌꿀오소리는 잠깐 기절했다가 일어났다.' },
            { type: 'heal', game: 'nap', label: '20분만 자고 시작한다' } ] },
        { t: '20:00', title: '햄스터 친구가 “같이 공부할래?” 연락했다', img: 'hamster', anger: 0, tag: '고마움', good: true,
          opts: [
            { type: 'plain', label: '같이 한다', eff: { anger: -12, rel: 10, energy: -5 }, line: '혼자보다 덜 막막하다.' },
            { type: 'plain', label: '고맙지만 혼자 한다', eff: { anger: -5, energy: 5 }, line: '마음만 받아도 든든하다.' },
            { type: 'plain', label: '공부는 핑계, 수다만 떤다', eff: { anger: -20, rel: 5, energy: -10 }, line: '공부는 못 했다. 기분은 나아졌다.' } ] },
        { t: '01:00', title: '새벽 1시, 아직 반도 못 했다', img: 'room', anger: 20, tag: '피곤함',
          opts: [
            { type: 'hold', label: '커피를 한 잔 더 탄다' },
            { type: 'burst', label: '“다 망했어!” 외친다', line: '윗집에서 바닥을 쳤다.' },
            { type: 'heal', game: 'nap', label: '딱 한숨만 자고 일어난다' } ] }
      ],
      [ // 금
        { t: '09:00', title: '시험 5분 전, 볼펜이 안 나온다', img: 'surprise', anger: 18, tag: '불안',
          opts: [
            { type: 'hold', label: '볼펜을 계속 흔든다' },
            { type: 'burst', label: '볼펜을 바닥에 던진다', line: '볼펜이 굴러 감독관 발밑에 멈췄다.' },
            { type: 'heal', game: 'breath', label: '숨 고르고 옆 친구한테 빌린다' } ] },
        { t: '11:30', title: '시험 끝. 아는 문제를 틀리게 썼다', img: 'cream', anger: 20, tag: '민망함',
          opts: [
            { type: 'hold', label: '아무렇지 않은 척 웃는다' },
            { type: 'burst', label: '시험지를 구기며 나간다', line: '복도에서 친구들이 조용히 길을 비켰다.' },
            { type: 'heal', game: 'name', label: '이 기분에 이름을 붙인다' } ] },
        { t: '14:00', title: '돼지 선배: “팀플, 주말에 한 번 더 모이자”', img: 'pigpoint', anger: 22, tag: '짜증',
          opts: [
            { type: 'hold', label: '주말 약속을 취소한다' },
            { type: 'burst', label: '“주말엔 안 돼요!” 단칼에 자른다', line: '선배가 삐졌다. 주말은 지켰다.' },
            { type: 'heal', game: 'write', label: '하고 싶은 말을 적어서 묻는다' } ] },
        { t: '18:00', title: '금요일 저녁, 친구들이 다 약속이 있다', img: 'stripe', anger: 12, tag: '서운함',
          opts: [
            { type: 'hold', label: '혼자 편의점 도시락을 먹는다' },
            { type: 'burst', label: '단톡에 “다들 바쁘시네~” 보낸다', line: '분위기가 묘해졌다.' },
            { type: 'heal', game: 'talk', label: '햄스터 친구한테 전화한다' } ] },
        { t: '22:00', title: '누웠는데 오늘 실수가 계속 떠오른다', img: 'room', anger: 15, tag: '민망함',
          opts: [
            { type: 'hold', label: '이불을 머리끝까지 덮는다' },
            { type: 'burst', label: '이불을 찬다', line: '이불킥 세 번. 발가락이 벽에 부딪혔다.' },
            { type: 'heal', game: 'dig', label: '일어나서 스트레칭을 한다' } ] }
      ]
    ],

    worker: [
      [ // 월
        { t: '07:50', title: '만원 지하철에서 발을 밟혔다', img: 'walk', anger: 15, tag: '짜증',
          opts: [
            { type: 'hold', label: '꾹 참고 창밖을 본다' },
            { type: 'burst', label: '“아 좀!” 하고 소리친다', line: '칸 전체가 조용해졌다. 발 밟은 사람은 이미 내렸다.' },
            { type: 'heal', game: 'breath', label: '숨을 네 번 천천히 고른다' } ] },
        { t: '09:10', title: '돼지 부장의 월요일 아침 잔소리', img: 'pigdesk', anger: 20, tag: '짜증',
          opts: [
            { type: 'hold', label: '“네, 알겠습니다” 한다' },
            { type: 'burst', label: '“그건 부장님이 하라고 하셨잖아요!”', line: '맞는 말이었다. 부장이 더 빨개졌다.' },
            { type: 'heal', game: 'write', label: '하고 싶은 말을 적어서 묻는다' } ] },
        { t: '11:00', title: '회의가 회의를 낳았다', img: 'think', anger: 12, tag: '피곤함',
          opts: [
            { type: 'hold', label: '다음 회의 일정을 잡는다' },
            { type: 'burst', label: '“이걸 왜 또 회의해요?” 한다', line: '회의가 하나 더 생겼다. 주제는 “회의 문화”다.' },
            { type: 'heal', game: 'dig', label: '계단으로 한 층 걸어 내려간다' } ] },
        { t: '14:00', title: '메신저: “이거 오늘까지 가능하죠?”', img: 'speed', anger: 18, tag: '무시당한 느낌',
          opts: [
            { type: 'hold', label: '“네 가능합니다” 친다' },
            { type: 'burst', label: '“불가능합니다.” 마침표까지 찍는다', line: '답장이 오지 않는다. 더 불안하다.' },
            { type: 'heal', game: 'name', label: '이 기분에 이름부터 붙인다' } ] },
        { t: '21:00', title: '퇴근길, 오늘 들은 말이 계속 맴돈다', img: 'stripe', anger: 12, tag: '서운함',
          opts: [
            { type: 'hold', label: '이어폰 볼륨을 올린다' },
            { type: 'burst', label: '회사 단톡방에 한마디 남긴다', line: '보내고 나서 3초 뒤에 후회했다.' },
            { type: 'heal', game: 'talk', label: '햄스터 동기한테 털어놓는다' } ] }
      ],
      [ // 화
        { t: '08:30', title: '엘리베이터가 눈앞에서 닫혔다', img: 'surprise', anger: 10, tag: '짜증',
          opts: [
            { type: 'hold', label: '다음 엘리베이터를 기다린다' },
            { type: 'burst', label: '버튼을 연타한다', line: '문은 열리지 않았다. 손가락만 아프다.' },
            { type: 'heal', game: 'dig', label: '계단으로 뛰어 올라간다' } ] },
        { t: '10:00', title: '보낸 메일에 답장 대신 “?” 하나가 왔다', img: 'think', anger: 15, tag: '무시당한 느낌',
          opts: [
            { type: 'hold', label: '같은 내용을 더 길게 다시 보낸다' },
            { type: 'burst', label: '“??”로 답장한다', line: '물음표 전쟁이 시작됐다.' },
            { type: 'heal', game: 'name', label: '이 기분이 뭔지 이름 붙인다' } ] },
        { t: '12:30', title: '햄스터 동기가 커피를 사 왔다', img: 'hamster', anger: 0, tag: '고마움', good: true,
          opts: [
            { type: 'plain', label: '고맙다고 꼭 말한다', eff: { anger: -15, rel: 10 }, line: '햄스터 동기가 수줍게 끄덕였다.' },
            { type: 'plain', label: '다음엔 내가 산다고 약속한다', eff: { anger: -10, rel: 15, energy: -3 }, line: '다음 주 커피 당번이 정해졌다.' },
            { type: 'plain', label: '옥상에서 같이 마신다', eff: { anger: -20, energy: 5 }, line: '바람이 좀 불었다. 좋았다.' } ] },
        { t: '15:00', title: '갑자기 떨어진 보고서, 마감은 내일 아침', img: 'speed', anger: 22, tag: '불안',
          opts: [
            { type: 'hold', label: '말없이 문서를 연다' },
            { type: 'burst', label: '키보드를 세게 두드린다', line: '옆자리 사람이 이어폰을 꼈다.' },
            { type: 'heal', game: 'breath', label: '숨부터 고르고 목차를 짠다' } ] },
        { t: '20:00', title: '택배가 옆 동으로 잘못 갔다', img: 'room', anger: 12, tag: '짜증',
          opts: [
            { type: 'hold', label: '말없이 옆 동까지 간다' },
            { type: 'burst', label: '택배사에 항의 전화를 한다', line: '대기 시간 23분. 화가 더 났다.' },
            { type: 'heal', game: 'write', label: '적어서 구기고 묻는다' } ] }
      ],
      [ // 수
        { t: '09:30', title: '내 아이디어를 부장이 자기 거라고 발표했다', img: 'pigpoint', anger: 25, tag: '억울함',
          opts: [
            { type: 'hold', label: '웃으면서 박수 친다' },
            { type: 'burst', label: '“그거 제 아이디어인데요?” 한다', line: '사실이다. 하지만 회의실 온도가 3도 내려갔다.' },
            { type: 'heal', game: 'name', label: '이 기분이 정확히 뭔지 이름 붙인다' } ] },
        { t: '12:00', title: '돼지 부장: “스트레스는 이걸로 풀어. 샌드백!”', img: 'pigscream', anger: 5, tag: '짜증', trapEvent: true,
          opts: [
            { type: 'trap', label: '샌드백을 신나게 친다' },
            { type: 'heal', game: 'dig', label: '정중히 거절하고 산책을 나간다' },
            { type: 'hold', label: '“괜찮습니다” 하고 웃는다' } ] },
        { t: '14:30', title: '프린터가 또 종이를 씹었다', img: 'surprise', anger: 12, tag: '짜증',
          opts: [
            { type: 'hold', label: '종이를 한 장씩 조심히 꺼낸다' },
            { type: 'burst', label: '프린터를 발로 찬다', line: '프린터가 이상한 소리를 냈다. 수리 기사가 온다.' },
            { type: 'heal', game: 'breath', label: '숨 한 번 고르고 다른 층으로 간다' } ] },
        { t: '17:30', title: '퇴근 10분 전, “잠깐 얘기 좀 할까?”', img: 'pigdesk', anger: 18, tag: '불안',
          opts: [
            { type: 'hold', label: '가방을 다시 내려놓는다' },
            { type: 'burst', label: '“내일 하면 안 될까요?” 한다', line: '의외로 된다고 했다. 대신 내일 아침 8시다.' },
            { type: 'heal', game: 'talk', label: '끝나고 햄스터 동기한테 털어놓는다' } ] },
        { t: '22:00', title: '누워서 생각하니 아침 발표가 아직도 억울하다', img: 'cream', anger: 15, tag: '억울함',
          opts: [
            { type: 'hold', label: '잊은 척 영상을 본다' },
            { type: 'burst', label: '부장한테 보낼 메일을 쓴다', line: '임시 저장함에 들어갔다. 다행이다.' },
            { type: 'heal', game: 'write', label: '하고 싶은 말을 다 적고 묻는다' } ] }
      ],
      [ // 목
        { t: '08:00', title: '비 오는데 우산을 두고 왔다', img: 'walk', anger: 10, tag: '짜증',
          opts: [
            { type: 'hold', label: '젖은 채로 출근한다' },
            { type: 'burst', label: '하늘에 대고 한마디 한다', line: '비는 더 세게 내렸다.' },
            { type: 'heal', game: 'dig', label: '편의점까지 전력질주한다' } ] },
        { t: '10:30', title: '거래처의 세 번째 수정 요청', img: 'think', anger: 20, tag: '짜증',
          opts: [
            { type: 'hold', label: '“반영하겠습니다” 한다' },
            { type: 'burst', label: '“처음 버전이 제일 낫던데요?” 한다', line: '거래처가 처음 버전으로 가자고 했다. 이틀이 날아갔다.' },
            { type: 'heal', game: 'write', label: '진짜 하고 싶은 말을 적어서 묻는다' } ] },
        { t: '16:00', title: '뱀 출현: 오늘 야근 확정', img: 'swim', anger: 30, tag: '피곤함', snake: true,
          opts: [
            { type: 'hold', label: '저녁 약속을 취소한다' },
            { type: 'burst', label: '뱀을 들이받는다', line: '물렸다. 벌꿀오소리는 잠깐 기절했다가 일어났다.' },
            { type: 'heal', game: 'nap', label: '15분만 엎드려 잔다' } ] },
        { t: '19:00', title: '햄스터 동기가 야근 간식을 챙겨 왔다', img: 'hamster', anger: 0, tag: '고마움', good: true,
          opts: [
            { type: 'plain', label: '같이 먹으며 수다 떤다', eff: { anger: -18, rel: 10, energy: 5 }, line: '야근도 둘이면 조금 덜 억울하다.' },
            { type: 'plain', label: '고맙다고 하고 일에 집중한다', eff: { anger: -8, energy: 10 }, line: '당 충전 완료.' },
            { type: 'plain', label: '다음엔 내가 챙기겠다고 한다', eff: { anger: -10, rel: 15 }, line: '서로 챙기는 사이가 됐다.' } ] },
        { t: '23:00', title: '야근 끝, 막차를 놓쳤다', img: 'room', anger: 18, tag: '서운함',
          opts: [
            { type: 'hold', label: '말없이 택시를 부른다' },
            { type: 'burst', label: '회사 건물에 대고 소리친다', line: '경비 아저씨가 손전등을 비췄다.' },
            { type: 'heal', game: 'talk', label: '택시에서 친구한테 전화한다' } ] }
      ],
      [ // 금
        { t: '09:00', title: '금요일 아침 긴급 회의', img: 'speed', anger: 15, tag: '불안',
          opts: [
            { type: 'hold', label: '노트를 들고 뛰어간다' },
            { type: 'burst', label: '“금요일에 긴급이요?” 중얼거린다', line: '생각보다 크게 들렸다.' },
            { type: 'heal', game: 'breath', label: '들어가기 전에 숨을 고른다' } ] },
        { t: '11:00', title: '칭찬인 줄 알았는데 돌려 까기였다', img: 'surprise', anger: 18, tag: '무시당한 느낌',
          opts: [
            { type: 'hold', label: '“감사합니다” 하고 웃는다' },
            { type: 'burst', label: '“방금 그거 칭찬 아니죠?” 묻는다', line: '상대가 당황했다. 사실 좀 통쾌했다.' },
            { type: 'heal', game: 'name', label: '이 기분에 이름을 붙인다' } ] },
        { t: '14:00', title: '돼지 부장: “주말에 이것 좀 봐줄 수 있지?”', img: 'pigscream', anger: 25, tag: '짜증',
          opts: [
            { type: 'hold', label: '“네…” 하고 받는다' },
            { type: 'burst', label: '“주말엔 안 됩니다!” 한다', line: '부장이 한참 쳐다봤다. 주말은 지켰다.' },
            { type: 'heal', game: 'talk', label: '햄스터 동기한테 털어놓고 거절법을 상의한다' } ] },
        { t: '18:30', title: '퇴근하려는데 컴퓨터가 업데이트를 시작했다', img: 'think', anger: 12, tag: '짜증',
          opts: [
            { type: 'hold', label: '진행률 3%를 바라본다' },
            { type: 'burst', label: '전원 버튼을 길게 누른다', line: '컴퓨터가 파란 화면을 보여줬다.' },
            { type: 'heal', game: 'dig', label: '기다리는 동안 계단을 오르내린다' } ] },
        { t: '22:00', title: '불금인데 너무 피곤해서 아무것도 못 하겠다', img: 'room', anger: 10, tag: '피곤함',
          opts: [
            { type: 'hold', label: '억지로 약속에 나간다' },
            { type: 'burst', label: '“왜 나만 이래!” 외친다', line: '외치고 나니 더 피곤하다.' },
            { type: 'heal', game: 'nap', label: '그냥 일찍 잔다' } ] }
      ]
    ],

    weekend: [
      [ // 토
        { t: '10:00', title: '늦잠 자는데 윗집 공사 소리', img: 'room', anger: 15, tag: '짜증',
          opts: [
            { type: 'hold', label: '베개로 귀를 막는다' },
            { type: 'burst', label: '천장을 빗자루로 친다', line: '공사 소리가 잠깐 멈췄다가 더 커졌다.' },
            { type: 'heal', game: 'dig', label: '어차피 깬 거 나가서 뛴다' } ] },
        { t: '13:00', title: '배달 음식이 한 시간째 안 온다', img: 'cream', anger: 15, tag: '짜증',
          opts: [
            { type: 'hold', label: '배고픔을 참으며 기다린다' },
            { type: 'burst', label: '가게에 전화해 따진다', line: '출발했다고 한다. 진짜일까.' },
            { type: 'heal', game: 'write', label: '별점 리뷰 대신 종이에 적고 묻는다' } ] },
        { t: '16:00', title: '{friend}가 산책 가자고 한다', img: 'hamster', anger: 0, tag: '고마움', good: true,
          opts: [
            { type: 'plain', label: '같이 걷는다', eff: { anger: -20, rel: 10, energy: -5 }, line: '걷다 보니 머리가 맑아졌다.' },
            { type: 'plain', label: '집에서 쉬겠다고 한다', eff: { anger: -5, energy: 15 }, line: '쉬는 것도 중요하다.' },
            { type: 'plain', label: '누워서 영상통화만 한다', eff: { anger: -10, rel: 5, energy: 5 }, line: '반쯤 산책한 기분이다.' } ] },
        { t: '21:00', title: '게임에서 팀원이 계속 던진다', img: 'speed', anger: 18, tag: '짜증',
          opts: [
            { type: 'hold', label: '말없이 끝까지 한다' },
            { type: 'burst', label: '채팅창에 폭풍 타자', line: '신고당했다. 게임도 졌다.' },
            { type: 'heal', game: 'name', label: '게임 끄고 이 기분에 이름을 붙인다' } ] }
      ],
      [ // 일
        { t: '11:00', title: '가족 단톡방에 잔소리 폭탄', img: 'stripe', anger: 15, tag: '서운함',
          opts: [
            { type: 'hold', label: '이모티콘 하나로 넘긴다' },
            { type: 'burst', label: '“알아서 할게요!” 보낸다', line: '단톡방이 조용해졌다. 엄마만 “?”를 보냈다.' },
            { type: 'heal', game: 'talk', label: '{friend}한테 털어놓는다' } ] },
        { t: '15:00', title: '빨래하려는데 세제가 없다', img: 'room', anger: 10, tag: '짜증',
          opts: [
            { type: 'hold', label: '빨래를 다음 주로 미룬다' },
            { type: 'burst', label: '빨래 바구니를 걷어찬다', line: '양말이 소파 밑으로 들어갔다.' },
            { type: 'heal', game: 'dig', label: '마트까지 걸어갔다 온다' } ] },
        { t: '19:00', title: '주말이 벌써 끝나간다', img: 'cream', anger: 12, tag: '불안',
          opts: [
            { type: 'hold', label: '못 한 일 목록을 본다' },
            { type: 'burst', label: '“주말 돌려내!” 외친다', line: '주말은 돌아오지 않았다.' },
            { type: 'heal', game: 'breath', label: '숨 고르고 내일 할 일 세 개만 적는다' } ] },
        { t: '23:00', title: '{tomorrow} 생각에 잠이 안 온다', img: 'turn', anger: 15, tag: '불안',
          opts: [
            { type: 'hold', label: '천장만 본다' },
            { type: 'burst', label: '이불을 차고 일어난다', line: '냉장고 문을 세 번 열었다 닫았다.' },
            { type: 'heal', game: 'write', label: '걱정을 적어서 굴에 묻는다' } ] }
      ]
    ]
  },

  tomorrow: { student: '내일 1교시', worker: '내일 출근' },

  results: {
    hold: ['꾹 삼켰다. 속에서 뭔가 쌓이는 소리가 난다.', '표정은 무던하다. 속은 아니다.', '참았다. 일단은.', '아무 일도 없던 척했다. 개체의 털이 살짝 섰다.'],
    burst: ['시원하다. 주변 공기가 차가워졌다.', '말이 먼저 나갔다. 돌아올 수 없다.']
  },

  tags: ['짜증', '억울함', '서운함', '불안', '피곤함', '민망함', '무시당한 느낌'],

  talkRounds: [
    ['오늘 진짜 억울했어', '그냥 들어줄래?'],
    ['내가 예민한 걸까?', '아까 그 일 말이야'],
    ['말하니까 좀 낫다', '고마워, 들어줘서']
  ],

  games: {
    dig:    { name: '굴 파기', how: '버튼을 최대한 빨리 연타하세요', base: 28, energy: 18, done: '흙 냄새가 난다. 몸을 움직이니 화가 풀렸다.' },
    breath: { name: '수영 호흡', how: '원이 커질 땐 누르고, 작아질 땐 떼세요', base: 22, energy: 8, pressure: -12, done: '물속에서 천천히 숨을 쉬었다. 심장이 느려졌다.' },
    name:   { name: '이름 붙이기', how: '지금 이 기분에 맞는 이름을 고르세요', base: 18, energy: 6, pressure: -15, done: '이름을 붙이니 덩어리가 작아졌다.' },
    write:  { name: '끄적이고 묻기', how: '하고 싶은 말을 적고, 구겨서 묻으세요', base: 22, energy: 10, pressure: -8, done: '종이는 땅속에 있다. 아무도 못 본다.' },
    talk:   { name: '털어놓기', how: '{friend}에게 할 말을 골라보세요', base: 18, energy: 6, rel: 10, done: '햄스터가 끄덕였다. 들어주는 것만으로 풀렸다.' },
    nap:    { name: '한숨 자기', how: '버튼을 끝까지 꾹 누르고 있으세요', base: 12, energy: -35, done: '한숨 자고 일어났다. 세상이 조금 덜 밉다.' },
    trap:   { name: '샌드백 치기', how: '돼지 말대로 샌드백을 마구 치세요', base: 0, energy: 12, done: '치면 칠수록 더 빨개졌다. 흥미로운 실험이다.' }
  },

  cards: [
    { key: 'skin',  title: '알아채기 카드', msg: '“아, 나 지금 화났구나.” 그걸 알아챈 순간부터 화는 풀리기 시작해.', img: 'surprise' },
    { key: 'sleep', title: '한숨 자고 풀기 카드', msg: '뱀한테 물려도 한숨 자고 일어나는 게 벌꿀오소리야. 자고 나면 화는 반쯤 풀려 있어.', img: 'stripe' },
    { key: 'work',  title: '당연한 화 카드', msg: '월요일에 화가 나는 건 거의 자연법칙이야. 당연한 거니까, 천천히 풀면 돼.', img: 'walk' },
    { key: 'honey', title: '잘 풀었다 카드', msg: '오늘 화를 꽤 잘 풀었네. 푼 자리에 꿀 한 숟갈 채워 넣자.', img: 'desk' },
    { key: 'hole',  title: '다른 구멍 카드', msg: '막힌 데서 계속 부딪히지 말고 옆에 새 구멍을 파 봐. 화도 길을 찾으면 풀려.', img: 'speed' },
    { key: 'calm',  title: '숨 한 번 카드', msg: '화가 치밀면 숨을 네 번만 쉬어 봐. 화가 나는 건 당연하고, 숨은 공짜야.', img: 'swim' },
    { key: 'alone', title: '화살표 돌리기 카드', msg: '화를 누구한테 쏘는 대신 땅에 쏘자. 굴을 파면 화도 풀리고 집도 생겨.', img: 'pigpoint' },
    { key: 'palm',  title: '다시 손 내밀기 카드', msg: '화내다 멀어진 사이도 풀 수 있어. “아까는 미안” 한마디면 충분해.', img: 'hamster' },
    { key: 'swim',  title: '말로 풀기 카드', msg: '혼자 삼키지 말고 누군가에게 털어놔. 말하는 순간 화는 반쯤 풀려.', img: 'cream' },
    { key: 'angry', title: '터져도 괜찮아 카드', msg: '화가 터졌어도 괜찮아. 화가 나는 건 당연하니까. 다음엔 조금 먼저 풀어 주면 돼.', img: 'pigscream' },
    { key: 'ear',   title: '꾹 참은 너에게 카드', msg: '오늘 많이 참았지. 참은 화는 사라지지 않고 쌓여. 자기 전에 조금만 풀고 자자.', img: 'pig' },
    { key: 'sofa',  title: '소파에서 풀기 카드', msg: '기운이 바닥났으면 쉬는 게 푸는 거야. 오늘은 소파에 누워도 돼.', img: 'room' }
  ],

  endings: {
    lonely:   { title: '혼자 남은 일주일', img: 'cream', card: 'palm',
                lines: ['화는 그때그때 다 냈다.', '그런데 돌아보니 옆에 아무도 없다.', '화를 푸는 방법이 남을 향하면, 결국 나도 혼자가 된다.'] },
    bottled:  { title: '참다 터진 일주일', img: 'pigscream', card: 'angry',
                lines: ['개체는 대부분의 화를 삼켰다.', '삼킨 화는 사라지지 않았다. 쌓였다가, 한꺼번에 터졌다.', '참는 것은 화를 없애지 않는다. 미룰 뿐이다.'] },
    tired:    { title: '지쳐버린 일주일', img: 'room', card: 'sofa',
                lines: ['일찍 굴로 돌아간 날이 많았다.', '화를 푸느라 기운을 다 썼다.', '그래도 괜찮다. 쉬는 것도 방법이다.'] },
    master:   { title: '화 처리 달인', img: 'desk', card: 'honey',
                lines: ['화는 매일 찾아왔다.', '개체는 그때마다 파고, 쉬고, 적고, 털어놓았다.', '관찰 결과, 이 벌꿀오소리는 화를 다룰 줄 안다. 꿀도 챙겼다.'] },
    calm:     { title: '무던한 일주일', img: 'surprise', card: 'skin',
                lines: ['화는 났다. 여러 번 났다.', '그리고 대부분 잘 빠져나갔다.', '무던하다는 건 화가 안 난다는 뜻이 아니다. 잘 흘려보낸다는 뜻이다.'] },
    survived: { title: '그럭저럭 버틴 일주일', img: 'walk', card: 'sleep',
                lines: ['참기도 하고, 터지기도 하고, 가끔은 잘 풀기도 했다.', '완벽하지 않았지만 일주일을 버텼다.', '다음 주의 벌꿀오소리는 조금 더 잘 풀 것이다.'] }
  }
};
