/*
Project: Bill Splitter V2

Concepts practiced:
- Variables
- Arithmetic operators
- Console output
- Template literals
- "if / else if" statements
Learned:

Date:
2026-07-29

time spent on the drill: 9 minutes
*/

let billPrice = 100
let tipPercentage = 10
let people = 4

let tipAmount = billPrice * (tipPercentage / 100)
let totalCost = billPrice + tipAmount
let costPerPerson = totalCost / people

if (people <= 0) {
    console.log("Invalid amount of people")
} else {
    console.log(`Bill price: $${billPrice}`)
    console.log(`Tip amount: $${tipAmount}`)
    console.log(`Total cost: $${totalCost}`)
    console.log(`People in total: ${people}`)
    console.log(`Cost per person: $${costPerPerson}`)

    console.log("Tip status:")
    if (tipPercentage < 0) {
        console.log("Invalid tip percentage")
    } else if (tipPercentage <= 5) {
        console.log("Cheap tip")
    }else if (tipPercentage <= 15) {
        console.log("Average tip")
    }else if (tipPercentage <= 25) {
        console.log("Generous tip")
    }else {
        console.log("Very generous tip")
    }
}


