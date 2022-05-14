class Game():
    def __init__(self):
        self.round_no = 0
        self.target_no = 3
        self.width = 8
        self.ROUND_MAX = 50
        self.TARGET_MAX = 10 +4 
        self.score = 0
        self.RESPAWN_PROB = 0.5
        self.player = self.Player([3,self.width-1])
    
    class Target(loc,remaining_round):
        def __init__(self,loc,remaining_round):
            self.loc = loc
            self.remaining_round = remaining_round
            
        
    class Player(init_loc):
        def __init__(self,init_loc):
            self.init_loc = init_loc