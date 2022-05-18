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

function hello(name: string): string {
    return `Hello, ${name}!`;
}
console.log(hello('world'));
