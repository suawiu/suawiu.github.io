---
title: "[Paper Review] Via-in-One TSV: 9층 웨이퍼 적층 3D 메모리 아키텍처"
subtitle: "Multiple-Wafer (9-layer), Extreme thin (3µm-Si per stack) and Innovative Fusion-bonded Via-in-one Architecture for High Bandwidth 3D Memory"
summary: "SAIMEMORY/Intel/Powerchip의 VLSI 2025 발표 논문 리뷰."
date: 2026-07-29
categories: ["Semiconductor", "Physics", "Insights"]
cardimage: "fusion-bonded-via-in-one/fig1.jpg"
authors:
  - suawiu: author.jpeg
---

S. Morein (SAIMEMORY), P. Mahji, W. Gilmore (Intel), C.-L. Lu 외 (Powerchip, AP Memory) — VLSI 2025

---

## 배경: 왜 새로운 TSV 아키텍처가 필요한가

현재 HBM(High Bandwidth Memory)은 **CoW(Chip on Wafer)** 방식을 사용한다. 각 DRAM 다이에 TSV를 개별적으로 뚫고, µbump로 연결한 뒤 적층한다. 차세대에는 **WoW(Wafer on Wafer)** + 하이브리드 본딩 방식이 논의되고 있다.

문제는 두 방식 모두 **각 티어(tier)마다 독립적인 TSV와 추가 패드 금속층**이 필요하다는 점이다. 적층 수가 늘어날수록 공정 비용과 수율 리스크가 기하급수적으로 증가한다. 한 층의 연결 불량이 그 아래 모든 층을 쓸 수 없게 만든다.

이 논문은 "**Via-in-One**"이라는 개념을 제안한다. 여러 장의 웨이퍼를 먼저 모두 쌓은 뒤, **TSV를 한 번에 전층 관통**시키는 방식이다.

---

## Via-in-One 아키텍처 구조

### 공정 흐름

1. **Oxide Trench 형성**: DRAM 웨이퍼에 10nm 이하 평탄도의 산화막 트렌치(85×10µm²)를 형성
2. **Fusion Bonding**: Logic 웨이퍼와 DRAM 웨이퍼를 산화막-산화막 직접 접합 (µbump 없음)
3. **웨이퍼 박형화**: 각 DRAM 층의 실리콘을 **~3µm**까지 극도로 얇게 연마
4. **반복 적층**: F2B(Face-to-Back) 방식으로 DRAM 웨이퍼를 반복적으로 fusion bonding
5. **Via-in-One TSV 식각**: 모든 웨이퍼를 관통하는 TSV를 **한 번의 식각 공정**으로 형성, 각 층의 Contact Ring과 연결
6. **후면 배선 및 패드 형성**

{{< figure src="fig1.jpg" caption="Via-in-One 3D 메모리 구조 개념도. 기존 µbump 방식(좌)과 달리, Via-in-One TSV가 모든 DRAM 층을 한 번에 관통한다. 각 DRAM 층의 Si 두께는 ~3µm로 기존 대비 10배 얇다." >}}

{{< figure src="fig2.jpg" caption="Via-in-One 3D 메모리 공정 흐름. Fusion bonding → 웨이퍼 박형화 → 반복 적층 → Via-in-One TSV 한 번에 식각 → 후면 배선 순으로 진행된다." >}}

### 구조적 특징

- **TSV 피치**: 20µm 미만
- **Si 두께**: 층당 ~3µm (기존 HBM TSV 구조 대비 10배 얇음)
- **Contact Ring**: 각 DRAM 층에서 TSV와 접촉하는 금속 링. O-type과 C-type 두 가지 설계 비교
- **모든 DRAM BEoL 배선층이 TSV 버스에 직접 연결**: 별도의 중계 패드층 불필요

> **BEoL(Back-End of Line)** — 반도체 제조 공정에서 트랜지스터 형성 이후의 금속 배선 공정을 의미한다. 신호와 전원을 소자에 연결하는 다층 금속 배선 구조다.

{{< figure src="fig3.jpg" caption="8Hi 3D 메모리 블록 다이어그램. Logic 웨이퍼의 VHMLInK™ 인터페이스 IP가 각 DRAM 층과 연결되며, GCTL(Global Control)이 각 층의 DRAM을 제어한다." >}}

{{< figure src="fig4.jpg" caption="DRAM 다이 레이아웃 및 칩 사진. 칩 크기 15.4×11.1 mm², 구성은 4K Row × 32 Column × 196 I/O. 층당 Via-in-One TSV 어레이가 13,700개 배치된다." >}}

---

## O-type vs C-type Contact Ring

TSV가 각 DRAM 층을 관통할 때, 각 층의 금속 배선과 접촉하는 구조를 **Contact Ring**이라 한다.

- **O-type**: 폐쇄형 링 구조 → 접촉 면적이 넓어 저항 낮음
- **C-type**: 개방형 링 구조 → 제조는 용이하나 저항 높음

