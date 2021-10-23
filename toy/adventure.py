from time import sleep

print('Once upon a time,')
sleep(1)
print('There was a guy.')
sleep(1)
for i in range(0, 3):
    print('.', end='', flush=True)
    sleep(1.1)
print('')
name = input('=> What is the guy\'s name? : ')
sleep(1)
print('His name was "'+name+'".')
