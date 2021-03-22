import java.util.Scanner

fun main() {
    //println("Hello, world!")
    
    /*
    var a: String
    var b: String
    a = foo()
    b = foo("bar2")
    println(a+" "+b)
    */
    
    /*
    var str = """A
                |B
                |C""".trimMargin()
    println(str)
    */

    print("Input text: ")
    val scan: Scanner = Scanner(System.`in`)
    var str = scan.nextLine()
    print("Input integer: ")
    var num = scan.nextInt()
    println("Result: $str $num")
}

/*
fun foo(str: String = "bar"): String {
    return str
}
*/
