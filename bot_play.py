from Gamev2 import Game
from bots import *
game = Game()
game.display()
while not game.terminate:
	output = game.output()
	command = basic_bot(*output)
	print(command)
	game.movement(command)
	game.display()