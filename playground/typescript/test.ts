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

function foo(str?: string) {
    console.log(str);
}
foo();
foo('bar');
