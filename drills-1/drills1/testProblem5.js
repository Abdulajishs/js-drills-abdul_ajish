import { inventory } from "../data.js";

// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. 
// Using the array you just obtained from the previous problem, find out how many cars were made 
// before the year 2000 and return the array of older cars and log its length.


function problem5(inventory) {
    let years = [];
    for (let i = 0; i < inventory.length; i++) {
        years.push(inventory[i].car_year)
    }
    let olderCars = [];
    for(let i = 0; i < years.length; i++){
        if(years[i] < 2000){
            olderCars.push(years[i])
        }
    }
    return olderCars
}

const result = problem5(inventory);

console.log(result.length)