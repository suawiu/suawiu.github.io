---
title: "ML with QC - Ch3 (한글)"
subtitle: "'Machine Learning with Quantum Computers' 3장 정리"
summary: "양자 컴퓨팅 기초: 큐비트, 게이트, 그리고 알고리즘"
date: 2026-01-15
categories: ["Physics"]
cardimage: "post5/cover_new.png"
featureimage: "post5/cover_new.png"
caption: "Quantum Science and Technology"
authors:
  - suawiu: author.jpeg
params:
  math: true
---

이 포스트는 Maria Schuld와 Francesco Petruccione의 저서 *"Machine Learning with Quantum Computers"* (2nd Edition)의 **Chapter 3. Quantum Computing** 내용을 요약한 것입니다.

---

### 1. 개요 (Introduction)

![Chapter 3 Title Slide](../post8/slide01.png)

이 장은 양자 컴퓨팅을 이해하기 위한 기초를 다집니다. 필요한 선형대수학, 양자역학의 공리, 그리고 큐비트와 게이트 같은 기본 구성 요소를 다룹니다.

---

### 2. 목차 (Table of Contents)

![Table of Contents Slide](../post8/slide02.png)

이 장은 다음과 같이 구성됩니다:
1.  **양자 이론 (Quantum Theory)**: 선형대수 기초 및 공리.
2.  **양자 컴퓨팅 소개 (Introduction to Quantum Computing)**: 큐비트, 게이트, 측정.
3.  **병렬성 & 도이치-조사 알고리즘 (Parallelism & Deutsch-Jozsa Algorithm)**.
4.  **인코딩 (Encoding)**: 기저, 진폭, 시간 발전, 해밀토니안 인코딩.
5.  **양자 가속 (Quantum Speedups)**.
6.  **양자 알고리즘 (Quantum Algorithms)**: 그로버 검색, 위상 추정, VQA.
7.  **양자 어닐링 (Quantum Annealing)**.

---

### 3. 양자 이론 (Quantum Theory)

![Quantum Theory Title Slide](../post8/slide03.png)

양자역학의 수학적 프레임워크를 검토하며 시작합니다.

---

### 4. 선형대수: 기댓값 & 밀도 행렬

![Linear Algebra Expectation Slide](../post8/slide04.png)

*   **기댓값 (Expectation Value)**: 측정의 평균값.
    *   $\langle M \rangle = \sum p_k \mu_k$
    *   $\langle M \rangle = \alpha^\dagger \mathbf{M} \alpha = \sum |\langle v_k | \alpha \rangle|^2 \mu_k$
*   **밀도 행렬 (Density Matrix)**: 양자 시스템의 상태를 더 일반적으로 기술하는 방법(특히 혼합 상태).

---

### 5. 유니타리 발전 (Unitary Evolutions)

![Unitary Evolutions Slide](../post8/slide05.png)

*   **유니타리 행렬**: 역행렬이 켤레 전치 행렬과 같은 행렬 ($U^{-1} = U^\dagger$).
*   고립된 양자 시스템의 시간 발전은 항상 유니타리이며, 이는 확률(진폭 제곱의 합)이 보존됨(합이 1)을 보장합니다.

---

### 6. 순수 상태 vs 혼합 상태 & 부분 대각합

![Pure vs Mixed States Slide](../post8/slide06.png)

*   **순수 상태 (Pure State)**: 시스템에 대해 완벽한 정보를 가진 상태 ($\alpha$).
    *   $\rho = \alpha \alpha^\dagger$
*   **혼합 상태 (Mixed State)**: 시스템이 어떤 상태에 있는지에 대한 불확실성이 있는, 순수 상태들의 통계적 앙상블.
    *   $\rho = \sum p_i \alpha_i \alpha_i^\dagger$
*   **부분 대각합 (Partial Trace)**: 다른 하위 시스템($B$)의 자유도를 평균내어 하위 시스템($A$)의 축소된 밀도 행렬을 얻는 방법 ($\rho_A = \text{tr}_B(\rho_{AB})$).

