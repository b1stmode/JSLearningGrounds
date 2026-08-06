/*
Project: Radio Log

Concepts practiced:
- Variables
- Console output
- arrays
- array methods
- if/ else if statements


Date:
2026-08-04

time spent on the drill: 3 minutes
*/

let radioLog = ["Alpha", "Bravo", "Alpha", "Charlie", "Bravo", "Alpha"]
console.log(radioLog)
let firstAlphaIndex = radioLog.indexOf("Alpha")
let lastAlphaIndex = radioLog.lastIndexOf("Alpha")
console.log(`The first Alpha is at index ${firstAlphaIndex}.`)
console.log(`The last Alpha is at index ${lastAlphaIndex}.`)
if (radioLog.includes("Delta")){
    return console.log("The radio log contains a Delta.")
}else{
    return console.log("The radio log does not contain a Delta.")
}