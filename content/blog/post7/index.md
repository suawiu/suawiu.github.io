---
title: "ML with QC - Ch2 (English)"
subtitle: "A breakdown of Chapter 2 from 'Machine Learning with Quantum Computers'"
summary: "breakdown of Chapter 2 from 'Machine Learning with Quantum Computers"
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

This post summarizes **Chapter 2. Machine Learning** of the book *"Machine Learning with Quantum Computers"* (2nd Edition) by Maria Schuld and Francesco Petruccione.

---

### 1. Introduction

![Chapter 2 Machine Learning Title Slide](slide01.png)

Chapter 2 provides a comprehensive overview of machine learning concepts that form the basis for understanding Quantum Machine Learning. It covers the types of learning problems, the essential ingredients of learning, and various methods used in the field.

---

### 2. Contents

![Table of Contents Slide](slide02.png)

The chapter is structured into several key sections:
1.  **Examples of Typical Machine Learning Problems**: Understanding different problem types.
2.  **The Three Ingredients of a Learning Problem**: Process, Data, Model, and Loss.
3.  **Risk Minimization in Supervised Learning**: Cost functions and optimization.
4.  **Training in Unsupervised Learning**: Maximum likelihood estimation.
5.  **Methods in Machine Learning**: Linear models, Neural Networks, Graphical models, Kernel Methods.

---

### 3. Examples of Typical Machine Learning Problems

![Examples of Typical Machine Learning Problems Slide](slide03.png)

The field of machine learning can be broadly categorized based on the nature of the data and the learning objective.

---

### 4. Machine Learning Types

![Machine Learning Types Slide](slide04.png)

*   **Supervised Learning (X-Y)**: The algorithm learns from labeled data (input X, output Y). Examples include Regression and Classification.
*   **Unsupervised Learning (X-X)**: The algorithm finds patterns in unlabeled data. Examples include Clustering Analysis, Principal Component Analysis (PCA), and Association Rule Learning.
*   **Reinforcement Learning**: An agent learns an optimal strategy through trial and error by receiving rewards or punishments based on its decisions. Examples are AlphaGo and autonomous cars.

---

### 5. The Three Ingredients of a Learning Problem

![The Three Ingredients of a Learning Problem Slide](slide05.png)

Any machine learning problem can be described using these core components:
*   **Process**: The data-generating process or the underlying phenomenon we want to model.
*   **Data**: The observations we have collected from the process.
*   **Model**: The mathematical structure we use to approximate the process.
*   **Loss**: A function that measures how well the model predicts or fits the data.

---

### 6. Process

![Process Slide](slide06.png)

The machine learning process involves a series of steps:
1.  **Data Collection**: Gathering raw data.
2.  **Data Preprocessing**: Cleaning and formatting the data.
3.  **Feature Selection and Extraction**: Identifying the most relevant variables.
4.  **Data Splitting**: Dividing data into training and testing sets.
5.  **Model Selection**: Choosing the appropriate algorithm.
6.  **Model Training & Hyperparameter Tuning**: Teaching the model and optimizing its settings.
7.  **Model Deployment and Prediction**: Using the model in a real-world environment.

---

### 7. Data: Preprocessing - Feature Scaling

![Data Preprocessing - Feature Scaling Slide](slide07.png)

Scaling ensures that all features contribute equally to the result.
*   **Z-Score scaling (Standardization)**: Transforms data to have a mean of 0 and a variance of 1.
*   **Min-Max scaling (Normalization)**: Scales data to a fixed range, typically [0, 1].
*   **Max-Abs scaling**: Scales data based on the absolute maximum value.
*   **Robust scaling**: Uses the median and interquartile range (IQR) to be robust against outliers.

---

### 8. Data: Preprocessing - Dimensionality Reduction

![Data Preprocessing - Dimensionality Reduction Slide](slide08.png)

Reducing the number of input variables can improve model performance and reduce computation.
*   **Feature Selection**: Selecting a subset of relevant features (e.g., mRMR, SVM-RFE).
*   **Feature Extraction**: Creating new features from existing ones (e.g., PCA, Autoencoder).
*   **Feature Engineering**: Using domain knowledge to create features that make machine learning algorithms work better.

---

### 9. Data: Preprocessing - One-Hot Encoding

