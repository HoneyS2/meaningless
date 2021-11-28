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
/*
//$bar = 1;
$foo = $bar ?? 100;
print_r($foo);
*/

# 9. array_chunk
/*
$foo = ['a', 'b', 'c', 'd', 'e'];
foreach (array_chunk($foo, 2) as $key => $value) {
    print_r($value);
}
*/

# 10. in_array
/*
$foo = ['a', 'b', 'c'];
$bar = in_array('a', $foo);
var_dump($bar);
*/

# 11. function arguments
/*
function foo($a, $b=null)
{
    print_r(func_get_args());
}
foo("a");
*/

# 12. hash
/*
$foo = hash('sha256', "bar".time());
print_r($foo);
*/

# 13. Millisecond
//print_r(round(microtime(true) * 1000));

# 14. filter_var
# ref. https://www.php.net/manual/en/filter.filters.validate.php
/*
$foo = "https://www.php.net";
print_r(filter_var($foo, FILTER_VALIDATE_URL));
*/

# 15. http_build_query
/*
$foo = ["key1" => "value1", "key2" => "value2"];
print_r(http_build_query($foo));
print_r(PHP_EOL);
print_r(http_build_query($foo, '', ','));
print_r(PHP_EOL);
*/

# 16. array_multisort with array_column
/*
$foo = [
    [
        'id' => 1,
        'score' => 90
    ],
    [
        'id' => 2,
        'score' => 100
    ],
    [
        'id' => 3,
        'score' => 95
    ],
];
print_r($foo);
array_multisort(array_column($foo, 'score'), SORT_DESC, SORT_REGULAR, $foo);
print_r($foo);
*/

# 17. sort
/*
$foo = [1, 5, 3, 2, 4];
$bar = ['a', 'e', 'c', 'b', 'd'];
print_r($foo);
print_r($bar);
sort($foo);
sort($bar);
print_r($foo);
print_r($bar);
*/

# 18. strpos
/*
$foo = "Hello";
if (strpos("Hello, world!", $foo) !== false) {
    print_r("Found!");
} else {
    print_r("Not found.");
}
*/

# 19. date with strtotime
/*
date_default_timezone_set('Asia/Seoul');
$foo = date("Y-m-d H:i:s", time());
print_r(date("Y-m-d H:i:s", strtotime($foo." +1 day")));
*/

# 20. Get the last day of the month
//print_r(date("t"));

# 21. strtolower, strtoupper
$foo = "Hello, world!";
print_r(strtolower($foo));
print_r(PHP_EOL);
print_r(strtoupper($foo));
