/*
Project: Discount Calculator

Concepts practiced:
- Variables
- Arithmetic operators
- Console output
- functions
- return statement


Date:
2026-08-03

time spent on the drill: 1 minute
*/

let calculateDiscount = function(price, discountPercentage){
    return price - (price * discountPercentage / 100)
}

let finalPrice = calculateDiscount(500, 20)
console.log(`The final price after discount is: $${finalPrice}`)
