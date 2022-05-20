import random
# Description
# loc[0]=player row
# loc[1]=player col
# target[i][0][0] = target row
# target[i][0][1] = target col
# target[i][1] = remaining round
def random_bot(loc, target, round_no):
    return random.choice(["NORTH","WEST","EAST","SOUTH","SHOOT","PASS"])


def basic_bot(loc, target, round_no):
    # Case 1
    if len(target) == 0:
        return "PASS"
    
    player_row = loc[0]
    player_col = loc[1]
    target_col = [item[0][1] for item in target]


    # Case 2 & 3
    for item in target:
        if player_col == item[0][1]:
            # Case 3
            if abs(player_row - item[0][0]) == 2:
                return "SHOOT"
            else:
                # Case 2.1
                if item[0][0] == 3:
                    return "NORTH"
                # Case 2.2
                elif item[0][0] == -3:
                    return "SOUTH"
                

    # if player_col in target_col:
    #     if player_row == 0:
    #         return "NORTH"
    #     if player_row == 1:
    #         return "SHOOT"

    # Case 4
    if player_col not in target_col:
        # Case 4.1
        if player_row == 1:
            return "SOUTH"
        # Case 4.2
        elif player_row == -1:
            return "NORTH"
        
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

def smart_bot(loc, target, round_no):
    player_row = loc[0]
    player_col = loc[1]
    target_col = [item[0][1] for item in target]
    # Case 1 & strategy 2
    if len(target) == 0:
        if player_row == 0:
            return "PASS"
        elif player_row == 1:
            return "SOUTH"
        elif player_row == -1:
            return "NORTH"
        
    # Strategy 1
    # Scan all targets and drop unreachable targets
    # If distance + 3(NORTH and SHOOT) > remaining round, classify it as an invalid target and remove it from the list
    for item in target:
        if (abs(item[0][1] - player_col) +3 > item[1]):
            target.remove(item)
            
    # Case 2 & 3
    for item in target:
        if player_col == item[0][1]:
            # Case 3
            if abs(player_row - item[0][0]) == 2:
                return "SHOOT"
            else:
                # Case 2.1
                if item[0][0] == 3:
                    return "NORTH"
                # Case 2.2
                elif item[0][0] == -3:
                    return "SOUTH"

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