/*
Project: Temperature Converter V2

Concepts practiced:
- Variables
- Arithmetic operators
- Template literals
if/ else if statements
- Console output

Date:
2026-07-28
*/

let celsius = 100
let fahrenheit = 32

let convertToCelsius = (fahrenheit - 32) * (5 / 9)
let convertToFahrenheit = celsius * (9 / 5) + 32

console.log(`${celsius} °C = ${convertToFahrenheit} °F`)
console.log(`${fahrenheit} °F = ${convertToCelsius} °C`)

if (convertToCelsius >= 100) {
    console.log("It's boiling!")
}else if (convertToCelsius <= 0) {
    console.log("It's freezing!")
}
if (convertToFahrenheit >= 212) {
    console.log("It's boiling! But in Fahrenheit!")
}else if (convertToFahrenheit <= 32) {
    console.log("It's freezing! But in Fahrenheit!")
}
