import { inventory } from "../data.js";

// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website.
// Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.


function problem3(inventory) {
    for(let i = 0; i < inventory.length-1; i++){
        for(let j = 0; j < inventory.length-1-i; j++){
            let ascii = inventory[j].car_model[0].toUpperCase().charCodeAt(0);
            let newAscii = inventory[j+1].car_model[0].toUpperCase().charCodeAt(0);
            if(newAscii < ascii){
                let temp = inventory[j];
                inventory[j] = inventory[j+1];
                inventory[j+1] = temp;
            }
        }
    }
    return inventory
}

const result = problem3(inventory);
console.log(result)


