# shooting range

# Requirement

[Instructions.pdf](shooting%20range%2011c8126a1e464d91a43c10e26eee1c61/Instructions.pdf)

# Files and methods

## Gamev2.py

Game():

The game module. Consists of functions that can be called to play the game and vary parameters.

***Game.__init__(width=5,ROUND_MAX=50,TARGET_MAX=20,RESPAWN_PROB=0.1):***

Initiates the game and assigning parameters to their initial state.

Parameters:

- WIDTH, optional: 0<int<10. Constant. Controls the width of the board.  The columns will be range from 0 to n-1. Even width and odd width will create slightly different board. If width is an even natural number, there will be an additional column at the most right but no target will be generated in the most right column.
- ROUND_MAX, optional: 0<int. Constant. Maximum number of rounds. The game will immediately terminate when ROUND_MAX is reached by round_no.
- TARGET_MAX, optional: 0<int. Constant. Maximum number of targets. Targets will no longer be generated when TARGET_MAX is reached. The game will be terminated when TARGET_MAX is reached and no targets are left.
- RESPAWN_PROB, optional: 0<float. Constant. A target will be generated with this probability if the current location doesn’t have a target already.

**Returns:**

None

***Game.Target:***

An object of target, consists of location and remaining rounds parameter.

***Game.Target.__init__(loc, remaining_round=9):***

Initialises the target object.

**Parameters:**

- loc, tuple of ints. The location of the target.First element is the row of the target and second element is the column of the target.
- remaining_round, optional: 0<int. Number of remaining rounds of the target. The target will disappear if the this parameter turns into 0 or negative.

**Returns:**

None

***Game.Target.update():***

This function is called every round and reduce the remaining round of the target by 1.

**Parameters:**

None

**Returns:**

None

***Game.Player:***

An object of player, consists of the location of the player. Player object can be further expand and become more maintainable.

***Game.Player.__init__(row,col):***

Initialises the player object.

**Parameters:**

- row, 0 ≤ int ≤ width-1. The row of the player. Can be changed by calling ***Game.movement(command).***
- col, 0 ≤ int ≤ 1. The col of the player. Can be changed by calling ***Game.movement(command).***

**Returns:**

None.

***Game.create_board():***

Generates the shooting range by strings.

**Parameters:**

None

**Returns:**

- rows: list of strings. Using printing functions will print the whole board.

# Known issues

- display will go wrong if width > 10
- extend: no underscore for X char
    
    basic bot:
    

| case | player row  | player col | target | command | priority |
| --- | --- | --- | --- | --- | --- |
| 1 | any row | any col | no targets  | PASS | ****** |
| 2.1 | 0 | 0,2,4 | same col as player and in row 3 only  | NORTH | **** |
| 2.2 | 0 | 0,2,4 | same col as player and in row -3 only  | SOUTH | **** |
| 3 | 1 | 0,2,4 | a target is exactly 2 units away | SHOOT | ***** |
| 4.1 | 1 | 0,2,4 | no target in front | SOUTH | *** |
| 4.2 | 2 | 0,2,4, | no target in front | NORTH | *** |
| 5 | 0 | 0,1,2,3 | a target can be found in right | EAST | ** |
| 6 | 0 | 1,2,3,4 | a target can be found in left | WEST | ** |
| 7 | 0 | within two targets but closer to the left | left and right | WEST | ** |
| 8 | 0 | within two targets but closer to the right | left and right | EAST | ** |
| 9 | 0 | within two targets with equal distance | left and right | random choice of EAST/WEST | * |
|  |  |  |  |  |  |

Smart bot:

- Detect the distance between targets and the player to make a decision. If the remaining round < distance +2, give up on the target and move to another one
- if there is no more target, move out of the booth (and move towards the middle of the shooting range)