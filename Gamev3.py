import random
class Game():
    # =============================================================================
    # Initialise the game
    # invalid: bool, invalid game if an invalid move has been performed
    # terminate: bool, the game will terminate if max rounds or max targets is reached
    # extend: bool, extend the shooting range
    # round_no: 0<=int, starting the game with round number = 0
    # target_no: 0<=int, number of targets(ID given to a target)
    # hit: 0<=int, number of targets hit
    # width: 0<int<10, width of the shooting range, should be less than 10
    # ROUND_MAX: 0<int, game will stop if reaches max rounds
    # TARGET_MAX: 0<int, game will stop if reaches max targets
    # RESPWAN_PROB: 0<= float <= 1; probability of targets respwan
    # score: 0<=int, score +1 if a target is hitted; -3 if an invalid move
    # player: player object
    # TARGET_LOCATION: list of tuple of ints, all potential location of targets
    # AVAILABLE_LOC: list of floats(ints), stored all valid player's location
    # target: list of target objects
    # =============================================================================
    def __init__(self):
        self.invalid = False
        self.terminate = False
        self.extend = not False
        self.round_no = 0
        self.target_no = 0
        self.hit = 0
        self.width = 9
        self.ROUND_MAX = 50
        self.TARGET_MAX = 20
        self.RESPAWN_PROB = 0.2
        self.score = 0
        self.player = self.Player(0,self.width - 1)
        self.TARGET_LOCATION = set([(3,item) for item in list(range(0,self.width,2))])
        temp = list(range(0,self.width,2))
        self.AVAILABLE_LOC = [(1,item) for item in temp]
        self.AVAILABLE_LOC += [(0,item) for item in list(range(0,self.width))]
        if self.extend:
            self.TARGET_LOCATION=self.TARGET_LOCATION.union(set([(-3,item) for item in list(range(0,self.width,2))]))
            self.AVAILABLE_LOC += [(-1,item) for item in temp]

        # Initiates targets
        # If no targets are generated initially, randomly choose a target location to spawn a target
        # Ensuring that there is at least one target at the start of the game
        self.target = []
        for i in range(len(self.TARGET_LOCATION)):
            if random.random()<self.RESPAWN_PROB:
                self.target.append(self.Target(list(self.TARGET_LOCATION)[i],9))
                self.target_no += 1
        if len(self.target) == 0:
            init_target = random.choice(list(self.TARGET_LOCATION))
            self.target=[(self.Target(init_target,9))]
            self.target_no += 1
                
    # =============================================================================
    # An instance of a target
    # loc: tuple of ints, initial location of the target
    # row: int, row no
    # col: int, col no
    # remaining_round: int, remaining round of the target
    # =============================================================================
    class Target():
        def __init__(self,loc,remaining_round):
            self.loc = loc
            self.row = self.loc[0]
            self.col = self.loc[1]
            self.remaining_round = remaining_round
        # update is called for every target every round, increment round number by -1
        def update(self):
            self.remaining_round -= 1
            
    # =============================================================================
    # An instance of the player
    # row: current row no of the player          
    # col: current col no of the player
    # =============================================================================
    class Player():
        def __init__(self,init_row,init_col):
            self.row = init_row
            self.col = init_col
            
    # =============================================================================
    # Generating the shooting range
    # type: None
    # rtype: list of strings
    # =============================================================================
    def create_board(self):
        width = self.width
        rows = ["   "," 3|"," 2|_"," 1|"," 0|_"]
        for i in range(width):
            rows[0] += str(i)+"_"
        rows[0] = rows[0][:-1]
        rows[0] += "|"
        rows[1] += " "*(width*2-1) +"|"
        if width % 2!= 0:
            rows[2] += "   _"*int(((width-1)/2))+"|"
            rows[3] += " |_|"*int(((width-1)/2))+" |"
        else:
            rows[2] += "   _"*int(((width-1)/2))+"  |"
            rows[3] += " |_|"*int(((width-1)/2)+1)
            rows[3] = rows[3][:-1]+"|"
        rows[4] += "_"*(2*width-2)+"| "
        if self.extend:
            if self.width%2 != 0:
                rows.append("-1|_");rows.append("-2|");rows.append("-3|")
                rows[4] = " 0| " + " _  "*int((width-1)/2)+"|"
                rows[5] += "| |_"*int(((width)/2))+"|"
                rows[6] += " "*(width*2-1) +"|"
                rows[7] += "_"*(width*2-1) +"|"
            else:
                rows.append("-1|_");rows.append("-2|");rows.append("-3|")
                rows[4] = " 0| " + " _  "*int((width)/2-1)+"  |"
                rows[5] += "| |_"*int(((width)/2)-1)+"| |"
                rows[6] += " "*(width*2-1) +"|"
                rows[7] += "_"*(width*2-1) +"|"
        return rows
    
    # =============================================================================
    # Displaying the whole board with targets and player
    # type: None
    # rtype: None
    # =============================================================================
    def display(self):
        print("Round no: " + str(self.round_no))
        print("Target respawned: " + str(self.target_no))
        rows = self.create_board()
        #Modifying row 1 according to targets
        for item in self.target:
            if item.row == 3:
                rows[1] = string_replacement(rows[1],item.col*2+3,item.remaining_round)
            elif item.row == -3:
                rows[7] = string_replacement(rows[7],item.col*2+3,item.remaining_round)
        
        # Modifying row 3,4,5 according to player
        if self.player.row == 0:
            rows[4] = string_replacement(rows[4],self.player.col*2+3,"X")
        elif self.player.row == 1:
            rows[3] = string_replacement(rows[3],self.player.col*2+3,"X")
        elif self.player.row == -1:
            rows[5] = string_replacement(rows[5],self.player.col*2+3,"X")
        for item in rows:
            print(item) 
        print("Score: "+str(self.score))
        print("")
    
    # =============================================================================
    # Taking the command and move the player
    # type: str
    # rtype: None    
    # =============================================================================
    def movement(self,command):
        # Whenever a move is performed, add 1 to round no
        self.round_no += 1
        # If shoot is being called, we have to determine the validity of the shot
        # The shot has to satisfy:
        # there is a target in the same col and the player has to be 2 units away from a target
        # If the shot is valid, remove the target and add one to the score
        # Else, warn the player, minus the score by 3 and invalid the game
        if command == "SHOOT":
            flag = False
            # Detect wether a the player is in row 1 and there is a target infront
            # In the if statement:
                # The foirst
            for item in self.target:
                    if (item.col == self.player.col) and (item.row == self.player.row+2 or item.row == self.player.row-2):
                        self.target.remove(item)
                        self.score += 1
                        self.hit += 1
                        flag = True
            if not flag: 
                print("You made an invalid shot.")
                self.score-=3
                self.invalid = not self.invalid
        elif command == "PASS":
            pass
        else:
            # A new variable to store the new location of the player
            new_loc = [self.player.row,self.player.col]
            if command == "SOUTH":
                new_loc[0] -= 1
            elif command == "NORTH":
                new_loc[0] += 1
            elif command == "WEST":
                new_loc[1] -= 1
                
            elif command == "EAST":
                new_loc[1] += 1
            else:
                print("You entered an invalid command.")
                self.score -=3
            # Check whether the new location is valid
            # If an invalid loc is entered:
                # warn the player
                # score - 3
                # invalid the game
            # Else, assign the current player loc to the new loc
            if (new_loc[0],new_loc[1]) not in self.AVAILABLE_LOC:
               print("You made an invalid move.")
               self.score -=3
               self.invalid = not self.invalid
            else:
                self.player.row = new_loc[0];self.player.col = new_loc[1]
        # After player's move, targets are updated
        for item in self.target:
            item.update()
        self.target_update()
        if self.round_no == self.ROUND_MAX:
            self.terminate = True
    
    # =============================================================================
    # target_update is called every round
    # targets will be append to the new target list if its remaining round isn't 0
    # Obatined all empty target location and generates targets with random prob;
    # if successful and target max isn't reached, it will be appended to the new target list
    # type: None
    # rtype: None
    # =============================================================================
    def target_update(self):
        new_targets = []
        for item in self.target:
            if item.remaining_round != 0:
                new_targets.append(item)
        # Find all empty target location and iterates through them
        # generates a target if successful
        for item1 in (self.TARGET_LOCATION - set([item.loc for item in self.target])):
            if random.random()<self.RESPAWN_PROB and self.target_no<self.TARGET_MAX:
                new_targets.append(self.Target(item1,9))
                self.target_no+=1
        self.target = new_targets
        # If target no reaches its maximum and no target left in the shooting range
        # terminates the game
        if (self.target_no == self.TARGET_MAX) and (len(new_targets) == 0):
            self.terminate = True
        
                        
        
    # =============================================================================
    # An interactive way to play the game, taking the command from the user
    # =============================================================================
    def interactive(self):
        self.display()
        while(self.round_no < self.ROUND_MAX and self.target_no < self.TARGET_MAX):
            command = input("Please state your next move: ")
            self.movement(command)
            self.display()
            
    # =============================================================================
    # Return results
    # Player loc, targets and round no
    # type: None
    # rtype: list of ints
    # rtype: list of Target objects
    # rtype: int
    # =============================================================================
    def output(self):
        return [[self.player.row,self.player.col],[(item.loc,item.remaining_round) for item in self.target],self.round_no]
    
    # =============================================================================
    # Reinitiate the game
    # type: None
    # rtype: None
    # =============================================================================
    def reset(self):
        self.__init__()
        
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
# type s, string
# type i, int
# type c, string
# rtype new_s, string
# =============================================================================
def string_replacement(s,i,c):
    new_s = list(s)
    new_s[i] = str(c)
    new_s = "".join(new_s)
    return new_s


# game = Game()
# game.interactive()
