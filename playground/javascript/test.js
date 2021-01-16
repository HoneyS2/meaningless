console.log("Hello, world!")

function foo (bar) {
    console.log(bar);
    var bar;
    console.log(bar);
    var bar = 2;
    console.log(bar);
}
foo(1);
