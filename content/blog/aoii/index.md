---
title: "Active Optical Intensity Interferometry (AOII)"
subtitle: "레이저와 대기난류로 구현하는 장거리 능동 이미징"
summary: "Amplitude Interferometry의 한계를 넘어, 여러 레이저와 대기난류를 활용해 thermal-like light를 만들어 장거리 이미징을 가능하게 하는 Active Intensity Interferometry 연구 정리"
date: 2026-05-15
categories: ["Physics", "Optics", "Research"]
cardimage: "aoii/cover.png"
featureimage: "aoii/cover.png"
caption: "Active Optical Intensity Interferometry"
authors:
  - suawiu: author.jpeg
params:
  math: true
draft: true
---

이 글은 2026년 5월 연세대학교 홍교수 연구실 lab meeting에서 발표한 **Active Optical Intensity Interferometry (AOII)** 연구를 정리한 것입니다.

---

### 배경 (Background): 두 가지 간섭법

빛을 이용한 이미징에는 크게 두 가지 간섭법이 있습니다.

|  | **Amplitude (Phase) Interferometry** | **Intensity Interferometry (HBT)** |
|--|--|--|
| 측정 대상 | 위상(Phase) 직접 측정 | 세기 요동의 상관관계 |
| 결맞음 차수 | 1차 결맞음 $g^{(1)}$ | 2차 결맞음 $g^{(2)}$ |
| 장점 | 높은 감도 | 대기난류에 강인(Robust) |
| 단점 | 정밀한 위상 안정화 필요 | Thermal light 필요, 능동 이미징에 부적합 |

Amplitude Interferometry는 감도가 높지만 대기난류에 매우 취약합니다. 반면 1956년 Hanbury Brown & Twiss가 제안한 **HBT(Hanbury Brown–Twiss) 간섭법**은 세기 요동의 상관관계를 측정하기 때문에 대기난류의 영향을 받지 않습니다. 그러나 HBT 방식은 **thermal light**를 필요로 한다는 근본적인 제약이 있습니다.

---

### 문제 (Problem): 장거리 + 능동 이미징의 벽

장거리 이미징 환경에서는 다음과 같은 상충 관계가 발생합니다.

$$\text{장거리} + \text{대기난류} \Rightarrow \text{Amplitude Interferometry} \times$$

- **Thermal light**는 발산각(divergence)이 커서 장거리 전파에 불리합니다.
- **Laser**는 결맞음(coherence)이 너무 높아 세기 요동이 없으므로, HBT 상관관계가 나타나지 않습니다.

즉, 장거리 + 대기난류 + 능동 이미징을 동시에 만족하는 방법이 존재하지 않는 것처럼 보입니다.

$$\text{active} + \text{long-distance} + \text{intensity interferometry} = ?$$

---

### 아이디어 (Idea): 여러 레이저 → Thermal-like Light

이 연구의 핵심 아이디어는 간단합니다.

$$\text{독립적인 위상을 가진 여러 레이저} + \text{대기난류} \;\Longrightarrow\; \text{Thermal-like light}$$

서로 독립적인 위상(independent phases)을 가진 다수의 레이저 빔이 대기난류를 통과하면, 간섭과 산란을 거치며 **thermal light와 유사한 통계적 특성**을 갖게 됩니다. 이를 통해 레이저의 장거리 전파 능력을 유지하면서도 HBT 간섭법을 적용할 수 있습니다.

---

### 이론 (Theory)

#### 2차 결맞음 $g^{(2)}$

빛의 통계적 성질은 2차 결맞음 함수로 나타냅니다.

$$g^{(2)}(\tau) = \frac{\langle E^-(t)\, E^-(t+\tau)\, E^+(t+\tau)\, E^+(t) \rangle}{\langle E^-(t)\, E^+(t) \rangle^2}$$

| 빛의 종류 | $g^{(2)}(0)$ |
|--|--|
| Thermal light | $> 1$ (photon bunching) |
| Coherent light (Laser) | $= 1$ |
| Single-photon source | $< 1$ (anti-bunching) |

