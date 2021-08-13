//print("Hello, world!")

/*
var foo: String
let bar: Int

foo = "ABC"
bar = 123
//print(foo, "and", bar)
print("\(foo) and \(bar)")
*/

/*
var foo: String?
print(foo)
*/

/*
var bar: String = "123"
print(bar)
print(type(of:bar))
//var baz = Int(bar)
var baz: Int = Int(bar) ?? 0
print(baz)
print(type(of:baz))
*/

struct Person {
    var name: String
    var age: Int = 0

    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
}

//var foo = Person("Foo", 27)
//print(foo)
var bar = Person(name: "Bar", age: 28)
print(bar)
