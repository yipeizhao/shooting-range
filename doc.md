# shooting range

# Requirement

[Instructions.pdf](Instructions.pdf)

# Files and methods

## Gamev2.py

Game():

The game module. Consists of functions that can be called to play the game and vary parameters.

***Game.__init__(width=5,ROUND_MAX=50,TARGET_MAX=20,RESPAWN_PROB=0.1):***

Initiates the game and assigning parameters to their initial state.

Parameters:

- `WIDTH`, optional: 0<int<10. Constant. Controls the width of the board.  The columns will be range from 0 to n-1. Even width and odd width will create slightly different board. If width is an even natural number, there will be an additional column at the most right but no target will be generated in the most right column.
- `ROUND_MAX`, optional: 0<int. Constant. Maximum number of rounds. The game will immediately terminate when `ROUND_MAX` is reached by `round_no`.
- `TARGET_MAX`, optional: 0<int. Constant. Maximum number of targets. Targets will no longer be generated when `TARGET_MAX` is reached. The game will be terminated when `TARGET_MAX` is reached and no targets are left.
- `RESPAWN_PROB`, optional: 0<float. Constant. A target will be generated with this probability if the current location doesn’t have a target already.

**Returns:**

None

***Game.Target:***

An object of target, consists of location and remaining rounds parameter.

***Game.Target.__init__(loc, remaining_round=9):***

Initialises the target object.

**Parameters:**

- loc: tuple of ints. The location of the target.First element is the row of the target and second element is the column of the target.
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

- row: 0 ≤ int ≤ width-1. The row of the player. Can be changed by calling ***Game.movement(command).***
- col: 0 ≤ int ≤ 1. The col of the player. Can be changed by calling ***Game.movement(command).***

**Returns:**

None.

***Game.create_board(width=None):***

Generates the empty shooting range using strings.

**Parameters:**

- width: 0 < int < 10. The width of the shooting range. If this is None, the function will retrieve `Game.WIDTH`.

**Returns:**

- rows: list of strings. Using print function will print the empty shooting range.

**Game.display(rows=None):**

Display the shooting range with targets and players. To accomplish the goal, an empty shooting range is needed.

**Parameters:**

- rows: list of strings. The empty shooting range. If this is None, the function will call ***Game.create_board(width=None).***

**Returns:**

None

***Game.movement(command):***

Move the player respect to command being given. Valid commands are: “PASS”, “SHOOT”, “WEST”,”EAST”,”SOUTH”,”NORTH”. Calling an invalid command will not invalid the game but reduce the score by three. Moving the player into a invalid location will invalid the game and also reduce the score by three. Shooting an non-existent target or shooting while not in row 1 will receive the same punishment. Whenever a player moves, ***Game.Target.update()*** will be called for every target and ***Game.target_update()*** will also be called.

**Parameters:**

- command: string. Will move the target with the given command:
1. “PASS”. The player stays in the current location.
2. “SHOOT”. The player will try to shoot a target in front.
3. “WEST”. The player will move one unit left.
4. “EAST”. The player will move one unit right.
5. “SOUTH”. The player will move one unit down.
6. “NORTH”. The player will move one unit up.

**Returns:**

None

***Game.target_update():***

Maintaining all valid targets(`Target.remaining_round>1`) and generate targets in empty location that are available for targets.

**Parameters:**

None

**Returns:**

None

***Game.interactive():***

Allows player to play the game while player can manually enter commands in the console.

**Parameters:**

None

**Returns:**

None

***Game.output():***

Retrieve the current state of the game.

**Parameters:**

None

**Returns:**

- loc: list of ints. The current location of the player.
- target: list of tuples and ints. Tuple represents the current location of the target and int represents the remaining round of the target.
- round_no: int. The current round number.

***Game.reset():***

Reset the game by calling ***Game.__init__().***

**Parameters:**

None

**Results:**

None

***Game.result():***

Retrieve the result of the game.

**Parameters:**

None

**Returns:**

- invalid: bool. Whether the game is invalid.
- score: 0 ≤ int. Final score of the game.
- target_no: 0≤ int ≤ `Game.TARGET_MAX`. Number of targets generated.
- hit: 0 ≤ int ≤ `Game.TARGET_MAX`. Number of targets been shot.
- miss: 0≤ int ≤ `Game.TARGET_MAX`. Number of targets missed.

string_replacement(s,i,c):

Replace the character with index i in string s with c.

**Parameters:**

- s: string.
- i: 0 ≤ in t≤ len(s)
- c: string.

**Returns:**

- new_s:string. The replaced string

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