Thermal light에서 $g^{(2)}(0) > 1$이 나타나는 것을 **photon bunching**이라 하며, 이 효과가 HBT 간섭법의 핵심입니다.

#### 세기 상관관계와 이미징

두 검출기 $a$, $b$에서 측정한 세기 상관관계는 다음과 같이 물체의 공간 정보를 담고 있습니다.

$$c_{ab}^{(2)} = \frac{\langle \Delta I_a \, \Delta I_b \rangle}{\langle I_a \rangle \langle I_b \rangle} = |f(\Delta k)|^2$$

즉, **측정값 = 물체 모양의 Fourier Transform의 제곱**입니다. 실제 비이상적 실험 조건에서는 다음 형태가 됩니다.

$$\langle c_{ab}^{(2)} \rangle = c_0 + c_1 \left|f(\Delta k)\right|^2$$

여기서 $c_0$와 $c_1$은 fitting parameter입니다.

#### 이중 슬릿에 적용

이중 슬릿(slit width $a$, slit separation $s$, 거리 $L$)에 대해 상관함수는 다음과 같습니다.

$$c_{ab}^{(2)} = c_0 + c_1 \left[\operatorname{sinc}\!\left(\frac{aB}{\lambda L}\right) \cos\!\left(\frac{\pi s B}{\lambda L}\right)\right]^2$$

$B$는 검출기 baseline, $\lambda$는 파장입니다.

---

### 이중 슬릿 검증 실험

이 이론을 실제로 검증하기 위한 실험을 진행했습니다.

- **Slit width**: 1 mm
- **Slit separation**: 3 mm
- **거리(Distance)**: 1.36 km
- **Fitting parameters**: $c_0 = 0.160$, $c_1 = 0.625$

1.36 km 거리에서 이중 슬릿의 세기 상관 패턴을 성공적으로 측정했습니다.

---

### Monte Carlo 시뮬레이션

여러 레이저가 만들어내는 thermal-like light의 HBT 상관관계를 수치적으로 검증하기 위해 **Monte Carlo 시뮬레이션**을 수행했습니다. 독립적인 위상을 가진 레이저들의 중첩이 실제로 photon bunching 신호를 만들어내는지 확인합니다.

---

### 관측 가능한 Bunching 신호 (Observable Bunching Signal)

실험에서 bunching 신호를 측정하려면 적절한 **time bin width**를 선택해야 합니다. 두 검출기의 coincidence count rate는 다음 조건에 의존합니다.

$$g^{(2)}(\tau) = 1 + e^{-2|\tau|/\tau_c}$$

$$\langle c_{ab}^{(2)} \rangle = c_0 + c_1 \left|f(B)\right|^2_\tau \cdot \frac{\tau_c}{\Delta t}$$

- $\tau_c$: coherence time
- $\Delta t$: time bin width
- $g^{(2)}(0) - 1 \propto \dfrac{\tau_c}{\Delta t}$

Count rate와 bin width의 조합에 따라 신호의 크기가 달라집니다. 실험에서 사용한 파라미터:

| Count rate | Time bin |
|--|--|
| 100K/s, 1M/s | 0.5ns, 1ns, 10ns, 100ns, 1000ns |

Bin width를 1000 ns, 100 ns, 10 ns로 변화시키며 bunching 신호의 크기 변화를 측정했습니다. Bin width가 작을수록 $g^{(2)}(0) - 1$ 값이 커지는 경향이 이론과 일치함을 확인했습니다.

---

### 요약

이 연구는 레이저 기반의 능동 광원으로도 Intensity Interferometry를 적용할 수 있다는 것을 이론과 실험으로 보였습니다.

- **핵심 아이디어**: 다수의 독립 위상 레이저 + 대기난류 → thermal-like photon statistics
- **핵심 측정량**: 공간 세기 상관관계 $c_{ab}^{(2)}$ → 물체 형상의 Fourier 정보
- **검증**: 1.36 km 거리에서 이중 슬릿 측정 성공, Monte Carlo 시뮬레이션으로 이론 검증
- **응용**: 대기난류 환경에서의 장거리 능동 이미징, 천문 관측 등
