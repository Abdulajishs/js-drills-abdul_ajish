// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. 
// Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. 
// Then log the car's year, make, and model in the console log in the format of:

// "Car 33 is a *car year goes here* *car make goes here* *car model goes here*"

export function getCarDetails (inventory) {
    let filter = null;
    for(let i = 0; i < inventory.length; i++){
        if(inventory[i].id === 33){
            filter = inventory[i];
            break
        }
    }
    return `Car 33 is a ${filter.car_year} ${filter.car_make} ${filter.car_model}`
}

 // ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory.
// Execute a function to find what the make and model of the last car in the inventory is?
// Log the make and model into the console in the format of:
// "Last car is a *car make goes here* *car model goes here*"


export function getLastCar (inventory) {
    let filter = inventory[inventory.length-1];
    return `Last car is a ${filter.car_year} ${filter.car_make} ${filter.car_model}`
}


// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website.
// Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.


export function getCarModel(inventory) {
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

// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot.
// Execute a function that will return an array from the dealer data containing only the car years
// and log the result in the console as it was returned.


export function getAllYear(inventory) {
    let years = [];
    for (let i = 0; i < inventory.length; i++) {
        years.push(inventory[i].car_year)
    }
    return years
}

// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. 
// Using the array you just obtained from the previous problem, find out how many cars were made 
// before the year 2000 and return the array of older cars and log its length.


export function getOlderCars(inventory) {
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


// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

export function getBMWAndAudi(inventory) {
    let BMWAndAudi = [];
    for(let i = 0; i < inventory.length; i++){
        if(inventory[i].car_make === "Audi" || inventory[i].car_make === "BMW"){
            BMWAndAudi.push(inventory[i])
        }
    }
    return BMWAndAudi
}