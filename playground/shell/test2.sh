#!/bin/zsh

: <<END
declare -A assoc_array
assoc_array=( a A b B c C )

for key val in "${(@kv)assoc_array}"; do
    echo "$key -> $val"
done
END

declare -A array=( 1 A 2 B 3 C )
declare -a order=( 1 2 3 )
for i in "${order[@]}"
do
    echo "$i: ${array[$i]}"
done
