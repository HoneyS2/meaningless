//console.log("Hello, world!")

/*
function foo (bar) {
    console.log(bar);
    var bar;
    console.log(bar);
    var bar = 2;
    console.log(bar);
}
foo(1);
*/

/*
funny jokes #1
*/
/*
console.log(0 == "0");
console.log(0 == []);
console.log("0" == []);
*/

/*
funny jokes #2
*/
/*
console.log(1 + "1");
console.log(1 - "1");
*/

/*
funny jokes #3
*/
//console.log(typeof NaN);

/*
funny jokes #4
*/
//console.log(9999999999999999);

/*
funny jokes #5
*/
/*
console.log(0.5 + 0.1 == 0.6);
console.log(0.1 + 0.2 == 0.3);
*/

/*
funny jokes #6
*/
/*
console.log(Math.min());
console.log(Math.max());
*/

/*
var foo = 1;
var outer = function () {
    var inner = function () {
        console.log(foo);
        var foo = 2;
    };
    inner();
    console.log(foo);
};
outer();
console.log(foo);
*/

/*
var foo = null;
console.log(typeof foo);
console.log(foo == undefined);
console.log(foo === undefined);
*/

/*
var outer = function () {
    var a = 1;
    var inner = function () {
        return ++a;
    };
    return inner;
};
var foo = outer();
console.log(foo());
console.log(foo());
*/

//console.dir(Array);

/*
let timerId = setInterval(() => console.log('HA HA!'), 1000);
setInterval(() => clearInterval(timerId), 5000);
*/

/*
var foo = [];
Object.getPrototypeOf(foo);
*/

/*
function foo (str1, str2) {
    console.log(this.bar+", "+str1+"!");
    console.log("I'm "+str2+".");
};

var a = {
    'bar': "Hello"
};
//foo.call(a, "world", "foe");
foo.apply(a, ["world", "foe"]);
*/

/*
var func = function (str) {
    console.log(this, str);
};
func('a');

var obj = {
    method: func
};
obj.method('b');
*/

/*
var foo = ['a', 'b', 'c', 'd', 'e'];
foo.forEach(function(element, index, arr){
    console.log(this.bar[index]);
    console.log(index+': '+element);
}, {bar: [1, 2, 3, 4, 5]});
*/

/*
let hello = (str) => {
    return `Hello, ${str}!`
}
hello('world')
*/

/*
let foo = [1, 3, 5, 7, 9]
let bar = foo.map(x => x + 1)
console.log(foo)
console.log(bar)
*/

/*
let foo = {
    str: "Hello, world!",
    bar: function() {
        setTimeout(() => {
            console.log(this.str)
        }, 500)
    }
}
foo.bar()
*/

/*
let foo = ['a', 'b', 'c'];
let bar = [1, ...foo, 2];
console.log(bar);
*/

/*
let foo = ['a', 'b', 'c'];
let bar = foo;
let foe = [...foo];
console.log(foo === bar);
console.log(foo === foe);
bar[2] = 'd';
console.log(foo);
console.log(foe);
*/

/*
class Car {
    constructor(name, maxSpeed, speed=0) {
        this.name = name;
        this.maxSpeed = maxSpeed;
        this.speed = speed;
    }
    speedUp(speed) {
        if (this.speed + speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        } else {
            this.speed += speed;
        }
    }
}

const foo = new Car('UltraSuper', 351);
console.log(foo.name, foo.speed);
foo.speedUp(10);
console.log(foo.speed);
*/

/*
let foo = JSON.stringify({"hello": "world"})
console.log(foo);
let bar = JSON.parse(foo);
console.log(bar);
*/

/*
const foo = ['one', 'two', 'three'];
console.log(foo);
const [red, yellow, green] = foo;
console.log(red);
console.log(yellow);
console.log(green);
*/

/*
let foo = {
    a: 'apple',
    b: 'banana',
    c: 'cat'
}
let {a, b, c} = foo;
let {a: d, b: e, c: f} = foo;
console.log(a, b, c);
console.log(d, e, f);
*/

