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
print_r(PHP_EOL);
$bar = "aaa@bbb.ccc";
print_r(filter_var($bar, FILTER_VALIDATE_EMAIL));
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

# 17. sort, rsort
/*
$foo = [1, 5, 3, 2, 4];
$bar = ['a', 'e', 'c', 'b', 'd'];
print_r($foo);
print_r($bar);
sort($foo);
sort($bar);
print_r($foo);
print_r($bar);
rsort($foo);
rsort($bar);
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
/*
$foo = "Hello, world!";
print_r(strtolower($foo));
print_r(PHP_EOL);
print_r(strtoupper($foo));
*/

# 22. stristr
/*
$foo = "Hello, world!";
print_r(stristr($foo, " ", true));
print_r(PHP_EOL);
print_r(stristr($foo, " "));
print_r(PHP_EOL);
*/

# 23. htmlspecialchars, htmlspecialchars_decode
/*
$foo = "<h1>Hello, world!</h1>";
$bar = htmlspecialchars($foo);
print_r($bar);
print_r(PHP_EOL);
print_r(htmlspecialchars_decode($bar));
*/

# 24. preg_match, preg_match_all
/*
var_dump(preg_match('/[0-9]{3}/', 'abc123def456', $foo));
print_r(PHP_EOL);
print_r($foo);
print_r(PHP_EOL);
var_dump(preg_match_all('/[0-9]{3}/', 'abc123def456', $bar));
print_r(PHP_EOL);
print_r($bar);
*/

# 25. define
/*
define('FOO', 'bar');
print_r(FOO);
*/

# 26. Ternary operator
/*
$foo = 100;
//$foo = null;
$bar = (empty($foo)) ? 1 : $foo;
print_r($bar);
*/

# 27. nl2br
/*
$foo = 'abc
123
def
456
';
print_r(nl2br($foo));
*/

# 28. substr, iconv_substr
/*
$foo = "가나다라마바사자차카타파하";
print_r(substr($foo, 0, 9));
print_r(PHP_EOL);
print_r(iconv_substr($foo, 0, 9, "utf-8"));
*/

# 29. strip_tags
/*
$foo = "<h1>Hello, world!</h1>";
print_r(strip_tags($foo));
*/

# 30. strlen
/*
$foo = "abc";
print_r(strlen($foo));
*/

# 31. str_split
/*
$foo = "abc";
print_r(str_split($foo));
$bar = 100;
print_r(str_split($bar));
*/

# 32. str_replace
/*
$foo = "Hello, world!";
print_r(str_replace("Hello", "Goodbye", $foo));
*/

# 33. trim
/*
$foo = "   abc   ";
print_r($foo);
print_r(PHP_EOL);
print_r(trim($foo));
*/

# 34. gettimeofday, getdate
/*
print_r(gettimeofday());
print_r(getdate());
*/

# 35. date_default_timezone_get, date_default_timezone_set
# ref. https://www.php.net/manual/en/timezones.php
/*
print_r(date_default_timezone_get());
print_r(PHP_EOL);
print_r(date('Y-m-d H:i:s'));
print_r(PHP_EOL);
date_default_timezone_set('America/New_York');
print_r(date_default_timezone_get());
print_r(PHP_EOL);
print_r(date('Y-m-d H:i:s'));
print_r(PHP_EOL);
date_default_timezone_set('Asia/Seoul');
print_r(date_default_timezone_get());
print_r(PHP_EOL);
print_r(date('Y-m-d H:i:s'));
print_r(PHP_EOL);
*/

# 36. ini_set
# ref. https://www.php.net/manual/en/ini.list.php
/*
ini_set("memory_limit", "512M");
ini_set("memory_limit", "-1");
*/

# 37. array_sum
/*
$foo = [1, 2, 3, 4];
print_r(array_sum($foo));
*/

# 38. array_intersect_assoc
/*
$foo = ['a' => 'apple', 'b' => 'banana', 'c' => 'cat'];
$bar = ['a' => 'apple', 'b' => 'ball', 'c' => 'cherry'];
print_r(array_intersect_assoc($foo, $bar));
*/

# 39. shuffle
/*
$foo = ['a', 'b', 'c', 'd', 'e'];
shuffle($foo);
print_r($foo);
*/

