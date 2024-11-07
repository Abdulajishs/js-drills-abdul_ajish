import { inventory } from "../data.js";

// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website.
// Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.


function problem3(inventory) {
    let sortInventory = inventory.sort((a,b)=>{
        let ascii = a.car_model[0].toUpperCase().charCodeAt(0);
        let newAscii = b.car_model[0].toUpperCase().charCodeAt(0);

        return ascii-newAscii
    })
    return sortInventory
}

const result = problem3(inventory);
console.log(result)


