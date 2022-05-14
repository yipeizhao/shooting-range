class Game:
    def __init__(self):
        self.round_no = 0
        self.target_no = 3
        self.width = 5
        self.ROUND_MAX = 50
        self.TARGET_MAX = 10 +4 
        self.RESPAWN_PROB = 0.5
        self.score = 0
        self.player = self.Player([3,self.width-1])
        if self.width%2 != 0:
            self.TARGET_LOCATION = list(range(0,self.width,2))
            self.target = [((item,0),9) for item in list(range(0,self.width,2))]
            self.target = [self.Target(item[0],item[1]) for item in self.target]
        else:
            self.TARGET_LOCATION = list(range(0,self.width-1,2))
            self.target = [((item,0),9) for item in list(range(0,self.width-1,2))]
            self.target = [self.Target(item[0],item[1]) for item in self.target]
    
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
    
    def display(self):
        rows = self.create_board(self.width)
        #Modifying row 1 according to targets
        for item in self.target:
            rows[1] = string_replacement(rows[1],item.col*2+2,item.remaining_round)
        
        # Modifying row 4 according to player
        if self.player.row == 3:
            rows[4] = string_replacement(rows[4],self.player.col*2+2,"X")
        else:
            rows[3] = string_replacement(rows[3],self.player.col*2+2,"X")
        for item in rows:
            print(item)
        print("")    
        print("Score: "+str(self.score))
        print("")
    
    class Target(object):
        def __init__(self,loc,remaining_round):
            self.loc = loc
            self.row = self.loc[0]
            self.col = self.loc[1]
            self.remaining_round = remaining_round
            
        
    class Player(object):
        def __init__(self,init_loc):
            self.init_loc = init_loc
            self.row = init_loc[0]
            self.col = init_loc[1]
        
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
game.display()