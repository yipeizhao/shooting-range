from Gamev2 import Game
import unittest
import random

game = Game()


class Test(unittest.TestCase):
    # Test target creation
    def test_target(self):
        game.reset()
        r_row = random.randint(0,game.width)
        r_col = 3
        r_remaining_round = random.randint(1,9)
        target_arg = ((r_row,r_col), r_remaining_round)
        target = game.Target(target_arg[0],target_arg[1])
        self.assertEqual((r_row,r_col),target.loc)
        self.assertEqual(r_row,target.row)
        self.assertEqual(r_col,target.col)
        self.assertEqual(r_remaining_round,target.remaining_round)
        
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
        
if __name__ == "__main__":
    unittest.main()