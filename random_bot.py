import random
def bot(loc, target, round_no):
    return random.choice(["NORTH","WEST","EAST","SOUTH","SHOOT","PASS"])


from Gamev2 import Game
game = Game()
while (game.round_no<game.ROUND_MAX and game.target_no<game.TARGET_MAX):
    print(game.output())
    output = game.output()
    print(game.display())
    command = bot(output[0],output[1],output[2])
    print(command);print("")
    game.movement(command)
