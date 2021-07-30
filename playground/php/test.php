<?php
# 1. Hello, world!
//echo("Hello, world!");

# 2. Generate a random int
//$foo = rand(0, 1);
//echo $foo;

# 3. Removes duplicate values
/*
$foo1 = array('A', 'B', 'C', 'D', 'E', 'B', 'C');
$bar1 = array_unique($foo1);
print_r($bar1);
echo PHP_EOL;
$foo2= array(2, 3, 4, 5, 4, 3, 2, 1);
$bar2 = array_unique($foo2);
print_r($bar2);
*/

# 4. String test
/*
$str1 = "foo";
$str2 = "bar";
$str3 = "{$str1}, {$str2}!";
$str4 = $str1.", ".$str2."!";
print_r($str3);
print_r(PHP_EOL);
print_r($str4);
*/

# 5. var_dump
/*
$foo = array("hello", "world");
print_r($foo);
var_dump($foo);
*/

# 6. implode, explode
/*
$foo = ['a', 'b', 'c', 'd', 'e'];
$bar = implode(',', $foo);
print_r($bar);
echo PHP_EOL;
$foe = $bar;
$baz = explode(',', $foe);
print_r($baz);
*/

# 7. Spaceship operator
/*
$foo = 100;
$bar = 90;
print_r($foo<=>$bar);
*/

# 8. Null coalescing operator
//$bar = 1;
$foo = $bar ?? 100;
print_r($foo);
