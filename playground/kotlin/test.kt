//import java.util.Scanner

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

    /*
    print("Input text: ")
    val scan: Scanner = Scanner(System.`in`)
    var str = scan.nextLine()
    print("Input integer: ")
    var num = scan.nextInt()
    println("Result: $str $num")
    */

    val numbers = listOf("a", "b", "c", "d", "e")
    val listIterator = numbers.listIterator()

    println("Iterating forwards:")
    while (listIterator.hasNext()) {
        print("Index: ${listIterator.nextIndex()}")
        println(", value: ${numbers[listIterator.nextIndex()]}")
        listIterator.next()
    }

    println("Iterating backwards:")
    while (listIterator.hasPrevious()) {
        print("Index: ${listIterator.previousIndex()}")
        println(", value: ${listIterator.previous()}")
    }
}

/*
fun foo(str: String = "bar"): String {
    return str
}
*/
