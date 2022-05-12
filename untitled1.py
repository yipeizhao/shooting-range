import numpy as np
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
        self.target = [((0,0),9),((0,2),9),((0,4),1)]
        self.respawn_prob = 0.2
    def main(self):
        while(self.round_no <3):
            self.display()
            self.round_no += 1
            self.target = self.target_update()
    
    #Display the shooting range
    def display(self):
        rows = ["  0_1_2_3_4|","0|         |","1|_   _   _|","2| |_| |_| |","3|_________|"]
        
        rows1 = list(rows[1])
        for item in self.target:
            rows1[2+2*item[0][1]] = str(item[1])
        
        rows[1] = "".join(rows1)
        
        for item in rows:
            print(item)
        
    
    #  Obtaining the status of targets from the last round and update them.
    #  For all existing targets, reduce the round by 1
    #  Targets will disappear after 10 rounds
    #  Input:list, status of last round
    #  Output:list, status of the current round
    def target_update(self):
        new_target = []
        for item in self.target:
            if item[1] != 1:
                new_target.append((item[0],item[1]-1))
        # for i in range(3 - len(self.target)):
        #     if np.random.binomial(0.2):
                
        return new_target
    
    
if __name__ == "__main__":
    game = Game()
    print(game.main())