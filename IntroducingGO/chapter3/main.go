package main

import "fmt"

func main() {
	fmt.Print("Enter a number: ")
	var input float64
	fmt.Scanf("%f", &input)

	output := input * 2

	fmt.Println(output)

	celsius := (input - 32) * 5 / 9

	fmt.Printf("\nConvert %f Fahrenheit to Celsius: %f", input, celsius)

	meters := input * 0.3048

	fmt.Printf("\nConvert %f ft to meters: %f", input, meters)
}
