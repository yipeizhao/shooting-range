def bot(loc, target, round_no):
    command = "NA"
    player_row = loc[0];player_col = loc[1]
    if len(target) == 0:
        command = "PASS"
    if player_col in [item[0][1] for item in target]:
        if player_row == 0:
            command = "NORTH"
        if player_row == 1:
            command = "SHOOT"
    return command


from Gamev2 import Game
game = Game()
while (game.round_no<game.ROUND_MAX and game.target_no<game.TARGET_MAX):
    print(game.output())
    output = game.output()
    print(game.display())
    game.movement(bot(output[0],output[1],output[2]))