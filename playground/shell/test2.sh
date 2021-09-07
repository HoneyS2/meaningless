#!/bin/zsh

declare -A assoc_array
assoc_array=( a A b B c C )

for key val in "${(@kv)assoc_array}"; do
    echo "$key -> $val"
done
