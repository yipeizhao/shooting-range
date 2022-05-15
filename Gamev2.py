import random
class Game:
    def __init__(self):
        self.invalid = False
        self.round_no = 0
        self.target_no = 3
        self.width = 5
        self.ROUND_MAX = 50
        self.TARGET_MAX = 10 +4 
        self.RESPAWN_PROB = 0.3
        self.score = 0
        self.player = self.Player(0,self.width - 1)
        self.TARGET_LOCATION = set([(3,item) for item in list(range(0,self.width,2))])
        if self.width%2 != 0:
            self.target = [((3,item),9) for item in list(range(0,self.width,2))]
            self.target = [self.Target(item[0],item[1]) for item in self.target]
            self.AVAILABLE_COL=list(range(0,self.width,2))
        else:
            self.target = [((3,item),9) for item in list(range(0,self.width-1,2))]
            self.target = [self.Target(item[0],item[1]) for item in self.target]
            self.AVAILABLE_COL=list(range(0,self.width-1,2))
    
    def create_board(self,width):
        rows = ["  ","3|","2|_","1|","0|_"]
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
        return rows
    
    def display(self):
        rows = self.create_board(self.width)
        #Modifying row 1 according to targets
        for item in self.target:
            rows[1] = string_replacement(rows[1],item.col*2+2,item.remaining_round)
        
        # Modifying row 4 according to player
        if self.player.row == 0:
            rows[4] = string_replacement(rows[4],self.player.col*2+2,"X")
        else:
            rows[3] = string_replacement(rows[3],self.player.col*2+2,"X")
        for item in rows:
            print(item)
        print("")    
        print("Score: "+str(self.score))
        print("")
    
    # =============================================================================
    # Taking the command and move the player
    # type: str
    # rtype: None    
    # =============================================================================
    def movement(self,command):
        new_loc = [self.player.row,self.player.col]
        if command == "SOUTH":
            new_loc[0] -=1
        
        elif command == "NORTH":
            new_loc[0]+=1
        elif command == "WEST":
            new_loc[1]-= 1
            
        elif command == "EAST":
            new_loc[1] += 1
            
        elif command == "PASS":
            pass
            
        elif command == "SHOOT":
            # Detect wether a the player is in row 2 and there is a target infront
            if new_loc[0] == 1 and (new_loc[1] in [item.col for item in self.target]):
                for item in self.target:
                        if item.col == new_loc[1]:
                            self.target.remove(item)
                            self.score += 1
            else:
                print("You made an invalid shot.")
                self.score-=3
                self.invalid = not self.invalid
        else:
            print("You entered an invalid command.")
            self.score -=3

        if new_loc[0] == 0 or (new_loc[0] == 1 and new_loc[1] in self.AVAILABLE_COL):
            self.player.row = new_loc[0];self.player.col = new_loc[1]
        else:
            print("You made an invalid move.")
            self.score -=3
            self.invalid = not self.invalid
    
    def target_update(self):
        new_targets = []
        for item in self.target:
            if item.remaining_round != 1:
                new_targets.append(item)
        for item1 in (self.TARGET_LOCATION - set([item.loc for item in self.target])):
            if random.random()<self.RESPAWN_PROB:
                new_targets.append(self.Target(item1,9))
                self.target_no+=1
        self.target = new_targets
        
    
    class Target(object):
        def __init__(self,loc,remaining_round):
            self.loc = loc
            self.row = self.loc[0]
            self.col = self.loc[1]
            self.remaining_round = remaining_round
        def update(self):
            self.remaining_round -= 1
            
        
    class Player(object):
        def __init__(self,init_row,init_col):
            self.row = init_row
            self.col = init_col
                        
        
    # =============================================================================
    # An interactive way to play the game, taking the command from the user
    # =============================================================================
    def interactive(self):
         while(self.round_no < self.ROUND_MAX and self.target_no < self.TARGET_MAX):
            self.round_no += 1
            print("Round no: " + str(self.round_no))
            self.display()
            command = input("Please state your next move: ")
            self.movement(command)
            for item in self.target:
                item.update()
            self.target_update()
            print("Target respawned: " + str(self.target_no))
            
            
    def output(self):
        return self.player.loc,self.target,self.round_no
    
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

game = Game()
game.interactive()
