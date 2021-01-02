import random
from sys import argv
from time import sleep

a = random.sample(range(1, 46), 6)
a.sort()

if len(argv) > 1:
    if argv[1] == 'tv':
        for i in range(0, 6):
            print(a[i])
            if i != 5:
                sleep(3)
            else:
                break
else:
    print(a)