/*
let foo = 'hello';
let bar = foo ?? 'world';
console.log(bar);
*/

/*
let foo = [];
foo.push('hello');
console.log(foo);
foo.pop();
console.log(foo);
*/

/*
let foo = ['Goodbye', 'World'];
console.log(foo);
foo.shift();
console.log(foo);
foo.unshift('Hello');
console.log(foo);
*/

/*
let foo = [1, 2, 3, 4, 5];
foo.reverse();
console.log(foo);
*/

/*
let foo = 'Hello, world!';
console.log(foo.toUpperCase());
console.log(foo.toLowerCase());
*/

/*
const isOdd = (value) => value % 2 == 1;
let foo = [1, 3, 5, 7, 10];
console.log(foo.every(isOdd));
*/

/*
const isEven = (value) => value % 2 == 0;
let bar = [2, 3, 5, 7, 9];
console.log(bar.some(isEven));
*/

/*
let foo = Array(5);
foo.fill('bar');
console.log(foo);
foo.fill('baz', 1, 4);
console.log(foo);
*/

/*
let foo = new Date();
console.log(foo);
console.log(foo.toString());
console.log(foo.toDateString());
console.log(foo.toUTCString());
console.log(foo.toLocaleString());
console.log(foo.toISOString());
*/

/*
let foo = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(foo.indexOf('a'));
console.log(foo.indexOf('c'));
console.log(foo.lastIndexOf('a'));
console.log(foo.lastIndexOf('c'));
*/

/*
let foo = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(foo);
console.log(foo.flat());
console.log(foo.flat(4));
*/

/*
let foo = [1, 2, 3, 4, 5];
console.log(foo.filter(odd => odd % 2 == 1));
*/

/*
let foo = Array(3);
let foe = Array(1, 2, 3);
let bar = Array.of(3);
let baz = Array.of(1, 2, 3);
console.log(foo);
console.log(foe);
console.log(bar);
console.log(baz);
*/

/*
//'use strict';
let foo = new Object();
foo.a = 1;
foo.b = 2;
foo.c = 3;
console.log(foo);
console.log(Object.isFrozen(foo));
Object.freeze(foo);
foo.a = 4;
foo.b = 5;
foo.c = 6;
console.log(foo);
console.log(Object.isFrozen(foo));
*/

/*
let foo = new Object();
foo.a = 1;
foo.b = 2;
foo.c = 3;
console.log(foo);
console.log(Object.isSealed(foo));
Object.seal(foo);
foo.a = 4;
foo.b = 5;
foo.c = 6;
console.log(foo);
console.log(Object.isSealed(foo));
*/

/*
let foo = [1, 2, 3, 4, 5];
isEven = (element) => element % 2 == 0;
console.log(foo.find(isEven));
console.log(foo.findIndex(isEven));
*/

/*
let foo = ['Apple', 'banana', 'cat'];
console.log(foo.includes('Apple'));
console.log(foo.includes('apple'));
console.log(foo.includes('cat', 2));
console.log(foo.includes('cat', 100));
*/

/*
let foo = 'Hello, world!';
console.log(foo.startsWith('Hello'));
console.log(foo.endsWith('!'));
*/

/*
var foo = ['a', , 'c'];
var sparseKeys = Object.keys(foo);
var denseKeys = [...foo.keys()];
console.log(sparseKeys);
console.log(denseKeys);
*/

/*
let foo = {
    a: 1,
    b: 'banana',
    c: true
};
let bar = ['a', 'b', 'c'];
console.log(Object.values(foo));
console.log(...bar.values());
*/

/*
let foo = {};
let bar = [];
console.log(Object.getPrototypeOf(foo));
console.log(Object.getPrototypeOf(bar));
*/

/*
let foo = 10;
console.log(foo.toString());
console.log(foo.toString(2));
console.log(foo.toString(8));
console.log(foo.toString(10));
console.log(foo.toString(16));
*/

/*
let foo = 1;
let bar = 1;
console.log(Object.is(foo, bar));
let foe = {a: 1};
let baz = {a: 1};
console.log(Object.is(foe, baz));
*/

