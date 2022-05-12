import numpy as np
import random
# Taking the command from the user
def movement(command):
    return 0


class Game():
    #  Initialise the game
    #  Starting the gam with round 0
    #  Initialising targets
    #  Initlalising resawpn probability, for an eliminated target, the target will respawn with this prob
    def __init__(self):
        self.round_no = 0
        self.target = [(0,9),(2,1),(4,1)]
        self.respawn_prob = 0.4
        self.TARGET_LOCATION = [0,2,4]
        
        
        
    def main(self):
        while(self.round_no <50):
            self.display()
            self.round_no += 1
            self.target = self.target_update()
    
    #   Display the shooting range
    def display(self):
        rows = ["  0_1_2_3_4|","0|         |","1|_   _   _|","2| |_| |_| |","3|_________|"]
        
        #   Modifying row 1 according to targets
        rows1 = list(rows[1])
        for item in self.target:
            rows1[2+2*item[0]] = str(item[1])
        rows[1] = "".join(rows1)
        
        for item in rows:
            print(item)
        
    
    #  Obtaining the status of targets from the last round and update them.
    #  For all existing targets, reduce the round by 1
    #  Targets will disappear after 10 rounds
    #  Input:list, status of last round
    #  Output:list, status of the current round
    def target_update(self):
        #   Generates a empty list, which will be the new targets
        update_target = []
        #   For targets in the list, decrease the round number by 1 and append it to the updated targets list
        #   If the remaining round =1, it will not be added to the updated list 
        for item in self.target:
            if item[1] != 1:
                update_target.append((item[0],item[1]-1))
        
        #   Respawning new targets
        for i in range(3 - len(self.target)):
            if random.random()<0.2:
                new_target_loc = list(set(self.TARGET_LOCATION)-set([item[0] for item in self.target]))
                new_target_loc = random.choice(new_target_loc)
                update_target.append((new_target_loc,9))
                
        return update_target
    
    
if __name__ == "__main__":
    game = Game()
    print(game.main())