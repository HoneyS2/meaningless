#import datetime
import time

#print("Hello, world!")

'''
now = datetime.datetime.now()
print(now)
print('{:%Y-%m-%d %H:%M:%S}'.format(now))
'''

start = time.time()
for i in range(100):
    print("Hello, world!")
end = time.time()
print(end - start)
