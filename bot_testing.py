from Gamev2 import Game
from bots import *
import pandas as pd

total_game = 10
game = Game()
results = [[], [], []]

# Simulation game n times
for i in range(total_game):
    while not game.terminate:
        output = game.output()
        command = random_bot(*output)
        game.movement(command)
    results[0].append(game.result())
    game.reset()

    while not game.terminate:
        output = game.output()
        command = basic_bot(*output)
        game.movement(command)
    results[1].append(game.result())
    game.reset()

    while not game.terminate:
        output = game.output()
        command = smart_bot(*output)
        game.movement(command)
    results[2].append(game.result())
    game.reset()

# Record results for every bot
random = pd.DataFrame(columns={"Invalid": "",
                               "Score": "",
                               "Targets_spawned": "",
                               "Hit": "",
                               "Miss": ""})

# Copy the dataframe
basic = random.copy()
smart = random.copy()

for index, val in enumerate(results[0]):
    random.loc[index] = val
for index, val in enumerate(results[1]):
    basic.loc[index] = val
for index, val in enumerate(results[2]):
    smart.loc[index] = val

# Aggregating the results
res = pd.DataFrame(columns={"Bot": "",
                            "Total games":"",
                            "Invalid games": "",
                            "Score": "",
                            "Targets_spawned": "",
                            "Hit": "",
                            "Miss": ""})

res.loc[0] = ["Random",total_game, list(random.Invalid).count(True),
              sum(random.Score), sum(random.Targets_spawned),
              sum(random.Hit), sum(random.Miss)]
res.loc[1] = ["Basic",total_game, list(basic.Invalid).count(True),
              sum(basic.Score), sum(basic.Targets_spawned),
              sum(basic.Hit), sum(basic.Miss)]
res.loc[2] = ["Smart",total_game, list(smart.Invalid).count(True),
              sum(smart.Score), sum(smart.Targets_spawned),
              sum(smart.Hit), sum(smart.Miss)]
print(res)
