/*
Project: Squad Roster

Concepts practiced:
- Variables
- Arithmetic operators
- Console output
- arrays


Date:
2026-08-03

time spent on the drill: 3-4 minutes
*/
let squad = ["John", "Mike", "Radar", "Darius", "Sasha"] 
let firstMember = squad[0]
let lastMember = squad[squad.length - 1]
console.log(`team of ${squad.length} members`)
console.log(squad) 
console.log(`The first member of the squad is: ${firstMember}`)
console.log(`The last member of the squad is: ${lastMember}`)
squad[2] = "Rico" 
console.log(`The new squad is:`)
console.log(squad)

