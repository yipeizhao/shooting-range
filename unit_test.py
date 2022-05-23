from Gamev2 import Game
from bots import basic_bot, smart_bot
import unittest
import random

game = Game(width=6)


class Test(unittest.TestCase):
    # Test target
    # Create a random target at random location wtih random remaining round
    # All parameter should match
    def test_target_creation(self):
        for i in range(10):
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
    # Targets will always remain in the current location and remaining round should
    # always dropped by 1 whenever a command is input
    # Target should expire if it's remaining round is 0
    def test_target(self):
        game.reset()
        r_row = random.randint(0,game.WIDTH)
        r_col = 3
        game.reset()
        game.target = [game.Target((r_row,r_col),3)]
        game.movement("PASS")
        self.assertIn(((r_row,r_col),2),game.output()[1])
        
        game.reset()
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
        
        
    # Test borders
    def test_borders(self):
        # Test east border
        game.reset()
        game.movement("EAST")
        self.assertTrue(game.invalid)
        self.assertEqual(-3, game.score)
        
        if game.WIDTH % 2 != 0:
            game.reset()
            game.movement("NORTH")
            self.assertFalse(game.invalid)
            game.movement("EAST")
            self.assertTrue(game.invalid)
        else:
            game.reset()
            game.movement("WEST")
            game.movement("NORTH")
            self.assertFalse(game.invalid)
            game.movement("EAST")
            self.assertTrue(game.invalid)
            
        # Test west border
        game.reset()
        for i in range(game.WIDTH-1):
            game.movement("WEST")
        self.assertFalse(game.invalid)
        game.movement("WEST")
        self.assertTrue(game.invalid)
        
        game.reset()
        for i in range(game.WIDTH-1):
            game.movement("WEST")
        self.assertFalse(game.invalid)
        game.movement("NORTH")
        game.movement("WEST")
        self.assertTrue(game.invalid)
        
        # Test north border
        game.reset()
        if game.WIDTH % 2 != 0:
            game.movement("NORTH")
            self.assertFalse(game.invalid)
            game.movement("NORTH")
            self.assertTrue(game.invalid)
            
            game.reset()
            game.movement("WEST")
            game.movement("NORTH")
            self.assertTrue(game.invalid)
        else:
            game.reset()
            game.movement("WEST")
            game.movement("NORTH")
            self.assertFalse(game.invalid)
            
            game.reset()
            game.movement("NORTH")
            self.assertTrue(game.invalid)
            
        # Test south border
        game.reset()
        game.movement("SOUTH")
        self.assertTrue(game.invalid)
        
    # Test movements
    def test_movements(self):
        game.reset()
        cur_loc = (game.player.row, game.player.col)
        # Should move back to original location
        game.movement("WEST")
        game.movement("EAST")
        self.assertEqual(0 ,game.score)
        self.assertEqual(cur_loc, (game.player.row, game.player.col))
        if game.WIDTH % 2 != 0:
            game.reset()
            game.movement("NORTH")
            game.movement("SOUTH")
            self.assertEqual(0 ,game.score)
            self.assertEqual(cur_loc, (game.player.row, game.player.col))
        else:
            game.reset()
            game.movement("WEST")
            cur_loc = (game.player.row, game.player.col)
            game.movement("NORTH")
            game.movement("SOUTH")
            self.assertEqual(0 ,game.score)
            self.assertEqual(cur_loc, (game.player.row, game.player.col))
    
    # Test shooting command
    def test_shoot(self):
        game.reset()
        if game.WIDTH%2 != 0:
            game.target = [game.Target((3,game.WIDTH-1),10)]
            # Not in booth, should miss
            game.movement("SHOOT")
            self.assertEqual(-3, game.score)
            # In booth, should hit
            game.movement("NORTH")
            game.movement("SHOOT")
            self.assertEqual(-2, game.score)
            
            game.reset()
            game.target = [game.Target((3,game.WIDTH-1),1)]
            # Not in booth, should miss
            game.movement("SHOOT")
            self.assertEqual(-3, game.score)
            # Target expired, should miss
            game.movement("NORTH")
            game.movement("SHOOT")
            self.assertEqual(-6, game.score)
            
        else:
            game.reset()
            game.target = [game.Target((3,game.WIDTH-2),10)]
            # Not in booth, should miss
            game.movement("SHOOT")
            self.assertEqual(-3, game.score)
            # In booth, should hit
            game.movement("WEST")
            game.movement("NORTH")
            game.movement("SHOOT")
            self.assertEqual(-2, game.score)
    
        
    # Test game terminates 
    def test_terminate(self):
        # Reaches round max
        game.reset()
        game.round_no = game.ROUND_MAX
        game.movement("PASS")
        self.assertTrue(game.terminate)
        
        game.reset()
        for i in range(game.ROUND_MAX):
            game.movement("PASS")
        self.assertTrue(game.terminate)
        
        # Reaches target max and no target left
        game.reset()
        game.target_no = game.TARGET_MAX
        game.movement("PASS")
        # A target left, should not terminate
        self.assertFalse(game.terminate)
        for i in range(11):
            game.movement("PASS")
        self.assertTrue(game.terminate)
        

    # Bot testing
    def test_bots(self):
        for i in range(10):
            # Basic bot test
            game.reset()
            while not game.terminate:
                output = game.output()
                command = basic_bot(*output)
                game.movement(command)
                self.assertFalse(game.invalid)
            
            # Smart bot test
            game.reset()
            while not game.terminate:
                output = game.output()
                command = smart_bot(*output)
                game.movement(command)
                self.assertFalse(game.invalid)
        
        
if __name__ == "__main__":
    unittest.main()