
import random



class Game():
    # =============================================================================
    # Initialise the game
    # round_no: int, starting the game with round number = 0
    # target_no: int, starting the game with target number = 3. Increments by 1 whenever a target is spawned.
    # ROUND_MAX: int, game will stop if reaches max rounds
    # TARGET_MAX: int, game will stop if reaches max targets. The game will immedaitely stop after the target respawn so we need to add one
    # score: int, score earned
    # target: list of tuples, targets' location and number of remaining rounds
    # RESPWAN_PROB: float < 1; probability of targets respwan
    # TARGET_LOCATION: list of ints, all potential location of targets
    # player_loc: list, current location of the player, starting at the bottom-right
    # =============================================================================
    def __init__(self):
        self.round_no = 0
        self.target_no = 3
        self.ROUND_MAX = 50
        self.TARGET_MAX = 10 +4 
        self.score = 0
        self.target = [(0,9),(2,9),(4,9)]
        self.RESPAWN_PROB = 0.5
        self.TARGET_LOCATION = [0,2,4]
        self.player_loc = [3,4]
        
            
    # =============================================================================
    # Display the shooting range
    # type: None
    # rtype: None
    # =============================================================================
    def display(self):
        rows = ["  0_1_2_3_4|","0|         |","1|_   _   _|","2| |_| |_| |","3|_________|"]
        
        #   Modifying row 1 according to targets
        for item in self.target:
            rows[1] = string_replacement(rows[1],item[0]*2+2,item[1])
        
        #   Modifying row 4 according to player
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
            self.player_loc[0] -= 1
        elif command == "WEST":
            self.player_loc[1] -= 1
        elif command == "EAST":
            self.player_loc[1] += 1,
        elif command == "PASS":
            self.player_loc = self.player_loc
        elif command == "SHOOT":
            #   Detect wether a the player is in row 2 and there is a target infront
            if self.player_loc[0] == 2:
                for item in self.target:
                        if item[0] == self.player_loc[1]:
                            self.target.remove(item)
                            self.score += 1
        else:
            raise Exception("Invalid movement")
             
    
    
    # =============================================================================
    # Obtaining the status of targets from the last round and update them.
    # For all existing targets, reduce the round by 1
    # Targets will disappear after 10 rounds
    # type: None
    # Output: None
    # =============================================================================
    def target_update(self):
        #   Generates a empty list, which will be the new targets
        update_target = []
        #   For targets in the list, decrease the round number by 1 and append it to the updated targets list
        #   If the remaining round =1, it will not be added to the updated list 
        for item in self.target:
            if item[1] != 1:
                update_target.append((item[0],item[1]-1))
        
        #   Respawning new targets
        for i in range(2 - len(self.target)):
            if random.random()<self.RESPAWN_PROB:
                new_target_loc = list(set(self.TARGET_LOCATION)-set([item[0] for item in self.target]))
                new_target_loc = random.choice(new_target_loc)
                update_target.append((new_target_loc,9))
                self.target_no += 1
            
        self.target = update_target
    
    def main(self):
        while(self.round_no < self.ROUND_MAX and self.target_no < self.TARGET_MAX):
            print("Round no" + str(self.round_no))
            self.display()
            self.round_no += 1
            self.target_update()
            self.movement("SHOOT")
            print("Target respawned" + str(self.target_no))
            
            
            
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

if __name__ == "__main__":
    game = Game()
    print(game.main())
