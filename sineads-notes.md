plan.md

# tic tac toe

## setup

-   draw the board

    -   two vertical lines (at 1/3 and 2/3 points each)
    -   two horiz lines (at 1/3 and 2/3 points
        OR
    -   create 3 columns and 3 rows totalling in nine equal sided sqaures)

-   create two different counter types
-   set up two diffferent users

## chris's version

-   draw a 3 x 3 grid (i.e. set up the playing area)
-   pick the player to go first = player 1
-   (that player) picks a value - X or O, let's say X)
    (and the other player will be the other value, e.g. O)
-   (player 1) Choose a square
    -   if the square is empty, place the value (X) in the square
    -   if the square is not empty (not allowed/ invalid move), choose another square

## chris's version exactly - version 1

-   Draw a 3 x 3 grid

-   Pick a player to go first

-   Pick a value (x)

-   Choose a square:

    -   if square is empty, place the SYMBOL (X) in the square
    -   if square is NOT emplty, choose another square

-   Check if someone has won:
    -   check if there's matching symbols in rows, columns or diagonals
    -   if there is, the game ends and the symbol wins

-   Check if the squares are full
    -   then its a draw, (and the game is over)

Next player goes

-   Pick a value (O)

-   Choose a square:
    -   if square is empty, place the SYMBOL (O) in the square
    -   if square is NOT empty, choose another square

## chris's version  2 - with the function

-   Draw a 3 x 3 grid
-   Pick a player to go first  (sinead: and assign symbols?)
-   Player Move (symbol)
        -   Pick a value (x)
        -   Choose a square:
            -   if square is empty, place the SYMBOL (X) in the square
            -   if square is NOT emplty, choose another square
        -   Check if someone has won:
            -   check if there's matching symbols in rows, columns or diagonals
            -   if there is, the game ends and the symbol wins
        -   Check if the squares are full:
            -   then its a draw, (and the game is over)
        - Next Player goes

- Player Move (X)
- Player Move (O)

[keep doing that until the games ends or someone wins]

## chris - how are we going to represent everything

[sinead: i.e. what components (or classes!)]
1. Board -  an array of squares
         e.g. ["", "", "" ...]
         or [null, null, null etc]
      - so need a representation of an emmpty square
 

        e.g.  Board = [null, null, null,
                        null, null, null,
                        null, null, null] <- array of squares, with null denoting an empty square

                aside: 
                    could also do an array of arrays:
                    [[null, null, null], [null, null, null], [null, null, null]]

                    could also do an object:
                    {
                        topleft: null,
                        topmiddle: null,
                        topright: null etc
                    }

                    could do it as a string, with a dot for empty, and an X or O for a move
                    "........." -> "....X...." -> "...O..X..." etc

                How many combinations of boards are there? 
                Only some of those wil lbe valid.

2. Players - "X" and "O"  

      (could have 0,1 or A,B or emojies etc)

## chris - now for the algorithm
-   Draw a 3 x 3 grid
-   First player is X 
-   Player Move (symbol)
        -   Pick a value (x)
        -   Choose a square:
            -   if square is empty, place the SYMBOL (X) in the square
            -   if square is NOT empty, choose another square
        -   Check if someone has won:
            -   check if there's matching symbols in rows, columns or diagonals
            -   if there is, the game ends and the symbol wins
                [- add 1 to the win score for that player - IGNORE FOR NOW]
        -   Check if the squares are full:
            -   then its a draw, (and the game is over)
        - Next Player goes

- Player Move (X)
- Player Move (O)
... keep doing that until the game ends or soneone wins
[ - print the final scores etc, and reset the board IGNORE FOR NOW]

## chris - now think about React and how we'll represent it
### High level:
- the view - how do we see it 
- the model - how do we create it in memory.
- what React tools do we have?  state, components, hooks, props ... 

### Breaking it down:
Wireframe - for the view

Components:
    - Square (green circle on wireframe)
        - Props
            - value -> X, O, null
            - onClick
        - Render
            - box => X, O, empty

    - Board (orange circle on wireframe)
        - Props
            - whosTurn (state from Game)
        - State
            - values => ["X", null, null ...]
        - Behaviour
            - function chooseSquare(index)
        - Render
            - Squares in a 3x3 grid

    - Player Turn (text)
        - Props
            - whosTurn (state from Game)
        - Render
            - "It's the turn of {whosTurn}"

    - Winner (text)
        - Props
            - whosTurn (state from Game)
        - Render
            - "you win {whosTurn}"

    - Game (red rectangle on wirefram)
        - State
            whosTurn