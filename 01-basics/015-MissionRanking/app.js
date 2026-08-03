/*
Project: Mission Ranking

Concepts practiced:
- Variables
- Arithmetic operators
- Console output
- functions
- return statement
- if/ else if statements


Date:
2026-08-03

time spent on the drill: 2.9 minutes
*/

let getMissionRating = function(score){
    if(score <= 100 && score >= 90){
        return "Excellent"
    }else if(score < 90 && score >= 75){
        return "Good"
    }else if(score < 75 && score > 50){
        return "Needs Improvement"
    }else {
        return "Failed"
    }
}

let missionRating = getMissionRating(50)
console.log(`Mission rating: ${missionRating}`)