# 40. array_key_exists
/*
$foo = ['hello' => 'world'];
print_r(array_key_exists('hello', $foo));
print_r(PHP_EOL);
print_r(key_exists('hello', $foo)); // Alias
*/

# 41. list
/*
$foo = array('Merry', 'Christmas');
list($a, $b) = $foo;
print_r("$a $b");
*/

# 42. array_reduce
/*
function sub($carry, $item)
{
    $carry -= $item;
    return $carry;
}

$foo = [1, 2, 3, 4, 5];
print_r(array_reduce($foo, "sub"));
print_r(PHP_EOL);
print_r(array_reduce($foo, "sub", 5));
*/

# 43. array_fill
/*
$foo = array_fill(0, 5, "bar");
print_r($foo);
*/

# 44. array_filp
/*
$foo = ['hello' => 'world'];
print_r(array_flip($foo));
*/

# 45. array_rand
/*
$foo = ['a', 'b', 'c'];
print_r(array_rand($foo, 2));
*/

# 46. array_key_first, array_key_last
/*
$foo = ['a' => 'apple', 'b' => 'banana', 'c' => 'cat'];
print_r(array_key_first($foo));
print_r(PHP_EOL);
print_r(array_key_last($foo));
*/

# 47. array_product
/*
$foo = [1, 2, 3, 4, 5];
$bar = [];
print_r(array_product($foo));
print_r(PHP_EOL);
print_r(array_product($bar));
*/

# 48. array_combine
/*
$foo = ['apple', 'banana', 'cat'];
$bar = ['red', 'yellow', 'green'];
print_r(array_combine($foo, $bar));
*/

# 49. array_change_key_case
/*
$foo = ['Apple' => '1', 'Banana' => '2'];
print_r(array_change_key_case($foo));
print_r(array_change_key_case($foo, CASE_UPPER));
*/

# 50. compact
/*
$foo = "1";
$bar = "abc";
print_r(compact(explode(' ', 'foo bar')));
*/

# 51. array_pad
/*
$foo = [1, 2, 3];
print_r(array_pad($foo, 5, 0));
print_r(array_pad($foo, -5, 0));
*/

# 52. array_intersect_key
/*
$foo = ['a' => 1, 'b' => 2, 'c' => 3];
$bar = ['a' => 4, 'e' => 5, 'f' => 6];
print_r(array_intersect_key($foo, $bar));
*/

# 53. current, prev, next, reset
/*
$foo = [1, 2, 3, 4, 5];
print_r(current($foo));
echo PHP_EOL;
print_r(next($foo));
echo PHP_EOL;
print_r(next($foo));
echo PHP_EOL;
print_r(current($foo));
echo PHP_EOL;
print_r(prev($foo));
echo PHP_EOL;
print_r(current($foo));
echo PHP_EOL;
print_r(reset($foo));
*/

# 54. range
/*
foreach (range(0, 10) as $key) {
    print_r($key);
    echo PHP_EOL;
}

foreach (range(0, 10, 2) as $key) {
    print_r($key);
    echo PHP_EOL;
}

foreach (range('a', 'z') as $key) {
    print_r($key);
    echo PHP_EOL;
}

foreach (range('z', 'a') as $key) {
    print_r($key);
    echo PHP_EOL;
}
*/

# 55. asort, natsort, natcasesort
/*
$foo = $bar = $foe = ["img12.png", "img10.png", "img2.png", "img1.png", "IMG0.png", "IMG3.png"];
asort($foo);
natsort($bar);
natcasesort($foe);
print_r($foo);
print_r($bar);
print_r($foe);
*/

# 56. array_pop, array_shift
/*
$foo = [1, 2, 3, 4, 5];
print_r($foo);
array_pop($foo);
print_r($foo);
array_shift($foo);
print_r($foo);
*/

# 57. array_push, array_unshift
/*
$foo = [1, 2, 3, 4, 5];
print_r($foo);
array_push($foo, 6);
print_r($foo);
array_unshift($foo, 0);
print_r($foo);
*/

# 58. array_slice
$foo = [1, 2, 3, 4, 5];
print_r($foo);
print_r(array_slice($foo, 0, 3));
print_r(array_slice($foo, 2, 3));
print_r(array_slice($foo, 2, 3, true));
