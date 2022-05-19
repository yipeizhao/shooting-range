import random
from test_game import Game


def bot(loc, target, round_no):
    player_row = loc[0]
    player_col = loc[1]
    target_col = [item[0][1] for item in target]
    # Scan all targets and drop unreachable targets
    # If distance + 3(NORTH and SHOOT) > remaining round, classify it as an invalid target and remove it from the list
    for item in target:
        if (abs(item[0][1] - player_col) +3 > item[1]):
            target.remove(item)
            
    # Case 1
    if len(target) == 0:
        return "PASS"

    # Case 2 & 3
    if player_col in target_col:
        if player_row == 0:
            return "NORTH"
        if player_row == 1:
            return "SHOOT"

    # Case 4
    if player_row == 1 and player_col not in target_col:
        return "SOUTH"
    

    
    
    # Determine the position of player respect to targets
    # Append the players' col to the target col's list and sort
    # Case 5 example:
    #   2 4
    # 0
    
    # Case 6 example:
    # 0 2 
    #     4
    
    # Case 7 example:
    # 0   4
    #  1
    
    # Case 8 example:
    # 0   4
    #    3
    
    # Case 9 example:
    # 0   4
    #   2
    target_col.append(player_col)
    target_col = sorted(target_col)
    index = target_col.index(player_col)
    # Case 5
    if index == 0:
        return "EAST"
    # Case 6
    elif index == (len(target_col) - 1):
        return "WEST"
    # Case 7
    elif player_col - target_col[index - 1] < target_col[index + 1] - player_col:
        return "WEST"
    # Case 8
    elif player_col - target_col[index - 1] > target_col[index + 1] - player_col:
        return "EAST"
    # Case 9
    else:
        return random.choice(["EAST", "WEST"])


game = Game()
game.display()
while not game.terminate:
    print(game.output())
    output = game.output()
    command = bot(output[0], output[1], output[2])
    print(command)
    game.movement(command)
    game.display()
