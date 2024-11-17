# Blackjack Card Game Implementation

A step-by-step guide to building a simplified Blackjack game implementation.

## Step 1: Basic Winner Determination
- Implement a function that accepts two string arrays
- Arrays represent player and dealer card numbers
- Example input: `["2", "7"]`
- Return winning hand array and total

## Step 2: Bust Condition
- Enhance function to check for bust (> 21)
- Handle cases where both players bust
- Return format: `[hand, total]` or bust message

## Step 3: Face Cards
- Add support for J, Q, K cards
- All face cards value: 10
- Update winner determination logic

## Step 4: Ace Handling
- Implement Ace card logic
- Ace values: 1 or 11
- Choose value based on optimal hand outcome
- Prevent bust when possible