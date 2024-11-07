import { inventory } from "../data.js";

// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. 
// Using the array you just obtained from the previous problem, find out how many cars were made 
// before the year 2000 and return the array of older cars and log its length.


function problem5(inventory) {
    let olderCars = inventory.map((car)=> car.car_year).filter((year)=> year < 2000);
    return olderCars
}

const result = problem5(inventory);

console.log(result.length)