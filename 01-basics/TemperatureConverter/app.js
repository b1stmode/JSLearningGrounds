/*
Project: Temperature Converter

Concepts practiced:
- Variables
- Arithmetic operators
- Template literals
- Console output

Date:
2026-07-28
*/

let celsius = 30
let fahrenheit = 100

let convertToCelsius = (fahrenheit - 32) * (5 / 9)
let convertToFahrenheit = celsius * (9 / 5) + 32

console.log(`${celsius} Celsius to Fahrenheit: ${convertToFahrenheit} Fahrenheit`)
console.log(`${fahrenheit} Fahrenheit to Celsius: ${convertToCelsius} Celsius`)