---

### 7. 양자역학의 공리

![Postulates Slide](../post8/slide07.png)

1.  **상태 공간 (State Space)**: 입자의 상태는 힐베르트 공간의 벡터 $|\psi\rangle$로 표현됩니다.
2.  **발전 (Evolution)**: 시간 발전은 슈뢰딩거 방정식 ($i\hbar \frac{d}{dt}|\psi\rangle = H|\psi\rangle$)으로 기술됩니다.
3.  **측정 (Measurement)**: 관측량 $\Omega$를 측정하면 그 고유값 $\omega$ 중 하나가 $P(\omega_i) \propto |\langle \omega_i | \psi \rangle|^2$ 확률로 나옵니다.

---

### 8. 양자 컴퓨팅 소개

![Intro to QC Title Slide](../post8/slide08.png)

이론에서 계산으로: 큐비트와 게이트.

---

### 9. 큐비트 (Qubits)

![Qubits Slide](../post8/slide09.png)

*   **고전 비트**: 결정론적, 0 또는 1.
*   **양자 비트 (Qubits)**: 상태들의 중첩 상태로 존재할 수 있음.
    *   $|\psi\rangle = \alpha_0 |0\rangle + \alpha_1 |1\rangle$
    *   측정 시 0이 나올 확률 $|\alpha_0|^2$, 1이 나올 확률 $|\alpha_1|^2$.

---

### 10. 블로흐 구 (Bloch Sphere)

![Bloch Sphere Slide](../post8/slide10.png)

*   **블로흐 구**: 단일 큐비트 상태를 기하학적으로 표현한 것.
*   **중요 상태들**:
    *   $|0\rangle$ (북극), $|1\rangle$ (남극)
    *   $|+\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)$ (X축)
    *   $|-\rangle = \frac{1}{\sqrt{2}}(|0\rangle - |1\rangle)$
    *   $|i+\rangle = \frac{1}{\sqrt{2}}(|0\rangle + i|1\rangle)$ (Y축)

---

### 11. 양자 게이트 개요

![Quantum Gates Overview Slide](../post8/slide11.png)

*   **양자 게이트**: 비가역적인 고전 논리 게이트(AND, OR 등)와 달리, 양자 게이트는 유니타리 연산자이며 가역적(reversible)입니다.
*   일반적인 게이트: 파울리(X, Y, Z), 하다마드(H), 위상(S, T), 제어 게이트(CNOT, CCNOT).

---

### 12. 게이트의 분류

![Gate Classification Slide](../post8/slide12.png)

*   **단일 큐비트 게이트**: 큐비트 하나에 작용 (예: Pauli, Hadamard, S, T, Rotation).
*   **다중 큐비트 게이트**: 두 개 이상의 큐비트에 작용하며 얽힘을 생성 (예: CNOT, SWAP, Toffoli).

---

### 13. 파울리 게이트 (Pauli Gates)

![Pauli Gates Slide](../post8/slide13.png)

*   **Pauli-X (비트 반전)**: X축 중심으로 $\pi$ 회전. 고전적인 NOT 게이트와 유사.
    *   $X = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$
*   **Pauli-Y**: Y축 중심으로 $\pi$ 회전.
    *   $Y = \begin{bmatrix} 0 & -i \\ i & 0 \end{bmatrix}$
*   **Pauli-Z (위상 반전)**: Z축 중심으로 $\pi$ 회전. 상대적 위상을 추가.
    *   $Z = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$

---

### 14. 하다마드 게이트 (Hadamard Gate)

![Hadamard Gate Slide](../post8/slide14.png)

*   **Hadamard (H)**: 중첩을 생성합니다. 기저 상태를 중첩 상태로 매핑합니다.
    *   $H = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}$
    *   $|0\rangle \rightarrow |+\rangle = \frac{|0\rangle + |1\rangle}{\sqrt{2}}$
    *   $|1\rangle \rightarrow |-\rangle = \frac{|0\rangle - |1\rangle}{\sqrt{2}}$
    *   시각적으로는 대각선 $X+Z$ 축을 중심으로 한 $180^\circ$ 회전입니다.