![Data Preprocessing - One-Hot Encoding Slide](slide09.png)

*   **One-Hot Encoding**: Converts categorical variables into a binary matrix format (0s and 1s), making them suitable for machine learning algorithms.
*   Other methods include Target Encoding and Ordered Target Encoding.

---

### 10. Model: Deterministic vs. Probabilistic

![Model Types Slide](slide10.png)

Models can be categorized by how they handle uncertainty:
*   **Deterministic Model**: The output is fully determined by the initial conditions and parameters. No randomness is involved (e.g., physical laws like $F=ma$).
*   **Probabilistic Model**: Incorporates randomness. Instead of a single output, it provides a probability distribution over possible outcomes. This is crucial when dealing with noisy data or inherent uncertainty.

---

### 11. Model: Deterministic vs. Statistical

![Model Types Detailed Slide](slide11.png)

While the previous slide introduced the concept, this slide formally contrasts two types of models:
*   **Deterministic Model**: Assumes a precise relationship where $Y = X\beta$ . It essentially states that if you know the input $X$ and the parameters $\beta$, you can determine $Y$ exactly.
*   **Statistical Model**: Acknowledges that the world is noisy. It models the relationship as $Y = X\beta + \epsilon$ , where $\epsilon$ represents the error term (often assumed to be normally distributed, $\epsilon \sim N(0, \sigma^2)$ ). This accounts for the variability we see in real-world data.

---

### 12. Loss: Classification

![Loss Classification Slide](slide12.png)

For classification problems (where the output is a category), we evaluate performance differently:
*   **Confusion Matrix**: A table that describes the performance of a classification model (True Positives, False Positives, etc.).
*   **Metrics**: Derived from the confusion matrix, including **Accuracy**, **Specificity**, **Recall**, **Precision**, and **F1 score**.
*   **Loss Functions**:
    *   **Hinge Loss**: Often used for "maximum-margin" classification, most notably for support vector machines (SVMs).
    *   **Logistic Loss**: Used in logistic regression.
    *   **Cross-entropy Loss**: Measures the performance of a classification model whose output is a probability value between 0 and 1.

---

### 13. Loss: Regression

![Loss Regression Slide](slide13.png)

For regression problems (predicting a continuous value), common loss functions include:
*   **MAE (Mean Absolute Error)**: The average of the absolute differences between predictions and actual values.
*   **MSE (Mean Squared Error)**: The average of the squared differences. Penalizes larger errors more heavily.
*   **RMSE (Root Mean Squared Error)**: Square root of MSE, which makes the scale of errors the same as the target variable.
*   **MAPE (Mean Absolute Percentage Error)**: Measures prediction accuracy as a percentage.

---

### 14. Risk Minimization in Supervised Learning

![Risk Minimization Title Slide](slide14.png)

The core goal of supervised learning is **Risk Minimization**. This involves two key concepts:
*   **Cost Function**: A mathematical formula that quantifies the error between predicted and actual values.
*   **Optimization**: The process of adjusting the model parameters to minimize the cost function.

---

### 15. Cost Function & Regularization

![Cost Function Slide](slide15.png)

*   **Risk Minimization Problem**: We want to find the optimal parameters $\theta^*$ that minimize the empirical risk $\hat{R}_{f_\theta}$.
*   **Overfitting**: This occurs when a model learns the training data *too* well, including its noise and outliers, resulting in poor performance on new, unseen data.
*   **Regularization**: Techniques used to prevent overfitting.
    *   Choosing a less flexible model.
    *   Stopping training early.
    *   Pruning parameters (setting them to zero).
    *   Adding a **regularization term** to the **cost function**.
*   **Final Cost Function**: $C(\theta) = \hat{R}_{f_\theta} + g(f_\theta)$ , where $\hat{R}$ is the risk (error) and $g$ is the regularization term.

---

### 16. Cost Function Examples: Regularization

![Cost Function Examples Slide](slide16.png)

Common regularization techniques involve adding a penalty term to the cost function:
*   **Ridge Regression ($\ell_2$)**: Adds the sum of squared coefficients.
    *   $g_{\ell_2}(\theta) = \sum \theta_i^2$
