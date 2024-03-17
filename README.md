# odin-rock_paper_scisors

Project for The Odin Project page
----------------------------------
Web console game. 
Based on instructuion on page The Odin Project I build this web console javascript game
First I try solve it on paper with pseudocode, than I wrote this pseudocode
into vsCode and based on this wrote JS code.
I try to implemet idea from The Odin project - CODE IS THERE TO EXPLAIN COMMENTS TO COMPUTER


-------------------------------------
Readme generated by github copilot

This is a simple implementation of the classic game Rock, Paper, Scissors in JavaScript.

## How it works

The game is played between a user and the computer. The computer's choice is generated randomly. The user's choice is inputted through a function call.

The game logic is as follows:

- If the computer chooses "rock", it wins if the user chooses "scissors", otherwise the user wins.
- If the computer chooses "paper", it wins if the user chooses "rock", otherwise the user wins.
- If the computer chooses "scissors", it wins if the user chooses "paper", otherwise the user wins.

The game is played in rounds, and the score is kept track of using the `userPointCount` and `pcPointCount` variables. The game continues until 5 rounds have been played, as controlled by the `gamesPlayed` variable in the `playGame` function.

## How to use

To play the game, call the `playGame` function. The user's choice should be passed as a string argument to the function that represents the user's choice ("rock", "paper", or "scissors").

## Example

```javascript
playGame("rock");
```

This will start a game where the user's first choice is "rock". The computer's choice is generated randomly.

## Return Value

The game functions return an array with two elements: the first element is the number of rounds won by the user, and the second element is the number of rounds won by the computer.