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
sleep(1)
print('1. Teleport')
print('2. Time travel')
while True:
    try:
        power = int(input('=> What is the guy\'s super power? : '))
        if power == 1:
            power_str = 'Teleport'
            break;
        elif power == 2:
            power_str = 'Time travel'
            break;
        else:
            print(str(power)+' is not an option yet.')
    except ValueError:
        print('Wrong answer')
sleep(1)
print(name+' has a super power. That\'s '+power_str+'.')