*   **Lasso Regression ($\ell_1$)**: Adds the sum of the absolute values of coefficients. This can drive some coefficients to exactly zero, performing feature selection.
    *   $g_{\ell_1}(\theta) = \sum |\theta_i|$
*   **Elastic-Net**: Combines both $\ell_1$ and $\ell_2$ penalties.
    *   Adds $\lambda_1 \sum |\theta_i| + \lambda_2 \sum \theta_i^2$

---

### 17. Optimization: Gradient Descent

![Gradient Descent Optimization Slide](slide17.png)

Optimization algorithms are used to find the parameters that minimize the cost function.
*   **Gradient Descent (GD)**: Uses the entire dataset to calculate the gradient and update parameters.
    *   $\theta^{(t+1)} = \theta^{(t)} - \eta \nabla C(\theta^{(t)})$
    *   **Pros**: Stable convergence.
    *   **Cons**: Slow on large datasets; can get stuck in local minima.
*   **Stochastic Gradient Descent (SGD)**: Updates parameters using a single random data point at a time.
    *   **Pros**: Faster; improved ability to escape local minima.
    *   **Cons**: Noisier convergence path (variable updates).

---

### 18. Mini-batch Gradient Descent

![Mini-batch Gradient Descent Slide](slide18.png)

*   **Mini-batch Gradient Descent**: A compromise between Batch GD and SGD.
    *   It processes data in small groups (batches) of size $n$ .
    *   It offers more stable convergence than SGD and is more computationally efficient than Batch GD, effectively utilizing matrix operations.

---

### 19. Overfitting vs. Underfitting

![Overfitting and Underfitting Visuals Slide](slide19.png)

This slide visualizes the concepts of underfitting and overfitting using a regression example and a decision tree:
*   **Model A (Underfitting)**: The model is too simple (a straight line) to capture the underlying pattern of the data. It has high correlation bias.
*   **Model B**: The model fits the data well, capturing the trend without chasing every noise point.
*   **Model C (Overfitting)**: The model is too complex and fits the noise in the training data, leading to poor generalization.

---

### 20. VC (Vapnik-Chervonenkis) Dimension

![VC Dimension Slide](slide20.png)

The **VC Dimension** measures the capacity (complexity) of a statistical classification algorithm.
*   **Concept**: It answers "How complex a dataset can this model classify?"
*   **Risk Bound**: It provides a theoretical upper bound on the test error (risk).
    *   $\mathcal{R}_{f_\theta} \leq \hat{\mathcal{R}}_{f_\theta} + \sqrt{\frac{1}{M} \left( d_{VC} \left( \log \left( \frac{2M}{d} \right) + 1 \right) + \log \left( \frac{4}{\delta} \right) \right)}$
    *   This formula shows that as the VC dimension ($d_{VC}$) increases (model becomes more complex), the gap between training error ($\hat{\mathcal{R}}$) and true risk ($\mathcal{R}$) can widen, increasing the chance of overfitting.

---

### 21. Training in Unsupervised Learning

![Training in Unsupervised Learning Slide](slide21.png)

*   **Maximum Likelihood Estimation (MLE)**: A common method used in training unsupervised learning models.

---

### 22. Maximum Likelihood Estimation (Math)

![Maximum Likelihood Estimation Math Slide](slide22.png)

**Likelihood** refers to the probability of observing a given set of data under a specific model.
*   **Likelihood Function**: $L(\Theta|x_1, ..., x_n)$
*   **Joint Probability Density**: $f(x_1, ..., x_n|\Theta) = f(x_1|\Theta)...f(x_n|\Theta)$ (assuming independence)
*   **MLE Goal**: Find the parameter values $\hat{\Theta}$ that maximize this likelihood function, making the observed data most probable.
    *   $\hat{\Theta} = argmax_\Theta L(\Theta)$
    *   In practice, we often maximize the **log-likelihood** because it turns products into sums, making derivatives easier to compute:
    *   $L^*(\Theta) = \log(L(\Theta)) = \sum \log f(x_i)$

---

### 23. Maximum Likelihood Estimation (Visual)

![Maximum Likelihood Estimation Graph Slide](slide23.png)

