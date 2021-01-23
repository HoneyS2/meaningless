fun main() {
    //println("Hello, world!")
    
    var a: String
    var b: String
    a = foo()
    b = foo("bar2")
    println(a+" "+b)
}

fun foo(str: String = "bar"): String {
    return str
}
