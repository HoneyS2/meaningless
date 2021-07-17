use rand::Rng;
use std::cmp::Ordering;
use std::io;

fn main() {
    // println!("Hello, world!");

    /*
    let mut foo = "bar";
    println!("{}", foo);
    foo = "baz";
    println!("{}", foo);
    */

    /*
    let foo = "world";
    let bar = foo.to_string();
    hello_str(bar);

    let foe = String::from("dlrow");
    hello_str(foe);
    */

    /*
    let mut foo = String::from("ABC");
    foo.push_str("DEF");
    println!("{}", foo);
    */

    /*
    let baz: u128 = 1234;
    print_num(baz);
    */

    /*
    let a = [1, 2, 3, 4, 5];

    //println!("{:?}", a);

    for element in a.iter().rev() {
        println!("{}", element)
    }
    */

    /*
    let mut foo = 1;
    loop {
        if foo > 10 {
            println!("Done!");
            break;
        } else if foo == 5 {
            println!("{}, Keep going!", foo);
        } else {
            println!("{}", foo);
        }
        foo+=1;
    }
    */

    /*
    println!("Input text: ");
    let mut foo = String::new();

    io::stdin()
        .read_line(&mut foo)
        .expect("Failed to read line");
    println!("Result: {}", foo);

    match io::stdin().read_line(&mut foo) {
        Ok(n) => {
            println!("{} bytes read", n);
            println!("Result: {}", foo);
        }
        Err(error) => println!("Failed to read line - error: {}", error)
    }
    */

    /*
    let c = 'c';
    println!("{}", c);
    */

    let foo = rand::thread_rng().gen_range(1..4);
    println!("Answer: {}", foo);

    println!("Input number: ");
    let mut bar = String::new();
    io::stdin()
        .read_line(&mut bar)
        .expect("Failed to read line");
    let baz: u32 = bar.trim().parse().expect("Please type a number!");

    match baz.cmp(&foo) {
        Ordering::Less => println!("Too small"),
        Ordering::Greater => println!("Too big"),
        Ordering::Equal => println!("Ding-dong")
    }

}

/*
fn hello_str(str: String) {
    println!("Hello, {}!", str);
}

fn print_num(num: u128) {
    println!("{}", num);
}
*/
