fn main() {
    // println!("Hello, world!");

    /*
    let mut foo = "bar";
    println!("{}", foo);
    foo = "baz";
    println!("{}", foo);
    */

    let foo = "world";
    let bar = foo.to_string();
    hello_str(bar);
}

fn hello_str(str: String) {
    println!("Hello, {}!", str);
}
