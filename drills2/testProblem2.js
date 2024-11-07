import { inventory } from "../data.js";

// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory.
// Execute a function to find what the make and model of the last car in the inventory is?
// Log the make and model into the console in the format of:
// "Last car is a *car make goes here* *car model goes here*"


function problem2 (inventory) {
    let arr = inventory.filter((car)=> car.id === inventory.length);
    return `Last car is a ${arr[0].car_year} ${arr[0].car_make} ${arr[0].car_model}`
}

const result = problem2(inventory);

console.log(result)