import random
class Game():
    # =============================================================================
    # Initialise the game
    # round_no: int, starting the game with round number = 0
    # target_no: int, number of targets(ID given to a target)
    # width: int, width of the shooting range
    # ROUND_MAX: int, game will stop if reaches max rounds
    # TARGET_MAX: int, game will stop if reaches max targets. The game will immedaitely stop after the target respawn so we need to add one
    # score: int, score earned
    # RESPWAN_PROB: float < 1; probability of targets respwan
    # player_loc: list, current location of the player, starting at the bottom-right
    # TARGET_LOCATION: list of ints, all potential location of targets
    # target: inital location of the targets and remaining rounds
    # =============================================================================
    def __init__(self):
        self.round_no = 0
        self.target_no = 3
        self.width = 8
        self.ROUND_MAX = 50
        self.TARGET_MAX = 10 +4 
        self.score = 0
        self.RESPAWN_PROB = 0.5
        self.player_loc = [3,self.width-1]
        if self.width%2 != 0:
            self.TARGET_LOCATION = list(range(0,self.width,2))
            self.target = [(item,9) for item in list(range(0,self.width,2))]
        else:
            self.TARGET_LOCATION = list(range(0,self.width-1,2))
            self.target = [(item,9) for item in list(range(0,self.width-1,2))]
        
        
    # =============================================================================
    # Creating the board by printing line by line
    # type int: width, width of the board
    # rtype list of strs: list of strings to be printed row by row 
    # =============================================================================
    def create_board(self,width):
        rows = ["  ","0|","1|_","2|","3|_"]
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
    
    # =============================================================================
    # Display the shooting range
    # type: None
    # rtype: None
    # =============================================================================
    def display(self):
        rows = self.create_board(self.width)
        
        #Modifying row 1 according to targets
        for item in self.target:
            rows[1] = string_replacement(rows[1],item[0]*2+2,item[1])
        
        # Modifying row 4 according to player
        if self.player_loc[0] == 3:
            rows[4] = string_replacement(rows[4],self.player_loc[1]*2+2,"X")
        else:
            rows[3] = string_replacement(rows[3],self.player_loc[1]*2+2,"X")
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
            self.player_loc[0] +=1
        
        elif command == "NORTH":
            # Only operates if player is in row 3
            if self.player_loc[0] == 3:
                self.player_loc[0] -= 1
            else:
                raise Exception("You are out of the box")
                
        elif command == "WEST":
            self.player_loc[1] -= 1
            
        elif command == "EAST":
            self.player_loc[1] += 1
            
        elif command == "PASS":
            self.player_loc = self.player_loc
            
        elif command == "SHOOT":
            # Detect wether a the player is in row 2 and there is a target infront
            if self.player_loc[0] == 2:
                for item in self.target:
                        if item[0] == self.player_loc[1]:
                            self.target.remove(item)
                            self.score += 1
        else:
            raise Exception("Invalid movement")
            # Restraints:
            # 1. Player loc column no +1 < width
            # 2. Player loc column is > 0(not going left out of the map)
            # 3. Player loc row is not >3(not going below the map)
            # 4. Player loc row = 2 and can only go in even columns
        if self.player_loc[1]+1 > self.width or self.player_loc[1]<0 or self.player_loc[0]>3 or bool(self.player_loc[1]%2!=0 and self.player_loc[0]==2):
            raise Exception("You are out of the box")
             
    
    
    # =============================================================================
    # Obtaining the status of targets from the last round and update them.
    # For all existing targets, reduce the round by 1
    # Targets will disappear after 10 rounds
    # type: None
    # Output: None
    # =============================================================================
    def target_update(self):
        # Generates a empty list, which will be the new targets
        update_target = []
        # For targets in the list, decrease the round number by 1 and append it to the updated targets list
        # If the remaining round =1, it will not be added to the updated list 
        for item in self.target:
            if item[1] != 1:
                update_target.append((item[0],item[1]-1))
        
        # Respawning new targets
        for i in range(len(self.TARGET_LOCATION) - len(self.target)):
            if random.random()<self.RESPAWN_PROB:
                new_target_loc = list(set(self.TARGET_LOCATION)-set([item[0] for item in self.target]))
                new_target_loc = random.choice(new_target_loc)
                update_target.append((new_target_loc,9))
                self.target_no += 1
            
        self.target = update_target
    
    def main(self):
        while(self.round_no < self.ROUND_MAX and self.target_no < self.TARGET_MAX):
            print("Round no: " + str(self.round_no))
            self.round_no += 1
            self.movement("SHOOT")
            self.target_update()
            self.display()
            print("Target respawned: " + str(self.target_no))
            
    # =============================================================================
    # Increment the game round by one round with a given command
    # type string: command
    # rtype tuple of ints,list of tuples of ints,int
    # =============================================================================
    def output(self,command):
        if(self.round_no < self.ROUND_MAX and self.target_no < self.TARGET_MAX):
            print("Round no: " + str(self.round_no))
            self.round_no += 1
            self.movement(command)
            self.target_update()
            self.display()
        return self.player_loc, self.target,self.round_no
    
    # =============================================================================
    # An interactive way to play the game, taking the command from the user
    # =============================================================================
    def interactive(self):
         while(self.round_no < self.ROUND_MAX and self.target_no < self.TARGET_MAX):
            print("Round no: " + str(self.round_no))
            self.display()
            command = input("Please state your next move: ")
            self.round_no += 1
            self.movement(command)
            self.target_update()
            print("Target respawned: " + str(self.target_no))
            

if __name__ == "__main__":
    game = Game()
    game.interactive()
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
