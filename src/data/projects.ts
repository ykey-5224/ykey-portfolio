import type { Project } from "@/components/project-card";


export const projects: Project[] = [
{
slug: "settlement-vat",
title: "Settlement VAT Console",
description: "정산/세금 데이터 테이블 고도화 및 다중 헤더 UI 컴포넌트 구축",
tech: ["Next.js", "TypeScript", "Chakra UI", "MRT"],
href: "https://example.com", // 공개 불가면 제거
repo: "https://github.com/yourname/settlement-vat", // 공개 불가면 제거
thumbnail: "/og.png",
role: "Table 아키텍처 설계, 성능 최적화 (virtualization, memoization)",
highlights: [
"다중 헤더/행 구조 및 선택/확장/디테일 패널 공통화",
"렌더링 최적화로 리스트 성능 30% 향상",
"유닛 테스트 도입으로 회귀 버그 감소",
],
},
{
slug: "deep-link",
title: "OneLink Deep Linking",
description: "앱-웹 딥링크 라우팅 안정화 및 인앱 브라우저 이슈 대응",
tech: ["Next.js", "TypeScript", "AF SmartScript"],
href: "https://example.com",
repo: "https://github.com/yourname/deeplink",
thumbnail: "/og.png",
role: "라우팅 전략/폴백 로직 설계",
highlights: [
"iOS/Android 인앱 브라우저 호환성 개선",
"assign/replace 전략 분리 및 실험",
],
},
{
slug: "ui-kit",
title: "Grip UI Kit",
description: "디자인 토큰/컴포넌트 라이브러리 구축",
tech: ["React", "Storybook", "Chakra UI"],
repo: "https://github.com/yourname/grip-ui-kit",
thumbnail: "/og.png",
role: "토큰/테마 설계, 접근성 점검",
highlights: ["다크모드, 포커스 상태, 스크린리더 대응"],
},
];