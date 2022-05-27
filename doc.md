# shooting range

# Instruction

[Instructions.pdf](Instructions.pdf)

# Files and methods

## Gamev2.py

***Game():***

The game module. Consists of functions that can be called to play the game and vary parameters.

<br>

***Game.__init__(width=5,round_max=50,target_max=20,respawn_prob=0.1):***

Initiates the game and assigning parameters to their initial state.

**Parameters:**

- `width`, optional: 0<int<10. Constant. Controls the width of the board.  The columns will be range from 0 to n-1. Even width and odd width will create slightly different board. If width is an even natural number, there will be an additional column at the most right but no target will be generated in the most right column. Please see known issue for width larger than 10.
- `round_max`, optional: 0<int. Constant. Maximum number of rounds. The game will immediately terminate when `round_max` is reached by `round_no`.
- `target_max`, optional: 0<int. Constant. Maximum number of targets. Targets will no longer be generated when `target_max` is reached. The game will be terminated when `target_max` is reached and no targets are left.
- `respawn_prob`, optional: 0<float. Constant. A target will be generated with this probability if the current location doesn’t have a target already.

**Returns:**

None

<br>

***Game.Target:***

An object of target, consists of location and remaining rounds parameter.

***Game.Target.__init__(loc, remaining_round=9):***

Initialises the target object.

**Parameters:**

- loc: tuple of ints. The location of the target.First element is the row of the target and second element is the column of the target.
- remaining_round, optional: 0<int. Number of remaining rounds of the target. The target will disappear if the this parameter turns into 0 or negative.

**Returns:**

None

<br>


***Game.Target.update():***

This function is called every round and reduce the remaining round of the target by 1.

**Parameters:**

None

**Returns:**

None

<br>


***Game.Player:***

An object of player, consists of the location of the player. Player object can be further expand and become more maintainable.

***Game.Player.__init__(row,col):***

Initialises the player object.

**Parameters:**

- row: 0 ≤ int ≤ width-1. The row of the player. Can be changed by calling ***Game.movement(command).***
- col: 0 ≤ int ≤ 1. The col of the player. Can be changed by calling ***Game.movement(command).***

**Returns:**

None.

<br>


***Game.create_board(width=None):***

Generates the empty shooting range using strings.

**Parameters:**

- width: 0 < int < 10. The width of the shooting range. If this is None, the function will retrieve `Game.WIDTH` as it's parameter.

**Returns:**

- rows: list of strings. Using print function will print the empty shooting range.

<br>


***Game.display(rows=None):***

Display the shooting range with targets and players. To accomplish the goal, an empty shooting range is needed.

**Parameters:**

- rows: list of strings. The empty shooting range. If this is None, the function will call ***Game.create_board(width=None)*** as its parameter.

**Returns:**

None

<br>


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

<br>


***Game.target_update():***

Maintaining all valid targets(`Target.remaining_round>1`) and generate targets in empty location that are available for targets.

**Parameters:**

None

**Returns:**

None

<br>


***Game.interactive():***

Allows player to play the game while player can manually enter commands in the console.

**Parameters:**

None

**Returns:**

None

<br>


***Game.output():***

Retrieve the current state of the game.

**Parameters:**

None

**Returns:**

- loc: list of ints. The current location of the player.
- target: list of tuples and ints. Tuple represents the current location of the target and int represents the remaining round of the target.
- round_no: int. The current round number.

<br>

***Game.reset():***

Reset the game by reinstantiate player's location, targets, `round_no`, `score` and other variables.

**Parameters:**

None

**Returns:**

None

<br>

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

<br>


***string_replacement(s,i,c):***

Replace the character with index i in string s with c.

**Parameters:**

- s: string.
- i: 0 ≤ in t≤ len(s)
- c: string.

**Returns:**

- new_s:string. The replaced string.

<br>


# Known issues

- Game.display() and Game.create_board() functions will not work properly if width >= 10.

# Bots
Bots are designed to catch output of the game by calling ***Game.output()*** and returns a command to control the movement of the player each turn.

<br>

***def random_bot(loc,target,round_no):***

Returns one of the valid command randomly.

**Parameters:**
- loc: list of ints. The current location of the player.
- target: list of tuples and an int. Tuple represents the current location of the target and int represents the remaining round of the target.
- round_no: int. The current round number.

**Returns:**

- command: string.

<br>

***def basic_bot(loc,target,round_no):***

Returns a rational command base on the current status of the game. All situations are broken down into 9 cases and returns command respectively.

<br>

| case | player row  | player col | target | command | priority |
| --- | --- | --- | --- | --- | --- |
| 1 | Any row | Any col | No target  | PASS | ****** |
| 2 | 0 | Even col | Same col as player  | NORTH | **** |
| 3 | 1 | Even col | Same col as player | SHOOT | ***** |
| 4 | 1 | Even col| No target in front but a target elsewhere| SOUTH | *** |
| 5 | 0 | Any col | A target can be found on right | EAST | ** |
| 6 | 0 | Any col | A target can be found on left | WEST | ** |
| 7 | 0 | Within two targets but closer to the left | Left and right | WEST | ** |
| 8 | 0 | Within two targets but closer to the right | Left and right | EAST | ** |
| 9 | 0 | Within two targets with equal distance | Left and right | Random choice of EAST/WEST | * |
|  |  |  |  |  |  |

**Parameters:**
- loc: list of ints. The current location of the player.
- target: list of tuples and an int. Tuple represents the current location of the target and int represents the remaining round of the target.
- round_no: int. The current round number.

**Returns:**

- command: string.
  
<br>

***def smart_bot(loc,target,round_no):***

Smart bot is fully depending on the basic bot but it is designed to be a bit smarter with some strategies:
- Detect the distance between targets and the player to make a decision. If the remaining round is smaller than the distance plus two("NORTH" and "SHOOT" command), the target will be gave up since it is unreachable.
- If there is no more target, move out of the booth to save a round.
<br>

Potential strategies:
- Trying to move towards the middle of the shooting range if there is no target. If the width is set to be 5, move the target towards column 2. Since width is a parameter and achieve it from the module can be cheated, this is not implemented.


**Parameters:**
- loc: list of ints. The current location of the player.
- target: list of tuples and an int. Tuple represents the current location of the target and int represents the remaining round of the target.
- round_no: int. The current round number.

**Returns:**

- command: string.
