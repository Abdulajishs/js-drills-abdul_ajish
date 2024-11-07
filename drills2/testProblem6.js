import { inventory } from "../data.js";

// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  
// Execute a function and return an array that only contains BMW and Audi cars.  
// Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

function problem6(inventory) {
    let BMWAndAudi = inventory.filter((car)=> car.car_make === "Audi" || car.car_make === "BMW");
    return BMWAndAudi
}

const result = problem6(inventory);

console.log(JSON.stringify(result))