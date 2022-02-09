# Thinking in React Recap

## Noughts and Crosses

### Remind me about Computational Thinking

- Understand the problem
- Break things down into sub-problems
- Look for patterns and generalise
- Make a model of the real world
- Write an algorithm
- Translate into code

### Play some games of noughts and crosses

Find an [online version for them to play](https://playtictactoe.org/), or just a [collaborative drawing app like Zoom Whiteboard](https://blog.zoom.us/zoom-whiteboard/)

### Play another, write down everything that happens step by step

- Draw a 3x3 grid of squares
- Pick a player to go first
- Pick a value (X)
- Pick a square
  - if the square is not empty, you can't pick it
  - if the square is empty, you can pick it
- Check if someone has won
  - if someone won, the game ends and they are declared the winner
- Next player
- Pick a value (O)
- Pick a square
  - if the square is not empty, you can't pick it
  - if the square is empty, you can pick it
- Check if someone has won
- Next player (X)
- ...
- Someone won, game ends

### Look for patterns in these steps

Player Move:
- Pick a square
  - if the square is not empty, you can't pick it
  - if the square is empty, you can pick it
- Check if someone has won
  - if someone won, the game ends and they are declared the winner
- Next player

### Model to represent the aspects we need

- Players - X or O
- Board - `[]`, `[[]]`, `string`, `number` if you really wanted (each number represents a possible board state)

\*There are 9 positions and an alphabet with 3 letters (X, O, empty). Total number of possible combinations is 3^9 = 19683. There are 5477 possible legal game states.

### Plan -> Algorithm

- Draw a 3x3 grid of squares
- First player is X
- Player Move:
- Choose a square  
  - if the square is not empty, you can't pick it
  - if the square is empty, you can pick it - put the player symbol in that square
- Check if someone has won
  - how?
  - if they won, game over
  - if not, next player move

### Remind me about Thinking in React

State, behaviour, dependencies, show -> State, functions, props, render

### React Plan

Wireframe. View parts. Behaviour parts.

|   |   |   |
|---|---|---|
|   |   |   |
|   |   |   |

`Your turn: X`

___

Goes to these components:

- Game
  - State
    - `board = [null,null,null,null,null,null,null,null,null] <- "X", "O", or null`
    - `x's turn = true | false`
  - Behaviour
    - make a move
      - if the square is not empty, you can't pick it
      - if the square is empty, you can pick it - put the player symbol in that square
    - check winner
      - check if there's matching symbols in rows, columns, or diagonals
      - if there is, the game ends and the symbol wins
      - if the board is full, the game ends as a draw
  - Render
    - Board
    - Who's turn is it?
    - Winner
- Board
  - Props
    - board
    - make a move
  - Render
    - Squares - 1 for each item in board, arranged into a grid
- Square
  - Props
    - make a move
  - Render
    - `"", X, or O`
