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
read -p "Input text: " foo
echo $foo

read -s -p "Input password: " bar
echo $bar
END

awk '{ print $1"-"$2 }' test.txt
awk '/foo/' test.txt
awk '$2 == "bar" { print $1 }' test.txt
