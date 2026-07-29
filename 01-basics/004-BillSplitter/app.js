/*
Project: Bill Splitter 

Concepts practiced:
- Variables
- Arithmetic operators
- Console output
- Template literals
- Explicit type conversion
Learned:

Date:
2026-07-29

time spent on the drill: 8-9 minutes
*/

let billPrice = 100
let tipPercentage = 15
let people = 4

let tipAmount = billPrice * (tipPercentage / 100)
let totalCost = billPrice + tipAmount
let costPerPerson = totalCost / people

console.log(`Bill price: $${billPrice}`)
console.log(`Tip amount: $${tipAmount}`)
console.log(`Total cost: $${totalCost}`)
console.log(`People in total: ${people}`)
console.log(`Cost per person: $${costPerPerson}`)