---

### 15. S와 T 게이트

![S and T Gates Slide](../post8/slide15.png)

*   **S Gate**: Z축 중심으로 $\pi/2$ 회전. ($S = \sqrt{Z}$)
    *   $S = \begin{bmatrix} 1 & 0 \\ 0 & i \end{bmatrix}$
*   **T Gate**: Z축 중심으로 $\pi/4$ 회전. ($T = \sqrt{S} = \sqrt[4]{Z}$)
    *   $T = \begin{bmatrix} 1 & 0 \\ 0 & e^{i\pi/4} \end{bmatrix}$

---

### 16. 회전 게이트 (Rotation Gates)

![Rotation Gates Slide](../post8/slide16.png)

*   **회전 연산자**: X, Y, Z 축을 중심으로 임의의 각도 $\theta$만큼 회전.
    *   $R_x(\theta) = e^{-i\theta X/2} = \cos(\frac{\theta}{2})I - i\sin(\frac{\theta}{2})X$
    *   $R_y(\theta) = e^{-i\theta Y/2} = \cos(\frac{\theta}{2})I - i\sin(\frac{\theta}{2})Y$
    *   $R_z(\theta) = e^{-i\theta Z/2} = \cos(\frac{\theta}{2})I - i\sin(\frac{\theta}{2})Z$

---

### 17. CNOT 게이트

![CNOT Gate Slide](../post8/slide17.png)

*   **Controlled-NOT (CNOT)**: 2-큐비트 게이트.
*   **논리**: **제어(Control)** 큐비트가 $|1\rangle$이면 타겟 큐비트를 반전(X 적용)시킵니다. 제어가 $|0\rangle$이면 아무것도 하지 않습니다.
*   **얽힘**: CNOT은 얽힘 상태(Bell states)를 생성하는 데 사용되는 주된 게이트입니다.

---

### 18. SWAP 게이트

![SWAP Gate Slide](../post8/slide18.png)

*   **SWAP**: 두 큐비트의 상태를 교환합니다.
    *   $|a, b\rangle \rightarrow |b, a\rangle$
*   세 개의 CNOT 게이트를 사용하여 구성할 수 있습니다.

---

### 19. 토폴리 게이트 (Toffoli Gate)

![Toffoli Gate Slide](../post8/slide19.png)

*   **Toffoli Gate**: 3-큐비트 게이트 (Controlled-Controlled-NOT).
*   **논리**: 두 개의 제어 비트가 **모두** $|1\rangle$일 때만 타겟 비트를 반전시킵니다.
*   **보편성**: 고전 가역 계산에 대해 보편적(Universal)입니다.

---

### 20. 위상 킥백 (Phase Kickback)

![Phase Kickback Slide](../post8/slide20.png)

*   **위상 킥백**: 순수하게 양자적인 현상.
*   제어 게이트가 타겟 연산의 고유 벡터(eigenvector)에 작용할 때, 고유값의 위상이 제어 큐비트로 "반동(kick back)"되어 돌아옵니다.
*   예: 타겟이 $|-\rangle$ 상태인 CNOT은 제어 큐비트의 위상을 반전시킵니다.
    *   $\text{CNOT} |+, -\rangle = |-, -\rangle$

---

### 21. 벨 상태와 얽힘

![Bell States Slide](../post8/slide21.png)

*   **벨 상태 (Bell States)**: 최대 얽힘 상태인 4개의 2-큐비트 상태.
    *   $|\Phi^+\rangle = \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)$
    *   $|\Phi^-\rangle = \frac{1}{\sqrt{2}}(|00\rangle - |11\rangle)$
    *   $|\Psi^+\rangle = \frac{1}{\sqrt{2}}(|01\rangle + |10\rangle)$
    *   $|\Psi^-\rangle = \frac{1}{\sqrt{2}}(|01\rangle - |10\rangle)$
