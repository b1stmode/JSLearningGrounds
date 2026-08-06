/*
Project: Inventory Search

Concepts practiced:
- Variables
- Arithmetic operators
- Console output
- arrays
- array methods


Date:
2026-08-04

time spent on the drill:  minutes
*/

let Inventory = ["Water", "IFAK", "Map", "Radio", "Knife"]
console.log(Inventory)
let radio = Inventory.includes("Radio")
console.log(`Is there a radio in the inventory? ${radio}`)
let knifeIndex = Inventory.indexOf("Knife")
if (Inventory.includes("Notebook")){
    console.log("The inventory contains a notebook.")
}else{
    console.log("The inventory does not contain a notebook.")
}
console.log(Inventory)