/*
interface User {
    id: number;
    name: string;
}

const foo: User = {
    id: 1,
    name: "foo",
};
console.log(foo);
*/

/*
let foo: Array<number> = [1, 2];
let bar: string[] = ['a', 'b'];
console.log(foo);
console.log(bar);
*/

/*
function hello(name: string): string {
    return `Hello, ${name}!`;
}
console.log(hello('world'));
*/

/*
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
let foo: PositiveOddNumbersUnderTen = 1;
console.log(foo);
*/

interface Foo {
    name: string;
    age: number;
}
interface Bar {
    name: string;
    height: number;
}
type FooBar = Foo & Bar;

let tom: FooBar = {
    name: "tom",
    age: 28,
    height: 100
};
console.log(tom);

/*
function foo(str?: string) {
    console.log(str);
}
foo();
foo('bar');
*/
