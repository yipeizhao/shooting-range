import random

# Description
# loc[0]=player row
# loc[1]=player col
# target[i][0][0] = target row
# target[i][0][1] = target col
# target[i][1] = remaining round

# =============================================================================
# Returns a random valid command
# type: list of ints
# type: list of tuples and an int
# type: int
# rtype: str
# =============================================================================
def random_bot(loc, target, round_no):
    return random.choice(["NORTH", "WEST", "EAST", "SOUTH", "SHOOT", "PASS"])

# =============================================================================
# Returns a rational command
# type: list of ints
# type: list of tuples and an int
# type: int
# rtype: str
# =============================================================================
def basic_bot(loc, target, round_no):
    # Case 1
    # Case classification can be found in doc
    if len(target) == 0:
        return "PASS"
    
    # Recording the current player loc and targets loc
    player_row = loc[0]
    player_col = loc[1]
    target_col = [item[0][1] for item in target]

    # Case 2 & 3
    for item in target:
        # If a target is aligned with player
        if player_col == item[0][1]:
            # Case 3
            if abs(player_row - item[0][0]) == 2:
                return "SHOOT"
            else:
                return "NORTH"

    # Case 4
    # No target is aligned and player is in booth
    if (player_col not in target_col) and (player_row == 1):
        return "SOUTH"

    # Determines the position of player respect to targets
    # Append the players' col to the target col's list and sort the list
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

# =============================================================================
# Returns a smarter command
# type: list of ints
# type: list of tuples and an int
# type: int
# rtype: str
# =============================================================================
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

    # Case 2 & 3
    for item in target:
        # If a target is aligned with player
        if player_col == item[0][1]:
            # Case 3
            if abs(player_row - item[0][0]) == 2:
                return "SHOOT"
            else:
                return "NORTH"
            
    # Strategy 1
    # Scan all targets and drop unreachable targets
    # If distance + 3(NORTH and SHOOT) > remaining round, classify it as an invalid target and remove it from the list
    for item in target:
        if (abs(item[0][1] - player_col) + 3 > item[1]):
            target.remove(item)

    # Case 4
    # No target is aligned and player is in booth
    if (player_col not in target_col) and (player_row == 1):
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
