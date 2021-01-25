package main

import (
    "fmt"
    "math"
    //"time"
)

type Vertex struct {
	X, Y float64
}

func (v Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

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
    
    v := Vertex{3, 4}
    fmt.Println(v.Abs())
}
