package main

import (
        "fmt"
	"time"
	//"runtime"
        //"math"
)

/*
type Vertex struct {
        X, Y float64
}

func (v Vertex) Abs() float64 {
        return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func (v *Vertex) Scale(f float64) {
        v.X = v.X * f
        v.Y = v.Y * f
}
*/

/*
func Foo(s string) {
	for i := 0; i < 5; i++ {
		time.Sleep(100 * time.Millisecond)
		fmt.Println(s)
	}
}
*/

func main() {
        //fmt.Println("Hello, world!")
        //fmt.Println(time.Now())

        /*
        foo := map[int]string{
                0: "a",
                1: "b",
                2: "c",
        }
        fmt.Println(foo)
        */

        /*
        foo := []string{"a", "b", "c"}
        fmt.Println(foo)
        */

        /*
        v := Vertex{3, 4}
        fmt.Println(v.Abs())
        v.Scale(10)
        fmt.Println(v.Abs())
        */

        /*
        foo := make([]string, 10, 15)
        fmt.Println(len(foo), cap(foo))
        */

	/*
        sum := 0
	for i := 0; i < 10; i++ {
	        sum += i
	}
	fmt.Println(sum)
	
	sum2 := 1
	for sum2 < 100 {
		sum2 += sum2
	}
	fmt.Println(sum2)
	*/
	
	/*
	var i int
	var f float64
	var b bool
	var s string
	fmt.Printf("%v %v %v %q\n", i, f, b, s)
	*/

	/*
	switch os := runtime.GOOS; os {
	case "darwin":
		fmt.Println("OS X.")
	case "linux":
		fmt.Println("Linux.")
	default:
		fmt.Printf("%s.\n", os)
	}
	*/
	
	/*
	defer fmt.Printf("world!")
	fmt.Printf("Hello, ")
	*/
	
	/*
	go Foo("aaa")
	Foo("bbb")
	*/
	
	now := time.Now()
	fmt.Println(now.Year())
	fmt.Println(now.Month())
	fmt.Println(now.Day())
}
