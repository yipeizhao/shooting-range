import random
class Game:
    def __init__(self):
        self.round_no = 0
        self.target_no = 3
        self.width = 5
        self.ROUND_MAX = 50
        self.TARGET_MAX = 10 +4 
        self.RESPAWN_PROB = 0.3
        self.score = 0
        self.player = self.Player(0,self.width - 1)
        if self.width%2 != 0:
            self.TARGET_LOCATION = set([(3,item) for item in list(range(0,self.width,2))])
            self.target = [((3,item),9) for item in list(range(0,self.width,2))]
            self.target = [self.Target(item[0],item[1]) for item in self.target]
        else:
            self.TARGET_LOCATION = [(3,item) for item in list(range(0,self.width,2))]
            self.target = [((3,item),9) for item in list(range(0,self.width-1,2))]
            self.target = [self.Target(item[0],item[1]) for item in self.target]
    
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
        if command == "SOUTH":
            self.player.row -=1
        
        elif command == "NORTH":
            # Only operates if player is in row 3
            if self.player.row == 0:
                self.player.row += 1
            else:
                raise Exception("You are out of the box")
                
        elif command == "WEST":
            self.player.col-= 1
            
        elif command == "EAST":
            self.player.col += 1
            
        elif command == "PASS":
            pass
            
        elif command == "SHOOT":
            # Detect wether a the player is in row 2 and there is a target infront
            if self.player.row == 1:
                for item in self.target:
                        if item.col == self.player.col:
                            self.target.remove(item)
                            self.score += 1
        else:
            raise Exception("Invalid movement")
            # Restraints:
            # 1. Player loc column no +1 < width
            # 2. Player loc column is > 0(not going left out of the map)
            # 3. Player loc row is not >3(not going below the map)
            # 4. Player loc row = 2 and can only go in even columns
        if self.player.col+1 > self.width or \
           self.player.col<0 or \
           self.player.row>3 or \
           bool(self.player.col%2!=0 and self.player.row==2):
            raise Exception("You are out of the box")
    
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
