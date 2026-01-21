# Asymptotic Notations

## Introduction
Asymptotic Notations are a **mathematical way of representing the time and space complexity** of an algorithm.  
They help us analyze how an algorithm performs as the **input size grows**, without focusing on machine-dependent constants.

There are **five major asymptotic notations**.

---

## 1. Big O Notation (O)

### Definition
Big O notation represents the **worst-case time complexity** of an algorithm.

### Key Points
- Most **frequently used** notation
- Describes the **upper bound** (maximum time taken)
- Helps in **guaranteeing performance**
- Used when we want to know the **maximum time** an algorithm may take

### Example
```
O(1)   → Constant Time  
O(n)   → Linear Time  
O(n²)  → Quadratic Time  
```

---

## 2. Big Omega Notation (Ω)

### Definition
Big Omega notation represents the **best-case time complexity** of an algorithm.

### Key Points
- Describes the **lower bound** (minimum time taken)
- Shows the **best possible performance**
- Useful for understanding **optimal scenarios**

### Example
```
Ω(1)   → Best case constant time  
Ω(n)   → Best case linear time  
```

---

## 3. Big Theta Notation (Θ)

### Definition
Big Theta notation represents the **average or exact time complexity** of an algorithm.

### Key Points
- Describes both **upper and lower bounds**
- Provides a **tight bound**
- Used when best and worst cases grow at the same rate

### Example
```
Θ(n)   → Linear time in all cases  
Θ(n²)  → Quadratic time in all cases  
```

---

## 4. Little o Notation (o)

### Definition
Little o notation represents an **upper bound that is not tight**.

### Key Points
- Algorithm grows **strictly slower** than the given bound
- Used for **theoretical comparisons**
- Less commonly used in practice

### Example
```
n = o(n²)
```

---

## 5. Little omega Notation (ω)

### Definition
Little omega notation represents a **lower bound that is not tight**.

### Key Points
- Algorithm grows **strictly faster** than the given bound
- Mostly used in **algorithm research**
- Rare in practical coding interviews

### Example
```
n² = ω(n)
```

---

## Comparison Table

| Notation | Meaning        | Case Type     |
|--------|----------------|--------------|
| O      | Upper Bound    | Worst Case   |
| Ω      | Lower Bound    | Best Case    |
| Θ      | Tight Bound    | Average Case |
| o      | Loose Upper    | —            |
| ω      | Loose Lower    | —            |

---

## Why Asymptotic Analysis?
- Machine independent
- Helps compare algorithms
- Predicts scalability
- Essential for interviews & system design

---

## Conclusion
Asymptotic notations allow us to **analyze and compare algorithms efficiently**.  
Among all, **Big O notation** is the most widely used in real-world applications and interviews.
