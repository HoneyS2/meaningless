#import datetime
#import time
import math

#print("Hello, world!")

'''
now = datetime.datetime.now()
print(now)
print('{:%Y-%m-%d %H:%M:%S}'.format(now))
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

def foo():
    pass
foo()