측정 결과 **O-type이 C-type 대비 접촉 저항이 40% 낮아** O-type이 채택되었다.

---

## 실험 결과

{{< figure src="fig5.jpg" caption="CSAM(공초점 주사 음향 현미경) 검사 결과. 9층 적층 공정 중 각 DRAM bonding 계면에 기포(bubble)가 없음을 확인. Si 두께는 층당 ~3µm." >}}

{{< figure src="fig6.jpg" caption="Oxide trench(85×10µm²) 표면 거칠기 측정 결과. Dish(오목 패임) 깊이 <10nm로 Si 기판 표면과 동등한 평탄도 확보. Via-in-One TSV 식각 단면도 함께 표시." >}}

{{< figure src="fig7.jpg" caption="1 Logic + 8 DRAM 적층 단면 이미지. 각 DRAM 층의 Si 기판이 ~3µm로 극도로 얇다. Via-in-One TSV가 2-3개의 Contact Ring과 접촉하며, 모든 DRAM BEoL 배선층이 TSV 버스에 직접 연결된다." >}}

{{< figure src="fig8.jpg" caption="3D 메모리 상호연결 설계. DRAM-Logic 연결, DRAM 패드 출력, Logic 패드 출력 세 가지 경로로 구성된다." >}}

### 전기적 특성

모든 층에서 Contact Ring의 정규화 저항이 **10% 이내** 편차를 보여 우수한 연결 균일성을 확인했다. TSV-to-Landing Pad, TSV-to-Ring 2, TSV-to-Ring 3&4 경로 모두 안정적인 저항값을 기록했다.

{{< figure src="fig9.jpg" caption="각 층의 Via-in-One TSV 및 Contact Ring 정규화 저항. TSV-to-Landing Pad, Ring 2, Ring 3&4 연결 경로 모두 10% 이내 편차로 균일한 연결 품질을 보인다." >}}

### 신뢰성 검증

- **EM(Electromigration) 테스트**: TSV 및 Contact Ring 모두 10년 기준 Imax > 6mA/ring 통과
- **열충격 시험(TC-C1000)**: 1000사이클 후 Daisy Chain 저항 변화 허용 범위 내 유지
- **기능 검증**: DRAM 읽기/쓰기 정상 동작 확인, Vdd 동작 범위 0.95V-1.2V 전 범위 통과

{{< figure src="fig10.jpg" caption="신뢰성 테스트 - Contact Ring 및 Via-in-One TSV 전기이동(EM) 시험. Upstream/Downstream 모두 통과. 10년 기준 각 Contact Ring의 최대 허용 전류(Imax) > 6mA." >}}

{{< figure src="fig11.jpg" caption="CP(Chip Probing) 테스트 결과. DRAM 읽기 파형 비교(입력 대비 출력 동일)와 각 층별 Shmoo 플롯. Vdd 범위 0.95V-1.2V에서 읽기/쓰기 모두 정상 동작." >}}

{{< figure src="fig12.jpg" caption="Via-in-One TSV가 DRAM 3층을 관통하는 체인 구조 구현 사진. 8 DRAM 전층 관통을 위한 최종 과제는 산화막 식각 중 각 층의 Contact Ring을 손상 없이 통과하는 것." >}}

---

## 성능 요약

| 항목 | 수치 |
|------|------|
| 적층 구조 | 1 Logic + 8 DRAM (9층) |
| Si 두께 (층당) | ~3µm |
| TSV 피치 | <20µm |
| TSV 수 (층당) | 13,700개 |
| 칩 용량 | 9GB |
| 데이터 전송 에너지 | <0.7pJ/bit |
| 메모리 대역폭 밀도 | ~0.25Tb/s/mm² |
| 전력 밀도 | <0.35W/mm² |
| DRAM 동작 전압 | 0.95V-1.2V |

---

## 핵심 기여

**기존 방식과의 차이점**은 다음과 같다. 기존 HBM은 각 DRAM 다이마다 개별 TSV를 형성하고 µbump로 연결한다. Via-in-One은 모든 층을 먼저 fusion bonding으로 쌓은 뒤 TSV를 단 한 번의 공정으로 전층 관통시킨다.

이 구조가 가져오는 이점:

1. **공정 단순화**: TSV 공정이 적층 수에 관계없이 1회
2. **신호/전원 무결성 향상**: 모든 BEoL 배선이 TSV에 직접 연결되어 경로 최소화
3. **낮은 커패시턴스**: Via와 주변 Si 사이 거리가 커져 기생 커패시턴스 감소
4. **비용 절감**: µbump 제거, 중계 패드층 불필요

남은 기술 과제는 8층 전체 관통 TSV 식각 시 각 층의 Contact Ring 금속이 산화막 식각 환경에 노출되는 문제로, 식각 선택비 제어가 핵심이다.