This graph visualizes MLE. We try to fit a distribution (like a Gaussian) to the data points (orange dots).
*   The blue curve represents a model with parameters that don't fit well (low likelihood).
*   The orange curve fits the data better (higher likelihood). MLE searches for the curve that fits the data "best".

---

### 24. Methods in Machine Learning

![Methods in Machine Learning Slide](slide24.png)

Common methods include:
*   **Linear Models**: Simple, interpretable models (e.g., Linear Regression, Logistic Regression).
*   **Neural Networks**: Powerful models inspired by biological neurons, capable of learning complex patterns.
*   **Graphical Models**: Models that express the conditional dependence structure between random variables (e.g., Bayesian Networks).
*   **Kernel Methods**: Algorithms that use kernel functions to operate in a high-dimensional feature space (e.g., SVM).

---

### 25. Linear Models

![Linear Models Slide](slide25.png)

*   **Sigmoid Function**: A key component in linear classification (like Logistic Regression) and neural networks.
    *   $\sigma(x) = \frac{1}{1 + e^{-x}}$
    *   It maps any real-valued input number into a value between 0 and 1, essentially converting a continuous value into a probability (binary output).

---

### 26. Linear Models: Least Squares & SVD

![Linear Models Least Squares Slide](slide26.png)

*   **Linear Regression Model**: $f_w(x) = w^Tx$
*   **Least-squares Estimation**: Finds the optimal weights $w$ by minimizing the sum of squared differences between predictions and actual values.
    *   $C(w) = \frac{1}{M} \sum (w^Tx^m - y^m)^2$
    *   **Analytical Solution**: The optimal weights can be calculated directly using the formula $w_{opt} = (X^TX)^{-1}X^Ty$.
*   **Singular Value Decomposition (SVD)**: A method to decompose a matrix, often used to calculate the pseudo-inverse ($X^+$) when solving linear least squares problems, providing a numerically stable solution.

---

### 27. Linear Models: MSE

![Linear Models MSE Slide](slide27.png)

*   **Mean Squared Error (MSE)**: The standard cost function for regression problems.
    *   $MSE = \frac{1}{n} \sum (y - \hat{y})^2$
    *   It measures the average squared difference between the estimated values ($\hat{y}$) and the actual value ($y$).

---

### 28. Neural Networks: Perceptron & MLP

![Neural Networks Perceptron Slide](slide28.png)

*   **Perceptron**: The simplest artificial neuron. It takes multiple inputs ($x$), multiplies them by weights ($w$), sums them up, and passes the result through an activation function to produce an output.
*   **Multi-Layer Perceptron (MLP)**: An acyclic feed-forward neural network composed of multiple layers of perceptrons (input, hidden, and output layers).
    *   $f(x) = \phi_L(W_L ... \phi_2(W_2 \phi_1(W_1 x))...)$
    *   It can learn non-linear relationships thanks to the activation functions and multiple layers.

---

### 29. Neural Networks: Activation Functions

![Neural Networks Activation Function Slide](slide29.png)

Activation functions introduce non-linearity into the network, allowing it to learn complex patterns.
*   **Sigmoid**: $\sigma(x) = \frac{1}{1+e^{-x}}$. Output range (0, 1). Smoothes the step function.
*   **ReLU (Rectified Linear Unit)**: $\phi(a) = \max(0, a)$. Output range [0, $\infty$). Solves the vanishing gradient problem and is computationally efficient.
*   **Tanh (Hyperbolic Tangent)**: $\phi(a) = \tanh(a)$. Output range (-1, 1). Zero-centered.

---

### 30. Neural Networks: Backpropagation

![Neural Networks Update Backpropagation Slide](slide30.png)

*   **Backpropagation**: The algorithm used to train neural networks.
    *   It efficiently calculates the gradient of the loss function ($E$) with respect to each weight ($w$) in the network.
    *   **Chain Rule**: The core mathematical principle behind backpropagation. It allows us to compute the derivative of a composite function by multiplying the derivatives of its constituent functions.
    *   $\frac{\partial E}{\partial w} = \frac{\partial E}{\partial y} \cdot \frac{\partial y}{\partial h} \cdot \frac{\partial h}{\partial w}$
    *   Weights are updated to minimize the error: $w^{new} = w - \eta \frac{\partial E}{\partial w}$

### 31. Graphical Models: Bayesian Networks

