/*
Project: Backpack Inventory

Concepts practiced:
- Variables
- Arithmetic operators
- Console output
- arrays
- array methods


Date:
2026-08-03

time spent on the drill: 2 minutes
*/

console.log("Backpack Inventory")
let backpack = ["Water", "IFAK", "Map"]
console.log(`The backpack contains ${backpack.length} items.`)
console.log(backpack)
backpack.push("Spare Batteries")
backpack.push("Spare Amunition")
console.log("After adding items to the backpack:")
console.log(`The backpack now contains ${backpack.length} items.`)
console.log(backpack)
let removedFlashlight = backpack.pop("Spare Amunition")
console.log(`After removing ${removedFlashlight} from the backpack:`)
console.log(`The backpack now contains ${backpack.length} items.`)
console.log(backpack)