*   **비국소성 (Non-locality)**: 얽힌 큐비트에 대한 측정은 거리에 상관없이 즉각적으로 상관관계를 가지며, 고전적인 국소적 실재론을 위반합니다.

---

### 22. 측정과 기댓값

![Measurement Slide](../post8/slide22.png)

*   다중 큐비트를 측정하면 샘플 이진 문자열을 얻습니다.
*   **기댓값 ($\langle \sigma_z \rangle$)**:
    *   많은 "샷(shots)"(샘플)의 결과를 평균하여 추정합니다.
    *   $|0\rangle$에 대해 $+1$, $|1\rangle$에 대해 $-1$.

---

### 23. 측정 불확실성 (Wald Interval)

![Wald Interval Slide](../post8/slide23.png)

*   유한한 샘플로부터 확률을 추정하므로 불확실성이 존재합니다.
*   **Wald Interval**: 확률 $p$에 대한 간단한 신뢰 구간.
    *   오차 $\epsilon \approx \frac{z}{2\sqrt{S}}$ ($p=0.5$일 때 최대).

---

### 24. 정밀도를 위한 필요 샘플 수

![Sample Size Slide](../post8/slide24.png)

*   특정 정밀도 $\epsilon$를 높은 신뢰도로 얻기 위해 필요한 샷 수 $S$는 $1/\epsilon$의 제곱에 비례합니다.
    *   $\epsilon=0.01$을 위해 약 17,000번의 샘플링이 필요합니다.

---

### 25. 윌슨 스코어 구간 (Wilson Score Interval)

![Wilson Score Slide](../post8/slide25.png)

*   **Wilson Score Interval**: $p$가 0이나 1에 가까울 때(Wald interval이 실패하는 경우) 더 강건한 신뢰 구간입니다.

---

### 26. 병렬성 & 도이치-조사

![Parallelism Title Slide](../post8/slide26.png)

양자 컴퓨터가 어떻게 정보를 병렬로 처리하는지에 대한 소개.

---

### 27. 양자 병렬성 (Quantum Parallelism)

![Quantum Parallelism Slide](../post8/slide27.png)

*   **개념**: 입력의 중첩 상태에 함수 $U_f$를 평가함으로써, 모든 가능한 출력의 중첩을 생성합니다.
    *   $|\psi\rangle = \frac{1}{\sqrt{2}}(|0\rangle|f(0)\rangle + |1\rangle|f(1)\rangle)$
*   하지만 한 번의 측정으로는 하나의 결과만 얻습니다. 전역적인 특성(보강 간섭 등)을 추출하는 알고리즘이 필요합니다.

---

### 28. 도이치 알고리즘 (Deutsch Algorithm)

![Deutsch Algorithm Slide](../post8/slide28.png)

*   **문제**: 함수 $f: \{0,1\} \rightarrow \{0,1\}$가 주어졌을 때, $f$가 **상수(Constant)** ($f(0)=f(1)$)인지 **균형(Balanced)** ($f(0) \neq f(1)$)인지 판별하라.
*   **이점**: 고전 컴퓨터는 2번의 쿼리가 필요하지만, 도이치 알고리즘은 단 **1번의 쿼리**만 필요합니다.

---

### 29. 도이치 알고리즘 단계 1

![Deutsch Derivation 1 Slide](../post8/slide29.png)

*   $|0\rangle|1\rangle$에서 시작하여 하다마드 게이트를 적용해 $|+\rangle|-\rangle$ 상태를 만듭니다.
*   오라클 $U_f$를 적용합니다. 위상 킥백 메커니즘(타겟이 $|-\rangle$이므로)에 의해 함수 값 $f(x)$가 첫 번째 큐비트의 위상으로 인코딩됩니다.

---

### 30. 도이치 알고리즘 결론

![Deutsch Derivation 2 Slide](../post8/slide30.png)

