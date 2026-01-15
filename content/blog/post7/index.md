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

---

### 31. Graphical Models: Bayesian Networks

![Slide 31](slide31.png)

---

### 32. Undirected Graphical Models

![Slide 32](slide32.png)

---

### 33. Sampling Inference

![Slide 33](slide33.png)

---

### 34. Variational Inference

![Slide 34](slide34.png)

---

### 35. Kernel Methods

![Slide 35](slide35.png)

---

### 36. Kernel Trick

![Slide 36](slide36.png)

---

### 37. Kernel Trick Math

![Slide 37](slide37.png)

---

### 38. Representer Theorem

![Slide 38](slide38.png)

---

### 39. Kernel Ridge Regression

![Slide 39](slide39.png)

---

### 40. Support Vector Machines

![Slide 40](slide40.png)

---

### 41. SVM Optimization

![Slide 41](slide41.png)

---

### 42. SVM Margin

![Slide 42](slide42.png)

---

### 43. Kernel SVM

![Slide 43](slide43.png)

---

### 44. Summary

![Slide 44](slide44.png)

---

### 45. Quantum Machine Learning

![Slide 45](slide45.png)

---

### 46. QML Potential

![Slide 46](slide46.png)

---

### 47. QML Challenges

![Slide 47](slide47.png)

---

### 48. Future of QML

![Slide 48](slide48.png)

---

### 49. Conclusion

![Slide 49](slide49.png)

--- 

### 50. Slide 50

![Slide 50](slide50.png)

--- 

### 51. Slide 51

![Slide 51](slide51.png)

--- 

### 52. Slide 52

![Slide 52](slide52.png)

--- 

### 53. Slide 53

![Slide 53](slide53.png)

--- 

### 54. Slide 54

![Slide 54](slide54.png)

--- 

### 55. Slide 55

![Slide 55](slide55.png)

--- 

### 56. Slide 56

![Slide 56](slide56.png)

--- 

### 57. Slide 57

![Slide 57](slide57.png)

--- 

### 58. Slide 58

![Slide 58](slide58.png)
