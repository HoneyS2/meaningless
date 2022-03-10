//import java.util.Scanner

/*
data class Car(var name: String, private var engine: String, var speed: Int) {
    override fun toString(): String = "$name($engine): $speed"+"km/h"
}
*/

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

    /*
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
    */

    /*
    var foo = 1
    when (foo) {
        1 -> print("A")
        2 -> print("B")
        else -> {
            print("C")
        }
    }
    */

    /*
    for (i in 1..10) {
        println(i)
    }
    */

    /*
    var foo = arrayOf(1, 2, 3)
    for (item in foo) {
        println(item)
    }
    */

    /*
    var arr = mutableListOf<Car>()
    arr.add(Car("foo", "V12", 355))
    arr.add(Car("bar", "W16", 440))

    var arr2 = arr.associateBy { it.name }
    arr2.forEach { println(it) }
    arr2.forEach { println(it.value.speed) }
    */

    var foo = mutableMapOf<Any, Any?>()
    println(foo.isEmpty())
    foo[1] = "apple"
    foo.put(2, 'b')
    foo.putAll(mapOf(3 to 3, 4 to true))
    for ((key, value) in foo) {
        println("$key - $value")
    }
    println(foo.isEmpty())

    /*
    var bar = mutableMapOf(1 to "apple", 2 to 'b', 3 to 'c')
    bar.forEach { (key, value) -> println("$key : $value") }
    */
}

/*
fun foo(str: String = "bar"): String {
    return str
}
*/