*   오라클 적용 후 첫 번째 큐비트에 다시 하다마드 게이트를 적용하면:
    *   $f$가 상수이면, $|0\rangle$이 측정됩니다.
    *   $f$가 균형이면, $|1\rangle$이 측정됩니다.
*   단 한 번의 단계로 $f$의 속성을 확실히 결정합니다.

---

### 31. 도이치-조사 알고리즘

![Deutsch-Jozsa Algorithm Slide](../post8/slide31.png)

*   **일반화**: 도이치 알고리즘을 $n$ 큐비트로 확장.
*   **문제**: 함수 $f: \{0,1\}^n \rightarrow \{0,1\}$.
    *   **상수**: 모든 입력에 대해 출력이 동일.
    *   **균형**: 절반의 입력에 대해 0, 나머지 절반에 대해 1 출력.
*   **이점**: 지수적 가속. 고전 최악의 경우 $2^{n-1}+1$회 호출. 양자 **1회 호출**.

---

### 32. 도이치-조사 알고리즘 유도 (1)

![Deutsch-Jozsa Derivation 1 Slide](../post8/slide32.png)

*   **단계 I**: 초기 상태 $|\psi_0\rangle = |0\rangle^{\otimes n} \otimes |1\rangle$.
*   **단계 II**: 모든 큐비트에 하다마드 게이트를 적용해 중첩 생성.
    *   $|\psi_1\rangle = \frac{1}{\sqrt{2^n}} \sum_{x=0}^{2^n-1} |x\rangle \left[ \frac{|0\rangle - |1\rangle}{\sqrt{2}} \right]$
*   **단계 III**: 오라클 $U_f$ 적용.
    *   $|\psi_2\rangle = \frac{1}{\sqrt{2^n}} \sum |x\rangle (-1)^{f(x)} \frac{|0\rangle - |1\rangle}{\sqrt{2}}$

---

### 33. 도이치-조사 알고리즘 유도 (2)

![Deutsch-Jozsa Derivation 2 Slide](../post8/slide33.png)

*   **단계 IV**: 다시 입력 큐비트들에 하다마드 게이트 적용.
*   **결론**:
    *   상태 $|0\rangle^{\otimes n}$ (모두 0)을 측정하면, 함수는 **상수**입니다 ($|0\rangle$에서 보강 간섭).
    *   그 외의 상태를 측정하면, 함수는 **균형**입니다 ($|0\rangle$에서 상쇄 간섭).

---

### 34. 인코딩 전략 (Encoding Strategies)

![Encoding Title Slide](../post8/slide34.png)

고전 데이터를 양자 시스템에 어떻게 표현할 것인가.

---

### 35. 기저 인코딩 (Basis Encoding)

![Basis Encoding Slide](../post8/slide35.png)

*   **기저 인코딩**: 고전 $n$-비트 문자열을 $n$ 큐비트의 계산 기저 상태로 직접 매핑.
    *   예: $x=0.1$ (이진수 $0.00...$) $\rightarrow |00...\rangle$.
*   **장점**: 이해하기 쉬움.
*   **단점**: 비효율적. $n$-비트 숫자에 $n$ 큐비트 필요. 단기(near-term) 알고리즘에서는 잘 쓰이지 않음.

---

### 36. 진폭 인코딩 (Amplitude Encoding)

![Amplitude Encoding Slide](../post8/slide36.png)

*   **진폭 인코딩**: 고전 벡터 $x$를 양자 상태의 진폭으로 인코딩 $|\psi_x\rangle = \sum x_i |i\rangle$.
*   **효율성**: $n$ 큐비트로 $2^n$개의 연속적인 값을 표현 가능 (로그 공간 복잡도).
*   **단점**: 정규화된 벡터($\sum |x_i|^2=1$) 필요. 상태 준비 회로가 깊어질 수 있음. 진폭을 비선형적으로 조작하기 어려움.

---

### 37. 시간 발전 인코딩 (Time-Evolution Encoding)

![Time-Evolution Encoding Slide](../post8/slide37.png)

