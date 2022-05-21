from Gamev2 import Game
from bots import basic_bot, smart_bot
import unittest
import random

game = Game()


class Test(unittest.TestCase):
    # Test target
    def test_target_creation(self):
        for i in range(50):
            game.reset()
            r_row = random.randint(0,game.WIDTH)
            r_col = 3
            r_remaining_round = random.randint(2,9)
            target_arg = ((r_row,r_col), r_remaining_round)
            target = game.Target(target_arg[0],target_arg[1])
            self.assertEqual((r_row,r_col),target.loc)
            self.assertEqual(r_row,target.row)
            self.assertEqual(r_col,target.col)
            self.assertEqual(r_remaining_round,target.remaining_round)
        
    # Target expiration
    def test_target_expiration(self):
        game.reset()
        r_row = random.randint(0,game.WIDTH)
        r_col = 3
        game.target = [game.Target((r_row,r_col),2)]
        game.movement("PASS")
        output = game.output()
        self.assertIn(((r_row,r_col),1), output[1])
        game.movement("PASS")
        output = game.output()
        self.assertNotIn(((r_row,r_col),0), output[1])
        
        
        
    # Test invalid command
    def test_invalid_command(self):
        game.reset()
        command = "Hello world"
        game.movement(command)
        self.assertEqual(-3, game.score)
        game.movement(command)
        self.assertEqual(-6, game.score)
        game.movement("PASS")
        self.assertEqual(-6, game.score)
        
        
    # Test movements
    def test_movements(self):
        game.reset()
        game.movement("EAST")
        self.assertTrue(game.invalid)
        self.assertEqual(-3, game.score)
        cur_loc = (game.player.row, game.player.col)
        game.movement("WEST")
        game.movement("EAST")
        self.assertEqual(cur_loc, (game.player.row, game.player.col))
        self.assertEqual(-3 ,game.score)
        if game.WIDTH % 2 == 0:
            game.movement("WEST")
            game.movement("NORTH")
            game.movement("SOUTH")
            self.assertEqual(-3 ,game.score)
            self.assertEqual(cur_loc, (game.player.row, game.player.col))
        else:
            game.movement("NORTH")
            game.movement("SOUTH")
            self.assertEqual(-3 ,game.score)
            self.assertEqual(cur_loc, (game.player.row, game.player.col))
    
    # Test shooting command
    def test_shoot(self):
        game.reset()
        if game.WIDTH%2 == 0:
            game.target = [game.Target((3,game.WIDTH-2),10)]
            game.movement("WEST")
            game.movement("SHOOT")
            self.assertEqual(-3, game.score)
            game.movement("NORTH")
            game.movement("SHOOT")
            self.assertEqual(-2, game.score)
            
            game.reset()
            game.target = [game.Target((3,game.WIDTH-2),1)]
            game.movement("SHOOT")
            self.assertEqual(-3, game.score)
            game.movement("NORTH")
            game.movement("SHOOT")
            self.assertEqual(-6, game.score)
            
        else:
            game.target = [game.Target((3,game.WIDTH-1),10)]
            game.movement("SHOOT")
            self.assertEqual(-3, game.score)
            game.movement("NORTH")
            game.movement("SHOOT")
            self.assertEqual(-2, game.score)
    
        
    # Test game terminates 
    def test_terminate(self):
        game.reset()
        game.round_no = game.ROUND_MAX
        game.movement("PASS")
        self.assertTrue(game.terminate)
        
        game.reset()
        for i in range(game.ROUND_MAX):
            game.movement("PASS")
        self.assertTrue(game.terminate)
           
        game.reset()
        game.target_no = game.TARGET_MAX
        for i in range(11):
            game.movement("PASS")
        self.assertTrue(game.terminate)
        

    # Bot testing
    def test_bots(self):
        for i in range(10):
            game.reset()
            while not game.terminate:
                output = game.output()
                command = smart_bot(*output)
                game.movement(command)
if __name__ == "__main__":
    unittest.main()