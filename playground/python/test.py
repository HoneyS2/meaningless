#import datetime
#import time
#import math

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

for i in range(1, 11):
    print(i)
