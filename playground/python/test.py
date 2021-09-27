#import calendar
#import datetime
#import time
#import math
#import os
#import re
#import json
#from urllib.request import urlopen
#from decimal import *
#import random
#import textwrap
#import pprint
#import sys
#import logging
#import statistics
#import glob
#import gzip

#print("Hello, world!")

'''
now = datetime.datetime.now()
print(now)
print('{:%Y-%m-%d %H:%M:%S}'.format(now))

today = datetime.date.today()
print(today)
print(today.year)
print(today.month)
print(today.day)
print(today.weekday())
#print(today.toordinal())
#print(datetime.date.fromordinal(737971))

foo = datetime.timedelta(days=1, minutes=5)
print(foo)
print(foo.total_seconds())
bar = now + foo
print(bar)

foe = datetime.timedelta.max
baz = datetime.timedelta.min
print(foe)
print(baz)
'''

'''
start_date = datetime.date(2021, 1, 1)
end_date = datetime.date(2022, 1, 1)
delta = datetime.timedelta(days=1)
while start_date <= end_date:
    print(start_date.strftime("%Y-%m-%d"))
    start_date += delta
'''

'''
now = datetime.datetime.now()
year = int('{:%Y}'.format(now))
month = int('{:%-m}'.format(now))
calendar.setfirstweekday(6)
calendar.prmonth(year, month)
'''

'''
start = time.time()
for i in range(100):
    print("Hello, world!")
end = time.time()
print(end - start)
'''

'''
a_list = ['a', 'b', 'c', 'd']
b_tuple = (1,2,3,4)
c_dictionary = {'a': 'apple', 'b': 'banana', 'c': 3}
d_set = set([1,3,2])
e_set2 = set('Hello, world!')
print(a_list)
print(b_tuple)
print(c_dictionary)
print(d_set)
print(e_set2)
'''

'''
print(dir(math))
print(math.pow(2, 2))
print(math.fabs(-3))
print(math.factorial(5))
print(math.ceil(1.1))
print(math.floor(1.9))
'''

'''
# for 1
for i in range(1, 11):
    print(i)

# for 2
foo = {1: 'a', 2: 'b', 3: 'c'}
for key, value in foo.items():
    print(key, value)

# for 3
bar = [1, 3, 5, 7, 9]
for i in bar:
    print(i+1)

# for 4
foe = [(1, 2), (3, 4), (5, 6)]
for i, j in foe:
    print(i*j)

# for 5
questions = ['name', 'job']
answers = ['foo', 'bar']
for q, a in zip(questions, answers):
    print('What\'s your {0}?  It\'s {1}.'.format(q, a))

# for 6
foo = [-1, 0, 1, 2, 3.33, 4, 5, 6.0, 7, 8, 99.9, float('NaN')]
bar = []
for value in foo:
    if not math.isnan(value):
        bar.append(value)
print(bar)
'''

'''
foo = input('Input text: ')
print('Result: '+foo)
bar = int(input('Input num: '))
print(bar, 'square:', math.pow(bar, 2))
'''

'''
foo = int(input('Input num for multiplication table: '))
for i in range(1,10):
    print(foo, '*', i, ':', i*foo)
'''

'''
foo = int(input('Input num: '))
if foo < 10:
    print('Lower than 10')
elif foo == 10:
    print('It\'s 10')
else:
    print('Higher than 10')
'''

'''
def foo(n):
    bar, i = 0, 1
    while i <= n:
        bar += i
        i+=1
    return bar

print(foo(100))
'''

'''
def foo(str):
    print(str[3:6])
foo('abcdefg')
'''

'''
print(eval("11111"+"22222"))
print(eval("11111+22222"))
'''

'''
print(len('foo'))
print(len([1, 2, 3, 4, 5]))
'''

'''
def make_incrementor(n):
    return lambda x: x + n
foo = make_incrementor(1)
print(foo(0))
print(foo(1))
print(foo(2))
print(foo(3))
'''

'''
print(ord('a'))
print(chr(97))
'''

'''
foo = ['e', 'd', 'c', 'b', 'a']
print(foo)
print(sorted(foo))

bar = [1, 2, 3, 4, 5]
print(sorted(bar, reverse=True))
'''

'''
print(round(1.5))
'''

'''
foo = [1, 2, 3, 4, 5]
print(min(foo))
print(min(6, 7, 8, 9, 10))
'''

'''
print(divmod(5, 2))
'''

'''
print(oct(8))
print(hex(16))
print(format(8, '#o'), format(8, 'o'))
print(format(16, '#x'), format(16, 'x'))
'''

'''
print(any([0, ""]))
print(any([0, 1]))
print(all([0, ""]))
print(all([0, 1]))
print(all([1]))
'''

'''
foo = iter(range(3))
print(next(foo))
print(next(foo))
print(next(foo))
'''

'''
foo = 'bar'
print(id(foo))
'''

'''
print(list(range(1, 6)))
print(list([1, 2, 3, 4, 5]))
'''

