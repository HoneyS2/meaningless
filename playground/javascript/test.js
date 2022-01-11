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

let foo = Array(5);
foo.fill('bar');
console.log(foo);
foo.fill('baz', 1, 4);
console.log(foo);