/*
let foo = [];
let bar = {};
console.log(Array.isArray(foo));
console.log(Array.isArray(bar));
*/

/*
let foo = ['a', 'b', 'c'];
console.log(foo);
foo.splice(3, 0, 'd');
console.log(foo);
foo.splice(1, 2);
console.log(foo);
*/

/*
let foo = ['a', 'b', 'c', 'd', 'e'];
console.log(foo);
console.log(foo.slice(0, 3));
*/

/*
console.log(Array.from('foo'));
console.log(Array.from([1, 2, 3, 4, 5], x => x*2));
*/

/*
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randNum = getRandomIntInclusive(0, 1);
let myFirstPromise = new Promise((resolve, reject) => {
    if (randNum > 0) {
        setTimeout(function() {
            resolve("A");
        }, 250);
    } else {
        setTimeout(function() {
            reject("B");
        }, 250);
    }
})

myFirstPromise.then((successMessage) => {
    console.log(successMessage);
})
.catch((errorMessage) => {
    console.log(errorMessage);
});
*/

/*
let foo = [1, 30, 4, 21, 100000];
foo.sort();
console.log(foo);
foo.sort(function(a, b) {
  return a - b;
});
console.log(foo);
foo.sort(function(a, b) {
  return b - a;
});
console.log(foo);
*/

/*
let foo = [1, 2, 3, 4];
console.log(foo.reduce((prevVal, curVal) => prevVal + curVal));
console.log(foo.reduce((prevVal, curVal) => prevVal + curVal, 5));

let bar = [[1, 2], [3, 4], [5, 6]];
console.log(bar.reduce((prevVal, curVal) => prevVal.concat(curVal), []));
*/

/*
let names = ['Foo', 'Bar', 'Foe', 'Baz', 'Foo'];

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
console.log(countedNames);
*/

/*
let crypto;
try {
  crypto = require('crypto');
  let foo = crypto.randomBytes(256);
  console.log(foo);
  console.log(foo.toString('hex'));
} catch (err) {
  let foo = new Uint32Array(10);
  console.log(window.crypto.getRandomValues(foo));
}
*/

/*
let foo = '   Hello, world!   ';
console.log(foo.trim());
console.log(foo.trimEnd());
console.log(foo.trimStart());
*/

/*
let foo = "a,b,c,d,e";
console.log(foo.split(','));
console.log(foo.split(',').length-1);
*/

/*
let foo = ['a', 'b', 'c', 'd', 'e'];
console.log(foo.join());
console.log(foo.join(''));
console.log(foo.join('-'));
*/

/*
let foo = 'abcdefg';
console.log(foo.substring(0, 3));
console.log(foo.substring(3, 6));
console.log(foo.substring(6, foo.length));
*/

/*
let foo = ['a', 'b', 'c'];
let bar = foo.entries();

for (let [index, element] of bar) {
    console.log(index, element);
}
*/

/*
let foo = {'a': 'apple', 'b': 2, 'c': true};
for (const prop in foo) {
    console.log(`foo.${prop}: ${foo[prop]}`);
}
*/

/*
let foo = "abcde";
console.log(foo.charAt());
console.log(foo.charAt(4));
console.log(foo.charAt(999));
console.log(foo[0]);
console.log(foo[4]);
console.log(foo[999]);
*/

/*
let foo = "7";
console.log(foo.padStart(3, '0'));
console.log(foo.padEnd(3, '7'));
*/

/*
let foo = ['a', 'b', 'c', 'd', 'e'];
console.log(foo.length);
let bar = {
    'a': 1,
    'b': 2,
    'c': 3,
};
console.log(Object.keys(bar).length);
*/

/*
const regex = new RegExp('Hello*', 'i');
console.log(regex.test('hellO, world!'));
console.log(regex.test('Hello, world!'));
console.log(regex.test('Goodbye, world~'));
*/

/*
const regex = /[A-Z]/g;
console.log('Hello, world!'.match(regex));
*/

/*
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.isNaN(NaN));
*/

console.log(parseInt('3.14'));
console.log(parseInt('ff', 16));