'''
foo = "abc"
bar = "def"
print(list(zip(foo, bar)))
print(list(zip(*zip(foo, bar))))
'''

'''
foo = ['a', 'b', 'c', 'd', 'e']
for key, val in enumerate(foo):
    print(key, val)
'''

'''
foo = str('1234')
bar = 1234

print(foo == bar)
print(type(foo))
print(type(bar))
'''

'''
foo = '한글'
print(repr(foo)+","+ascii(foo))
'''

'''
foo = hash(1)
print(foo)
'''

'''
print(os.getcwd())
print(os.uname())
print(os.getpid())
print(os.getgid())
print(os.getlogin())
print(os.times())
print(os.environ)
os.system('echo "Hello, world!"')
'''

'''
foo = re.search('^[a-zA-Z]+', 'abcd1234')
bar = re.search('[0-9]+', 'abcd1234')
print(foo.group(0))
print(bar.group(0))

foe = re.sub('[!]+', '~', 'Hello, world!')
print(foe)
baz = re.findall('^[a-zA-Z]+', 'abcd1234')
print(baz)
'''

'''
foo = ['a', 'b', 'c']
print(foo)
foo.append('d')
print(foo)
foo.pop()
print(foo)
foo.extend(['e', 'f'])
print(foo)
foo.pop()
print(foo)
foo.insert(0, 'z')
print(foo)
'''

'''
foo = [1, 2, 3, 4, 5]
print(foo)
del foo[3:]
print(foo)
del foo[:]
print(foo)
'''

'''
foo = ['a', 'b', 'c', 'd', ['111','222','333'], 999]
print(foo)
bar = json.dumps(foo)
print(bar)
foe = json.loads(bar)
print(foe)
'''

'''
with urlopen('https://github.com') as response:
    for line in response:
        line = line.decode('utf-8')
        print(line)
'''

'''
foo = round(0.7 * 1.05, 2)
print(foo)
bar = round(Decimal('0.7') * Decimal('1.05'), 2)
print(bar)
'''

'''
while True:
    try:
        num = int(input("Please enter a number: "))
        break
    except ValueError:
        print("That was no valid number.")
    finally:
        print("Ha-Ha!")
'''

'''
foo = random.choice(['a', 'b', 'c', 'd', 'e'])
print(foo)
bar = random.random()
print(bar)
foe = random.sample(range(1, 46), 6)
foe.sort()
print(foe)
baz = random.randrange(1, 11)
print(baz)
'''

'''
input = input("Input numbers: (ex. \"1 2 3 4 5\")\n")
numbers = input.split(" ")
numbers = list(map(int, numbers))
max = max(numbers)
print("Max value is: ", max, sep="")
'''

'''
foo = """Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."""
print(foo, end="")
print('\n')
bar = textwrap.fill(foo, width=65)
print(bar)
'''

'''
foo = ['a', 'b', 'c', 'd', 'e', 'Hello, world!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']
pp = pprint.PrettyPrinter(indent=4)
pp2 = pprint.PrettyPrinter(width=41, compact=True)
pp.pprint(foo)
pp2.pprint(foo)
'''

'''
print(sys.argv)
sys.stderr.write('Goodbye, world!\n')
sys.exit()
print(sys.copyright)
print(sys.byteorder)
print(sys.platform)
print(sys.base_prefix)
print(sys.getdefaultencoding())
print(sys.int_info)
print(sys.float_info)
print(sys.getsizeof(0))
print(sys.getsizeof(1))
print(2**31 - 1, 2**63 - 1, sys.maxsize)
print(sys.maxunicode, format(sys.maxunicode, '#x'))
print(sys.version)
print(sys.api_version)
print(sys.version_info)
print(sys.is_finalizing())
'''

'''
#logging.basicConfig(level=logging.DEBUG)
logging.debug('Debugging information')
logging.info('Informational message')
logging.warning('Warning:config file %s not found', 'foo')
logging.error('Error occurred')
logging.critical('Critical error -- shutting down')
'''

'''
data = [1.25, 2.35, 7.5, 1.95, 6.0, 5.5]
print(statistics.mean(data))
print(statistics.median(data))
print(statistics.variance(data))
'''

'''
foo = glob.glob('*.py')
print(foo)
'''

'''
data = b"abcdefg"
data2 = gzip.compress(data)
print(data2)
data3 = gzip.decompress(data2)
print(data3)
'''

'''
def foo():
    """Hello, world!"""
    pass
print(foo.__doc__)
'''

#print(locals())

'''
def foo():
    print("Hello, world!")

if __name__ == '__main__':
    foo()
'''

class car:
    def __init__(self, name, speed):
        self.name = name
        self.speed = speed

foo = car('UltraSuper', 351)
setattr(foo, 'engine', 'V12')
#print(foo.name, foo.speed)
#print(getattr(foo, 'name'), getattr(foo, 'speed'), getattr(foo, 'price', 600000))
print(foo.__dict__)
print(vars(foo))
