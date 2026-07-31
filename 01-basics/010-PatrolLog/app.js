/*
Project: Treasure Hunt

Concepts practiced:
- Variables
- Arithmetic operators
- Console output
- for loops
- break/continue statements


Date:
2026-07-31

time spent on the drill:  minutes
*/

for (let i = 1; i <= 15; i++){
    if(i % 5 ===0){
        continue;
    }
    if(i === 12){
        console.log("Enemy spotted! Abort mission!")
        break
    }
    console.log(`Reached checkpoint ${i}`)

}