![Graphical Models: Bayesian Networks Slide](slide31.png)

*   **Bayesian Networks (Directed Graphical Models)**: Represent causal relationships between variables using a directed acyclic graph (DAG).
    *   Nodes represent random variables.
    *   Edges represent conditional dependencies ($A \rightarrow B$ implies $B$ depends on $A$).
    *   The joint probability distribution factorizes as: $p(x_1, ..., x_N) = \prod_{i=1}^N p(x_i | parent(x_i))$

---

### 32. Undirected Graphical Models

![Undirected Graphical Models Slide](slide32.png)

*   **Markov Random Fields (Undirected Graphical Models)**: Represent dependencies where the direction is not specified (e.g., spatial correlation in pixels).
    *   Based on the concept of **cliques** (fully connected subgraphs).
    *   The joint probability is defined by potential functions $\psi_C$ over maximal cliques $C$:
    *   $p(x) = \frac{1}{Z} \prod_{C} \psi_C(x_C)$
    *   $Z$ is the partition function (normalization constant), which is often hard to compute.

---

### 33. Sampling Inference

![Sampling Inference Slide](slide33.png)

Inference involves estimating parts of the probability distribution (e.g., $p(x_i | x_j)$). Exact inference can be computationally expensive.
*   **Sampling (Monte Carlo Methods)**: Approximates the distribution by generating many random samples.
*   **Gibbs Sampling**: A Markov Chain Monte Carlo (MCMC) algorithm where we iteratively sample each variable from its conditional distribution given the current integration of other variables.
*   It is rigorous but slow to converge.

---

### 34. Variational Inference

![Variational Inference Slide](slide34.png)

*   **Variational Inference**: An alternative to sampling that frames inference as an optimization problem.
    *   It approximates the complex true distribution $p(x)$ with a simpler, tractable distribution $q(x)$ (e.g., a set of independent Gaussians).
    *   **Goal**: Minimize the difference (KL Divergence) between $q(x)$ and $p(x)$, or equivalently, maximize the Evidence Lower Bound (ELBO).
    *   It is faster than sampling but may be biased due to the approximation.

---

### 35. Kernel Methods

![Kernel Methods Slide](slide35.png)

*   **Kernel Methods**: A class of algorithms for pattern analysis, with the **Support Vector Machine (SVM)** being the most famous.
*   They work by mapping data into a high-dimensional features space where the problem (e.g., classification) becomes linearly separable.
*   They rely on **linear models** in this new space.

---

### 36. Kernel Trick

![Kernel Trick Slide](slide36.png)

*   **Feature Map ($\Phi$)**: Maps the input data $x$ from the original space ($\mathcal{X}$) to a high-dimensional feature space ($\mathcal{F}$).
    *   $x \rightarrow \Phi(x)$
*   **The Kernel Trick**: We can compute the inner product in the high-dimensional space *without* explicitly calculating the coordinates in that space.
    *   $K(x, x') = \langle \Phi(x), \Phi(x') \rangle_{\mathcal{F}}$
    *   This saves immense computational cost.

---

### 37. Kernel Trick Math

![Kernel Trick Math Slide](slide37.png)

