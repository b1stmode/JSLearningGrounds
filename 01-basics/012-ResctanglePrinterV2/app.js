/*
Project: Rectangle PrinterV2

Concepts practiced:
- Variables
- Arithmetic operators
- Console output
- for loops


Date:
2026-08-01

time spent on the drill: 3.5 minutes
*/

let Rows = 4
let columns = 6

let symbol = "*"

for (let i  = 1; i <= Rows; i++){
    for(let j = 1; j <= columns; j++){
        newSymbol = symbol.repeat(columns)
    }
    console.log(newSymbol)
    
}