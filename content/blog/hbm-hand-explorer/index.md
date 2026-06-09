---
title: "손으로 HBM을 해부하다 - HBM Hand Explorer"
subtitle: "웹캠과 손동작만으로 HBM 3D 구조를 분해·조립하는 Interactive Viewer"
summary: "Three.js와 MediaPipe를 활용해 HBM을 분해해보자!"
date: 2026-05-31
categories: ["Physics", "Semiconductor"]
cardimage: "hbm-post/cover.jpg"
featureimage: "hbm-post/cover2.jpg"
caption: "HBM Hand Explorer — 손 제스처로 HBM 구조를 탐험해보세요"
authors:
  - suawiu: author.jpeg
params:
  math: false
draft: false
---

<div style="text-align:center; margin: 2rem 0;">
  <a href="https://suawiu.github.io/hbm-hand-explorer/" target="_blank" rel="noopener"
     style="display:inline-block; padding:14px 36px; background:#7f77dd; color:#fff; font-size:1.1rem; font-weight:700; border-radius:10px; text-decoration:none; letter-spacing:0.04em; box-shadow:0 4px 18px rgba(127,119,221,0.35);">
    🖐 HBM Hand Explorer 바로 실행하기 →
  </a>
</div>

---

### HBM이란?

**HBM(High Bandwidth Memory)** 은 수십 개의 DRAM Die를 수직으로 쌓아 올린 초고속 메모리입니다. GPU·AI 가속기 옆에 실리콘 인터포저(Interposer)를 통해 연결되어, 기존 GDDR 대비 수배~수십 배의 메모리 대역폭을 제공합니다.

최근 AI 붐과 함께 HBM 수요가 급증하며 반도체 업계의 핵심 부품으로 떠올랐는데, 그 내부 구조가 어떻게 생겼는지 눈으로 직접 확인하기는 쉽지 않습니다.

그래서 만들었습니다 — 웹캠과 두 손만 있으면 바로 써볼 수 있는 **HBM 3D 구조 탐험기**.

---

### 프로그램이 보여주는 것

HBM4 규격을 기준으로 총 **19개 레이어**를 3D로 시각화합니다.

| 레이어 | 설명 |
|--------|------|
| **DRAM Die × 16** | 12nm 공정, 24Gb/die, HBM4 규격으로 적층. 두께는 약 30μm — 머리카락 굵기의 약 1/3. |
| **Base Die (Logic Die)** | 스택 전체의 메모리 컨트롤러. AI 최적화 ECC·PHY·파워 회로 내장. |
| **Silicon Interposer** | 마이크로범프 5만 개 이상이 배열된 실리콘 기판. HBM과 GPU를 초단거리로 연결. |
| **TSV (Through Silicon Via)** | 실리콘을 수직 관통하는 배선. 10,000개 이상의 TSV가 고속·고집적 적층을 구현. |
| **Advanced MR-MUF** | Mass Reflow Molded Underfill. 적층 간 빈 공간을 채워 방열 성능을 높이고 휨(Warpage)을 방지. |

분해 동작 시 각 레이어가 펼쳐지면서 이름과 주요 특징 설명 카드가 함께 표시됩니다.

---

### 조작법

웹캠이 연결된 환경이라면 별도 설치 없이 브라우저에서 바로 사용할 수 있습니다.

#### 🤚 오른손 — 분해 / 조립

| 손 모양 | 동작 |
|---------|------|
| **손 펼치기** (Open hand) | 레이어 분해 (Explode) |
| **주먹 쥐기** (Fist) | 레이어 조립 (Assemble) |

손을 천천히 펼치거나 오므리면 분해 정도가 실시간으로 반응합니다. 좌측 하단 원형 프로그레스 바에서 현재 분해 진행도를 확인할 수 있습니다.

#### 🤙 왼손 — 3D 회전

| 핀치 | 동작 |
|------|------|
| **엄지 + 검지** 핀치 | X축 회전 |
| **엄지 + 중지** 핀치 | Z축 회전 |
| **두 핀치 동시** | XZ 동시 회전 |

핀치(Pinch)는 엄지와 해당 손가락 끝을 살짝 맞닿게 하는 동작입니다. 핀치를 떼면 회전이 멈춥니다.

> **Tip.** 조명이 밝은 환경에서 배경이 단순할수록 손 인식 정확도가 높아집니다. 웹캠 화면은 우측 하단 PIP 창에서 확인할 수 있습니다.

---

### 데모 영상

{{< youtube -PpgmvmAbrI >}}

---

### 기술 스택

| 기술 | 용도 |
|------|------|
| **Three.js** | WebGL 기반 3D 렌더링 — HBM 레이어 모델링, 조명, 애니메이션 |
| **MediaPipe Hands** | 실시간 손 랜드마크 21포인트 검출 |
| **WebRTC (getUserMedia)** | 웹캠 스트림 수신 |
| **Vanilla JS** | 별도 프레임워크 없이 단일 HTML 파일로 구현 |

단일 `.html` 파일로 동작하며, 서버 사이드 처리 없이 모든 연산이 브라우저 내에서 실행됩니다.

---

### 직접 체험해보세요

<div style="text-align:center; margin: 2rem 0;">
  <a href="https://suawiu.github.io/hbm-hand-explorer/" target="_blank" rel="noopener"
     style="display:inline-block; padding:14px 36px; background:#7f77dd; color:#fff; font-size:1.1rem; font-weight:700; border-radius:10px; text-decoration:none; letter-spacing:0.04em; box-shadow:0 4px 18px rgba(127,119,221,0.35);">
    🖐 HBM Hand Explorer 바로 실행하기 →
  </a>
</div>

카메라 권한 허용 후 손을 화면 앞에 올려놓으면 바로 시작됩니다.