*   **시간 발전 인코딩**: 실수 값 $x$를 유니타리 발전 연산자 $U(x) = e^{-ixH}$의 시간 파라미터 $t$로 인코딩.
*   파울리 회전 게이트와 자주 사용됨 (예: $R_x(x) = e^{-ixX/2}$).
*   파라미터화된 양자 회로(PQC)를 사용하는 양자 머신러닝(QML)에서 인기 있음.

---

### 38. 해밀토니안 인코딩 (Hamiltonian Encoding)

![Hamiltonian Encoding Slide](../post8/slide38.png)

*   **해밀토니안 인코딩**: 비-에르미트 행렬 $A$를 더 큰 에르미트 행렬 $H_A = \begin{pmatrix} 0 & A \\ A^\dagger & 0 \end{pmatrix}$로 인코딩.
*   양자 시뮬레이션 기술($U = e^{-iH_At}$)을 사용하여 임의의 행렬을 처리할 수 있게 함.

---

### 39. 인코딩 요약

![Encoding Summary Slide](../post8/slide39.png)

*   다양한 인코딩 전략 비교 시각화:
    *   **Basis**: 이진 문자열 $\rightarrow$ 기저 상태.
    *   **Amplitude**: 벡터 $\rightarrow$ 상태 진폭.
    *   **Hamiltonian**: 행렬 $\rightarrow$ 유니타리 지수.
    *   **Time-Evolution**: 스칼라 $\rightarrow$ 회전 각도/시간.

---

### 40. 양자 가속 (Quantum Speedups)

![Quantum Speedups Title Slide](../post8/slide40.png)

양자 이점의 종류와 기원을 이해하기.

---

### 41. Big-O 표기법

![Big-O Notation Slide](../post8/slide41.png)

*   **$\mathcal{O}(g(x))$**: 상한(Upper bound). 알고리즘이 아무리 느려도 이 정도다.
*   **$\Omega(g(x))$**: 하한(Lower bound). 알고리즘이 적어도 이만큼은 빠르다.
*   **$\Theta(g(x))$**: 타이트 바운드(Tight bound).

---

### 42. 양자 알고리즘 구현

![Quantum Algorithms Title Slide](../post8/slide42.png)

QML에서 사용되는 구체적인 서브루틴과 알고리즘을 살펴봅니다.

---

### 43. 중첩(Overlap) 측정

![Measuring Overlap Title Slide](../post8/slide43.png)

*   **목표**: 두 양자 상태 간의 중첩(유사도) $|\langle a | b \rangle|^2$ 또는 $\langle a | b \rangle$를 측정.
*   **방법**: 스왑 테스트(Swap Test), 하다마드 테스트, 반전 테스트.

---

### 44. 스왑 테스트 (1부)

![Swap Test 1 Slide](../post8/slide44.png)

*   **설정**: 두 상태 $|a\rangle, |b\rangle$와 상태 $|0\rangle$인 보조(ancilla) 큐비트.
*   **회로**: 보조 큐비트에 하다마드 $\rightarrow$ 제어 스왑(Fredkin) $\rightarrow$ 보조 큐비트에 하다마드.

---

### 45. 스왑 테스트 (2부)

![Swap Test 2 Slide](../post8/slide45.png)

*   **결과**: 보조 큐비트가 $|0\rangle$ 상태로 측정될 확률:
    *   $P(0) = \frac{1}{2} + \frac{1}{2} |\langle a | b \rangle|^2$
*   상태가 동일하면($|\langle a | b \rangle|=1$), $P(0)=1$.
*   상태가 직교하면($|\langle a | b \rangle|=0$), $P(0)=0.5$.

---

### 46. 하다마드 테스트 (실수부)

![Hadamard Test Real Slide](../post8/slide46.png)

*   **목표**: $\text{Re}(\langle a | b \rangle)$ 추정.
*   **설정**: 보조 큐비트 $|+\rangle$. 제어 유니타리 연산.
*   $P(0) = \frac{1}{2} + \frac{1}{2} \text{Re}(\langle a | b \rangle)$.

