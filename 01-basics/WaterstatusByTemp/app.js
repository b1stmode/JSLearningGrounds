/*
Project: Water status by temperature

Concepts practiced:
- Variables
- Arithmetic operators
- Template literals
- Switch statement
- "if / else if" statements
- Console output

Learned:
Switch compares exact values.
It is not intended for checking numeric ranges.
Use if/else if for inequalities (<, >, <=, >=).

Date:
2026-07-28
*/

let celsius = 0;
let waterState;

console.log(`${celsius} °C`)

if (celsius <= 0) {
    waterState = "It's freezing!"
}else if (celsius == 0){
    waterState = "It's frozen!"
}else if (celsius == 100) {
    waterState = "It's boiling!"
}else if (celsius >= 100) {
    waterState = "It's vaporized!"
} else {
    waterState = "It's liquid!"
}   

console.log(waterState)