*   The kernel function $K(x, x')$ computes the similarity between two inputs.
*   Common Kernels:
    *   **Linear**: $K(x, x') = x^T x'$
    *   **Polynomial**: $K(x, x') = (x^T x' + c)^d$
    *   **RBF (Radial Basis Function)**: $K(x, x') = \exp(-\frac{||x-x'||^2}{2\sigma^2})$
*   This allows linear algorithms (like linear regression) to learn non-linear decision boundaries.

---

### 38. Representer Theorem

![Representer Theorem Slide](slide38.png)

*   **Representer Theorem**: States that for a broad class of regularized risk minimization problems, the optimal solution $f^*(x)$ can be expressed as a linear expansion of the kernel functions evaluated at the training data points.
    *   $f^*(x) = \sum_{m=1}^M \alpha_m K(x, x^m)$
    *   This reduces the optimization problem from infinite dimensions (in feature space) to a finite number of parameters ($\alpha_m$, one for each data point).

---

### 39. Kernel Ridge Regression

![Kernel Ridge Regression Slide](slide39.png)

*   **Kernel Ridge Regression**: Applies the kernel trick to Ridge Regression.
*   Instead of finding a weight vector $w$, we find the coefficients $\alpha$.
*   The solution involves the **Kernel Matrix** (or Gram Matrix) $K$, where $K_{ij} = K(x^i, x^j)$.
    *   $\alpha = (K + \lambda I)^{-1} y$
*   The prediction for a new point $x$ is $f(x) = \sum \alpha_m K(x, x^m)$.

---

### 40. Support Vector Machines (SVM)

![Support Vector Machines Slide](slide40.png)

*   **SVM**: A powerful supervised learning algorithm used for classification and regression.
*   **Goal**: Find the optimal hyperplane that separates data points of different classes with the maximum margin.
*   **Support Vectors**: The data points closest to the hyperplane. These are the most critical points; changing other points doesn't affect the model.

---

### 41. SVM Optimization

![SVM Optimization Slide](slide41.png)

*   **Primal Problem**: Minimize $\frac{1}{2} ||w||^2$ subject to constraints $y_i(w^T x_i + b) \geq 1$.
*   **Dual Problem**: Using Lagrange multipliers, we convert this into a maximization problem involving only inner products ($x_i^T x_j$).
    *   Maximize $\sum \alpha_i - \frac{1}{2} \sum \alpha_i \alpha_j y_i y_j x_i^T x_j$
    *   This formulation naturally allows the use of the **Kernel Trick**.

---

### 42. SVM Margin

![SVM Margin Slide](slide42.png)

*   **Margin**: The distance between the hyperplane and the nearest data points (support vectors).
*   **Hard Margin**: Assumes the data is perfectly separable. Sensitive to outliers.
*   **Soft Margin**: Allows some misclassification (using slack variables $\xi$) to create a more robust model. The parameter $C$ controls the trade-off between maximizing the margin and minimizing classification errors.

---

### 43. Kernel SVM

![Kernel SVM Slide](slide43.png)

*   Other linear algorithms can also be "kernelized".
*   **Kernel SVM**: By replacing the dot product $x_i^T x_j$ with a kernel function $K(x_i, x_j)$, SVM can find a linear hyperplane in a high-dimensional feature space, which corresponds to a non-linear decision boundary in the original input space.
*   This makes SVM highly effective for complex, non-linear datasets.

---

### 44. Summary of Chapter 2

![Summary Slide](slide44.png)

*   Machine learning involves **data**, a **model**, and a **loss function**.
*   We aim to minimize the expected risk (test error), often by minimizing the empirical risk (training error) plus a regularization term.
*   **Supervised learning** builds models from labeled data (e.g., Linear Regression, SVM).
*   **Unsupervised learning** finds structure in unlabeled data (e.g., Clustering).
*   **Kernel methods** allow linear models to solve non-linear problems efficiently.

---

### 45. Quantum Machine Learning (QML)

![Quantum Machine Learning Slide](slide45.png)

*   **QML**: The intersection of Quantum Computing and Machine Learning.
*   It investigates how quantum computers can help specific machine learning tasks and how machine learning methods can help analyze quantum systems.
*   **Key Idea**: Quantum computers process information in a fundamentally different way (superposition, entanglement), potentially offering speedups or better models for certain problems.

---

### 46. QML Potential

![QML Potential Slide](slide46.png)

*   **Speedup**: Potential for polynomial or exponential speedups in training or inference (e.g., using HHL algorithm for linear algebra).
*   **Expressivity**: Quantum models (like Variational Quantum Circuits) might be able to capture complex correlations in data that are hard for classical neural networks to model.
*   **Quantum Data**: QML is naturally suited for learning from quantum data (e.g., classifying states of matter).

---

### 47. QML Challenges

![QML Challenges Slide](slide47.png)

*   **Data Loading**: Encoding classical data into a quantum state is often a bottleneck.
*   **Noise (NISQ)**: Current quantum devices are noisy and have limited coherence times.
*   **Barren Plateaus**: Training quantum neural networks can suffer from vanishing gradients, making optimization difficult.

---

### 48. Future of QML

![Future of QML Slide](slide48.png)

*   **Hybrid Algorithms**: Combining classical and quantum processors (e.g., VQE, QAOA) is the most promising near-term approach.
*   **Quantum Kernels**: Using quantum computers to estimate kernels that are hard to compute classically.
*   **Discovery**: As hardware improves, we expect to discover new quantum algorithms for ML that we haven't even imagined yet.

---

### 49. Conclusion

![Conclusion Slide](slide49.png)

*   Machine learning provides a robust framework for understanding data.
*   Integrating these concepts with quantum mechanics opens up a new frontier in computation.
*   Understanding the classical foundations (kernels, optimization, regularization) is essential for developing effective quantum machine learning algorithms.

--- 

### 50. Appendix: QML Libraries

![QML Libraries Slide](slide50.png)

*   **Key Libraries**:
    *   **PennyLane (Xanadu)**: A cross-platform Python library for differentiable programming of quantum computers.
    *   **Qiskit (IBM)**: An open-source framework for working with noisy quantum computers at the level of pulses, circuits, and application modules.
    *   **TensorFlow Quantum (Google)**: A library for hybrid quantum-classical machine learning.
    *   **TorchQuantum**: A PyTorch-based library for quantum machine learning.

---

### 51. Appendix: Quantum vs Classical NN

![Classical vs Quantum NN Slide](slide51.png)

*   **Classical Neural Networks**:
    *   Deterministic transformations (matrices).
    *   Non-linear activation functions.
    *   Parameters: Weights and Biases.
*   **Quantum Neural Networks (QNN)**:
    *   Unitary transformations (gates).
    *   Linearity in state space, but measurement introduces non-linearity (or non-linear data encoding).
    *   Parameters: Gate rotation angles.

---

### 52. Appendix: Data Encoding

![Data Encoding Slide](slide52.png)

*   **Basis Encoding**: Encodes binary inputs directly into basis states (e.g., $101 \rightarrow |101\rangle$). Efficient for simple data but requires many qubits.
*   **Amplitude Encoding**: Encodes $N$ continuous variables into the amplitudes of $\log_2 N$ qubits. High density but hard to prepare.
*   **Angle Encoding**: Encodes variables into the rotation angles of qubits. Simple and widely used in Variational Quantum Circuits.

---

### 53. Appendix: Variational Quantum Algorithms

![VQA Slide](slide53.png)

*   **VQA**: A class of hybrid algorithms that use a classical optimizer to train a parameterized quantum circuit.
*   **Components**:
    *   **Ansatz**: A template circuit with tunable parameters.
    *   **Cost Function**: Measured from the quantum output.
    *   **Optimizer**: Classical algorithm (e.g., Adam, Cobyla) that updates the parameters.

---

### 54. Appendix: Quantum Kernels

![Quantum Kernels Slide](slide54.png)

*   **Quantum Kernel Estimation**: We can use a quantum computer to estimate the kernel entry $K(x, x') = |\langle \Phi(x) | \Phi(x') \rangle|^2$.
*   Since the feature map $\Phi(x)$ is performed by the quantum circuit, it can access a Hilbert space that is exponentially large and potentially hard to simulate classically.

---

### 55. Appendix: References 1

![References 1 Slide](slide55.png)

*   **Foundational Papers**:
    *   Schuld, M., & Petruccione, F. (2021). *Machine Learning with Quantum Computers*.
    *   Biamonte, J., et al. (2017). *Quantum machine learning*. Nature.
    *   Havlíček, V., et al. (2019). *Supervised learning with quantum-enhanced feature spaces*. Nature.

---

### 56. Appendix: References 2

![References 2 Slide](slide56.png)

*   **Further Reading**:
    *   Mitarai, K., et al. (2018). *Quantum circuit learning*. Physical Review A.
    *   Farhi, E., & Neven, H. (2018). *Classification with quantum neural networks on near term processors*.

---

### 57. Appendix: Q&A

![Q&A Slide](slide57.png)

*   **Discussion Points**:
    *   What are the nearest-term applications?
    *   How do we handle noise in real hardware?
    *   Comparison of different QML frameworks.

---

### 58. Thank You

![Thank You Slide](slide58.png)

*   Thank you for your attention.
*   **Contact**: [suawiu@gmail.com](mailto:suawiu@gmail.com)
*   **Blog**: [suawiu.github.io](https://suawiu.github.io)