---

### 47. 하다마드 테스트 (허수부)

![Hadamard Test Imaginary Slide](../post8/slide47.png)

*   **목표**: $\text{Im}(\langle a | b \rangle)$ 추정.
*   **설정**: 보조 큐비트를 $|-\rangle = \frac{|0\rangle - i|1\rangle}{\sqrt{2}}$로 초기화.
*   $P(0) = \frac{1}{2} - \frac{1}{2} \text{Im}(\langle a | b \rangle)$.

---

### 48. 반전 테스트 (Inversion Test)

![Inversion Test Slide](../post8/slide48.png)

*   **방법**: $|a\rangle = A|0\rangle, |b\rangle = B|0\rangle$ 준비.
*   회로 $B^\dagger A |0\rangle$를 실행하고 $|0\rangle$ 확률 측정.
*   **결과**: $P(0) = |\langle 0 | B^\dagger A | 0 \rangle|^2 = |\langle b | a \rangle|^2$.

---

### 49. 그로버 검색 (Grover Search)

![Grover Search Slide](../post8/slide49.png)

*   **목표**: 크기 $N$의 정렬되지 않은 데이터베이스에서 표시된 항목 $\omega$ 찾기.
*   **가속**: 이차(Quadratic) 가속. $\mathcal{O}(\sqrt{N})$ vs 고전 $\mathcal{O}(N)$.
*   **구성 요소**: 오라클 $U_\omega$ (정답 표시) 및 확산기(Diffuser) $U_s$ (확률 증폭).

---

### 50. 그로버 검색 단계

![Grover Steps Slide](../post8/slide50.png)

1.  **초기화**: 균등 중첩 $|s\rangle$.
2.  **오라클**: 타겟 $|w\rangle$의 위상 반전.
3.  **확산기**: 평균을 중심으로 진폭 반전 (Inversion about probability mean).
4.  **반복**: 약 $\frac{\pi}{4}\sqrt{N}$ 회.
*   기하학적으로 이는 상태 벡터를 타겟 상태 $|\omega\rangle$ 쪽으로 회전시킵니다.

---

### 51. 그로버 검색 시각화

![Grover Visualization Slide](../post8/slide51.png)

*   **과정**:
    1.  **균등 중첩**: 모든 진폭이 동일.
    2.  **오라클**: 타겟 상태 진폭이 음수가 됨.
    3.  **확산기**: 평균에 대한 반전으로 타겟의 양의 진폭을 증폭.
    4.  **반복**: 진폭이 1에 가까워질 때까지 반복.

---

### 52. 위상 추정 (QFT)

![Phase Estimation QFT Slide](../post8/slide52.png)

*   **양자 푸리에 변환 (QFT)**: 이산 푸리에 변환(DFT)의 양자 유사체.
*   계산 기저 상태를 푸리에 기저 상태로 매핑합니다.

---

### 53. 위상 추정 (위상 추정하기)

![Phase Estimation 1 Slide](../post8/slide53.png)

*   **목표**: 유니타리 $U$와 고유벡터 $|\psi\rangle$ ($U|\psi\rangle = e^{2\pi i \theta}|\psi\rangle$)가 주어졌을 때, 위상 $\theta$를 추정.
*   **회로**:
    1.  보조 큐비트들을 중첩 상태로 준비.
    2.  제어-$U^{2^k}$ 게이트 적용.
    3.  위상을 보조 큐비트들의 상대적 위상으로 인코딩.

---

### 54. 위상 추정 (역 QFT)

![Phase Estimation 2 Slide](../post8/slide54.png)

*   **단계 IV**: 첫 번째 레지스터에 역 QFT ($QFT^{-1}$) 적용.
*   **측정**: 이를 통해 계산 기저에서 위상 $\theta$를 알아냅니다.
*   쇼어 알고리즘과 HHL의 핵심 서브루틴입니다.

---

### 55. 변분 양자 알고리즘 (VQA)

![VQA Slide](../post8/slide55.png)

