import random


class Game:
    # =============================================================================
    # Initialises the game
    # invalid: bool, invalids game if an invalid move has been performed
    # terminate: bool, the game will terminate if max rounds or max targets(and no more target left) is reached
    # round_no: 0 <= int <= ROUND_MAX, starting the game with round number = 0
    # target_no: 0 <= int <= TARGET_MAX, number of targets(ID given to a target)
    # hit: 0 <= int, number of targets hit
    # WIDTH: 0 <int <10, width of the shooting range, should be less than 10, see doc
    # ROUND_MAX: 0 < int, game will stop if reaches max rounds
    # TARGET_MAX: 0 < int, game will stop if reaches max targets
    # RESPAWN_PROB: 0 <= float <= 1; probability of targets respawn
    # score: 0 =< int, score +1 if a target is hit; -3 if an invalid move is performed(invalid shot,command,move)
    # player: player object
    # TARGET_LOCATION: list of tuple of ints, all potential location of targets
    # target: list of target objects

    # type: int
    # type: int
    # type: int
    # type: float
    # rtype: None
    # =============================================================================
    def __init__(self, width=5, round_max=50, target_max=20, respawn_prob=0.1):
        self.invalid = False
        self.terminate = False
        self.round_no = 0
        self.target_no = 0
        self.hit = 0
        self.WIDTH = width
        self.ROUND_MAX = round_max
        self.TARGET_MAX = target_max
        self.RESPAWN_PROB = respawn_prob
        self.score = 0
        self.player = self.Player(0, self.WIDTH - 1)
        self.TARGET_LOCATION = set([tuple((3, item)) for item in list(range(0, self.WIDTH, 2))])

        # Initiate targets
        # If no targets are generated initially, randomly choose a target location to spawn a target
        # Ensuring that there is at least one target at the start of the game
        self.target = []
        for i in range(len(self.TARGET_LOCATION)):
            if random.random() < self.RESPAWN_PROB and self.target_no < self.TARGET_MAX:
                self.target.append(self.Target(tuple(self.TARGET_LOCATION)[i], 9))
                self.target_no += 1
        if len(self.target) == 0:
            init_target = random.choice(list(self.TARGET_LOCATION))
            self.target.append(self.Target(init_target, 9))
            self.target_no += 1

    # =============================================================================
    # An instance of a target
    # loc: tuple of ints, initial location of the target
    # row: int, row no
    # col: int, col no
    # remaining_round: int, remaining round of the target
    # =============================================================================
    class Target:
        def __init__(self, loc, remaining_round=9):
            self.loc = loc
            self.row = self.loc[0]
            self.col = self.loc[1]
            self.remaining_round = remaining_round

        # =============================================================================
        # Update is called for every target every round, increment round number by -1
        # =============================================================================
        def update(self):
            self.remaining_round -= 1

    # =============================================================================
    # An instance of the player
    # row: current row no of the player          
    # col: current col no of the player
    # =============================================================================
    class Player:
        def __init__(self, row, col):
            self.row = row
            self.col = col

    # =============================================================================
    # Generating the empty shooting range
    # type: int
    # rtype: list of strings
    # =============================================================================
    def create_board(self, width=None):
        if width is None:
            width = self.WIDTH
        rows = ["  ", "3|", "2|_", "1|", "0|_"]
        for i in range(width):
            rows[0] += str(i) + "_"
        rows[0] = rows[0][:-1]
        rows[0] += "|"
        rows[1] += " " * (width * 2 - 1) + "|"
        if width % 2 != 0:
            rows[2] += "   _" * int(((width - 1) / 2)) + "|"
            rows[3] += " |_|" * int(((width - 1) / 2)) + " |"
        else:
            rows[2] += "   _" * int(((width - 1) / 2)) + "  |"
            rows[3] += " |_|" * int(((width - 1) / 2) + 1)
            rows[3] = rows[3][:-1] + "|"
        rows[4] += "_" * (2 * width - 2) + "| "
        return rows

    # =============================================================================
    # Displaying the shooting range with targets and player
    # type: list of strings
    # rtype: None
    # =============================================================================
    def display(self, rows=None):
        if rows is None:
            rows = self.create_board()
        print("Round no: " + str(self.round_no))
        print("Target respawned: " + str(self.target_no))

        # Modifying row 1 according to targets
        for item in self.target:
            rows[1] = string_replacement(rows[1], item.col * 2 + 2, item.remaining_round)

        # Modifying row 4 according to player
        if self.player.row == 0:
            rows[4] = string_replacement(rows[4], self.player.col * 2 + 2, "X")
        elif self.player.row == 1:
            rows[3] = string_replacement(rows[3], self.player.col * 2 + 2, "X")
        for item in rows:
            print(item)
        print("Score: " + str(self.score))
        print("")

    # =============================================================================
    # Taking the command and move the player respectively
    # type: str
    # rtype: None    
    # =============================================================================

    def movement(self, command):
        # Whenever a move is performed, add 1 to round no
        self.round_no += 1
        # A new variable to store the new location of the player
        # it is used to check the validity of the new player location
        new_loc = [self.player.row, self.player.col]
        # If SHOOT is being called, we have to determine the validity of the shot
        # has to satisfy: there is a target in the same col and the player has to be 2 units away from a target
        # If the shot is valid, remove the target and add one to the score
        # Else, warn the player, minus the score by 3 and invalid the game
        if command == "SHOOT":
            flag = False
            # Detect whether a player is in row 1 and there is a target in front.
            for item in self.target:
                if (item.col == self.player.col) and (
                        abs(item.row - self.player.row) == 2):
                    self.target.remove(item)
                    self.score += 1
                    self.hit += 1
                    flag = True
            if not flag:
                # print("You made an invalid shot.")
                self.score -= 3
                self.invalid = True
        elif command == "PASS":
            pass
        elif command == "SOUTH":
            new_loc[0] -= 1
        elif command == "NORTH":
            new_loc[0] += 1
        elif command == "WEST":
            new_loc[1] -= 1

        elif command == "EAST":
            new_loc[1] += 1
        else:
            # print("You entered an invalid command.")
            self.score -= 3
        # Check whether the new location is valid
        # If an invalid loc is entered:
        # warn the player
        # score - 3
        # invalid the game
        # Else, assign the current player loc to the new loc

        # Border between booths
        # West border
        # East border
        # South border
        # North border
        if (new_loc[0] == 1 and new_loc[1] % 2 != 0) or \
                (new_loc[1] < 0) or \
                (new_loc[1] > self.WIDTH - 1) or \
                (new_loc[0] < 0) or \
                (new_loc[0] > 1):
            # print("You made an invalid move.")
            self.score -= 3
            self.invalid = True
        else:
            self.player.row = new_loc[0]
            self.player.col = new_loc[1]
        # Updating targets, including round number reducing and generating new targets
        self.target_update()
        # Determines the termination of the game
        if self.round_no >= self.ROUND_MAX:
            self.terminate = True

    # =============================================================================
    # target_update is called after every move
    # Targets will be appended to the new target list if its remaining round isn't 0
    # Obtained all empty target location and generates targets with random prob;
    # if successful and target max isn't reached, it will be appended to the new target list
    # type: None
    # rtype: None
    # =============================================================================
    def target_update(self):
        # Terminates the game TARGET_MAX is reached and no more current targets
        if self.target_no >= self.TARGET_MAX and len(self.target) == 0:
            self.terminate = True

        # Appending all current targets
        new_targets = []
        for item in self.target:
            item.update()
            if item.remaining_round > 0:
                new_targets.append(item)

        # Use all potential targets to minus all current targets to find all empty targets
        for item1 in (self.TARGET_LOCATION - set([item.loc for item in self.target])):
            if random.random() < self.RESPAWN_PROB and self.target_no < self.TARGET_MAX:
                new_targets.append(self.Target(item1, 9))
                self.target_no += 1

        self.target = new_targets

    # =============================================================================
    # An interactive way to play the game, taking the command from the user
    # type: None
    # rtype: None
    # =============================================================================
    def interactive(self):
        self.display()
        while self.round_no < self.ROUND_MAX and self.target_no < self.TARGET_MAX:
            command = input("Please state your next move: ")
            self.movement(command)
            self.display()

    # =============================================================================
    # Return the current state of the game
    # Player loc: targets and round no
    # type: None
    # rtype: list of ints
    # rtype: list of Target objects
    # rtype: int
    # =============================================================================
    def output(self):
        return [[self.player.row, self.player.col], [(item.loc, item.remaining_round) for item in self.target],
                self.round_no]

    # =============================================================================
    # Re-initiate the game
    # type: None
    # rtype: None
    # =============================================================================
    def reset(self):
        self.invalid = False
        self.terminate = False
        self.round_no = 0
        self.target_no = 0
        self.hit = 0
        self.score = 0
        self.player = self.Player(0, self.WIDTH - 1)
        # Initiate targets
        # If no targets are generated initially, randomly choose a target location to spawn a target
        # Ensuring that there is at least one target at the start of the game
        self.target = []
        for i in range(len(self.TARGET_LOCATION)):
            if random.random() < self.RESPAWN_PROB and self.target_no < self.TARGET_MAX:
                self.target.append(self.Target(list(self.TARGET_LOCATION)[i], 9))
                self.target_no += 1
        if len(self.target) == 0:
            init_target = random.choice(list(self.TARGET_LOCATION))
            self.target = [(self.Target(init_target, 9))]
            self.target_no += 1

    # =============================================================================
    # Return the final result of the game
    # type: None
    # rtype: bool
    # rtype: int
    # rtype: int
    # rtype: int
    # rtype: int
    # =============================================================================
    def result(self):
        if self.terminate:
            return self.invalid, self.score, self.target_no, self.hit, self.target_no - self.hit
        else:
            raise Exception("The game hasn't been terminated.")


# =============================================================================
# Replace the char c in a string s given index i
# type s: string
# type i: int
# type c: string
# rtype new_s: string
# =============================================================================
def string_replacement(s, i, c):
    new_s = list(s)
    new_s[i] = str(c)
    new_s = "".join(new_s)
    return new_s

# game = Game()
# game.interactive()
