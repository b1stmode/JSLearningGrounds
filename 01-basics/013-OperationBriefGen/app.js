/*
Project: Operation Brief Generator

Concepts practiced:
- Variables
- Arithmetic operators
- Console output
- functions


Date:
2026-08-02

time spent on the drill: 2.8 - 3 minutes
*/

let name = "Operation Thunderstrike"
let type = "Assault"
let location = "Abandoned Factory"
let status = "Ready"

function printMission(name, type, location, status){
    console.log("=== Operation Brief ===")
    console.log(`Mission: ${name}`)
    console.log(`Mission Type: ${type}`)
    console.log(`Mission Location: ${location}`)
    console.log(`Mission Status: ${status}`)
}

printMission(name, type, location, status)
printMission("Operation Night Owl", "Reconnaissance", "Compound Alpha", "In Progress")
printMission("Operation Silent Echo", "Stealth sabotage", "Enemy held train bridge", "Completed")

