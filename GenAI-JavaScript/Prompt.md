# Prompting Techniques

A summary of the prompting strategies and design patterns used in this codebase:

## 1. Zero-Shot Prompting
* **Definition**: Direct instruction given to the model without any examples of the expected output. The model relies entirely on its pre-trained knowledge to perform the task.
* **Example**:
  ```text
  "Tell me what is 2 + 2"
  ```

## 2. Few-Shot Prompting
* **Definition**: Direct instruction accompanied by one or more examples showing the desired input/output format and style. This heavily influences and guides the model's output formatting.
* **Example**:
  ```text
  "What is 5 + 4?"
  Expected output format: 9 (Nine)
  ```

## 3. Chain-of-Thought (CoT) Prompting
* **Definition**: Instructing the model to break down a complex problem step-by-step (e.g., INITIAL -> THINK -> ANALYSE) and verify its intermediate steps before outputting the final result.
* **Example**: Breaking down a BODMAS math equation or simulating a tool execution loop before arriving at the final output.

## 4. Role-Play Prompting
* **Definition**: Assigning a specific persona, background, traits, and strict behavioral constraints to the model (e.g., "Senior Software Developer who only speaks in technical jargon and has no personal life").
* **Example**: Defining professional persona constraints to dictate output style, vocabulary, and answer filtering boundaries.

## 5. Multi-Party Group Chat / Collaboration Prompting
* **Definition**: Instructing the model to coordinate and participate in a conversation involving multiple distinct users or personas (each identified by their role or a `name` attribute in the message history). The agent can orchestrate tasks, fetch data requested by different team members, and merge their queries into unified insights.
* **Example**: Chatting simultaneously with `Alice_Marketer` and `Bob_Analyst` while fetching sentiment analysis data from Twitter/X and YouTube to resolve their respective branding and technical queries.