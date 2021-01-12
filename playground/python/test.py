import datetime

print("Hello, world!")

now = datetime.datetime.now()
print(now)
print('{:%Y-%m-%d %H:%M:%S}'.format(now))
