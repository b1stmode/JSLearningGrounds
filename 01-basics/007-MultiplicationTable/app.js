/*
Project: Multiplication Table

Concepts practiced:
- Variables
- Arithmetic operators
- Console output
- for/while loops

Date:
2026-07-30

time spent on the drill: 5 minutes
*/
// variables
let number = 7

console.log(`Multiplication table for ${number}:`)
// for loop version:
console.log("=== For loop===")
for (let i = 1; i <=10; i++){
    let result = number * i
    console.log(`${number} x ${i} = ${result}`)
}

// while loop version:
console.log("=== While loop===")
let i = 1
while (i <= 10){
    let result = number * i
    console.log(`${number} x ${i} = ${result}`)
    i++
}