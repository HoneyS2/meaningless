#!/bin/bash

echo "Hello, world!"

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

read -p "Input text: " foo
echo $foo