*   **VQA**: NISQ(노이즈가 있는 중간 규모 양자) 장치에 적합한 하이브리드 양자-고전 알고리즘.
*   **메커니즘**:
    *   **Ansatz**: 훈련 가능한 파라미터 $\theta$를 가진 파라미터화된 양자 회로 $W(\theta)$.
    *   **비용 함수**: 양자 컴퓨터에서 측정 $C(\theta)$.
    *   **최적화기 (Optimizer)**: 고전 컴퓨터가 $C(\theta)$를 최소화하도록 $\theta$를 업데이트 (예: 경사 하강법).

---

### 56. 변분 양자 고유솔버 (VQE)

![VQE Slide](../post8/slide56.png)

*   **VQE**: 해밀토니안 $H$의 바닥 상태 에너지(최소 고유값)를 찾습니다.
*   **목표**: $C(\theta) = \langle \psi(\theta) | H | \psi(\theta) \rangle$ 최소화.
*   $H$는 파울리 문자열의 합으로 분해됩니다 $H = \sum h_j H_j$.

---

### 57. VQE 에너지 계산

![VQE Energy Slide](../post8/slide57.png)

*   기댓값은 시스템의 에너지에 해당합니다.
*   **양자 화학**에서 분자 에너지(전자 구조)를 시뮬레이션하는 데 널리 사용됩니다.

---

### 58. QAOA

![QAOA Slide](../post8/slide58.png)

*   **양자 근사 최적화 알고리즘 (QAOA)**:
*   조합 최적화 문제(예: MaxCut)를 해결하기 위해 설계된 VQA.
*   목적 함수는 만족된 절(clauses)의 수를 셉니다 $C(z) = \sum C_k(z)$.

---

### 59. 양자 어닐링 (Quantum Annealing)

![Quantum Annealing Title Slide](../post8/slide59.png)

양자 요동(fluctuation)을 이용한 최적화 기법.

---

### 60. 양자 어닐링 vs 열 어닐링

![Quantum Annealing Slide](../post8/slide60.png)

*   **열 어닐링 (Thermal Annealing)**: 열적 요동을 이용해 에너지 장벽을 넘습니다 (지역 최솟값에 갇힐 수 있음).
*   **양자 어닐링 (Quantum Annealing)**: **양자 터널링**을 이용해 에너지 장벽을 *통과*합니다. 전역 최적해를 더 효율적으로 찾을 가능성이 있습니다.

---

### 61. 향후 주제 (Future Topics)

![Future Topics Slide](../post8/slide61.png)

*   **알고리즘**: 양자 전송(Teleportation), HHL (선형 시스템), 쇼어 알고리즘 (소인수분해).
*   **머신러닝**: 커널 방법 (QSVM), 양자 PCA, 양자 경사 하강법.

---

### 62. 커널 방법 (Kernel Methods)

![Kernel Methods Slide](../post8/slide62.png)

*   **커널 트릭**: 데이터를 선형 분리가 가능할 수 있는 고차원 특징 공간으로 매핑.
*   $K(x, x') = \langle \phi(x), \phi(x') \rangle$.

---

### 63. 양자 커널 추정

![Quantum Kernel Slide](../post8/slide63.png)

*   양자 컴퓨터는 고전적으로 계산하기 어려운 커널을 추정할 수 있습니다.
*   **방법**:
    1.  데이터 $x, y$를 상태 $|\Phi(x)\rangle, |\Phi(y)\rangle$로 인코딩.
    2.  **스왑 테스트**를 사용해 중첩 $|\langle \Phi(x) | \Phi(y) \rangle|^2$ 측정.
    3.  이 값이 커널 항목 $K(x, y)$가 됨.
    4.  서포트 벡터 머신(QSVM)에 사용.

---

### 64. 참고문헌 (Reference)

![Reference Slide](../post8/slide64.png)

*   **논문**: *Supervised learning with quantum enhanced feature spaces* (Havlicek et al., Nature 2019).
*   양자 커널 방법의 기초 논문.
