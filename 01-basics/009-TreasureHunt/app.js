/*
Project: Treasure Hunt

Concepts practiced:
- Variables
- Arithmetic operators
- Console output
- for loops
- break statement


Date:
2026-07-31

time spent on the drill: 2 minutes
*/

for(i = 1; i <= 20; i++){
    if(i ===13){
        console.log("Found the treasure!")
        break
    }
    console.log(`Searching chest ${i}...`)
}