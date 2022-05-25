#!/bin/bash

: <<END
echo "Hello, world!"
END

: <<END
foo="bar"
echo $foo
END

: <<END
if [ -z ${1} ]; then
        set "bar"
fi

foo=$1
echo $foo
END

: <<END
if [ $# -eq 0 ]; then
        echo "No arguments"
else
        echo "The total number of arguments is ${#}"
fi
END

: <<END
read -p "Input text: " foo
echo $foo

read -s -p "Input password: " bar
echo $bar
END

: <<END
awk '{ print $1"-"$2 }' test.txt
awk '/foo/' test.txt
awk '$2 == "bar" { print $1 }' test.txt
awk 'NR == 1 { print $0; exit }' test.txt
awk '{ print $0 }' test.txt | sort -r
awk '{ sum += $3 } END { print "Sum: "sum }' test.txt
awk 'length($3) < 2 { print $0 }' test.txt
END

: <<END
sed 's/10/100/' test.txt
sed '/foo/d' test.txt
sed 'a\\' test.txt
sed '/^$/d' test.txt
sed '3q' test.txt
sed '2d;4d;5d' test.txt
END

: <<END
sed 'c\\Ha-ha!' test.txt
END

: <<END
foo=$(uname)
echo $foo
END

: <<END
bar="a b c d e"
for foo in $bar
do
    echo $foo
done
END

: <<END
array=(
    'Hello::world'
)

for index in "${array[@]}"; do
    KEY="${index%%::*}"
    VALUE="${index##*::}"
    echo "$KEY, $VALUE!"
done
END

read -p "Input integer A: " foo
read -p "Input integer B: " bar

if [ $foo -eq $bar ]; then
    echo "${foo} and ${bar} are EQual"
fi

if [ $foo -ne $bar ]; then
    echo "${foo} and ${bar} are Not Equal"
fi

if [ $foo -gt $bar ]; then
    echo "${foo} is Greater Than ${bar}"
fi

if [ $foo -ge $bar ]; then
    echo "${foo} is Greater than or Equal to ${bar}"
fi

if [ $foo -lt $bar ]; then
    echo "${foo} is Less Than ${bar}"
fi

if [ $foo -le $bar ]; then
    echo "${foo} is Less than or Equal to ${bar}"
fi
