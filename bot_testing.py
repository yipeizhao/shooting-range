from Gamev2 import Game
from smart_bot import bot
import pandas as pd
game = Game()
results = []
for i in range(10):
    while not game.terminate:
        output = game.output()
        command = bot(output[0], output[1], output[2])
        game.movement(command)
    results.append(game.result())
    game.reset()
    
df = pd.DataFrame(columns = {"Valid":"",
                          "Score":"",
                          "Targets spawned":"",
                          "Hit":"",
                          "Miss":""})
for index,val in enumerate(results):
    df.loc[index] = val
print(df)