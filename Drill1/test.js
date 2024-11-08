import { inventory } from "./data.js";

import { getCarDetails, getLastCar, getCarModel, getAllYear, getOlderCars, getBMWAndAudi } from "./solution.js";

console.log(getCarDetails(inventory));

console.log(getLastCar(inventory));

console.log(getCarModel(inventory));

console.log(getAllYear(inventory));

console.log(getOlderCars(inventory));

console.log(getBMWAndAudi(inventory));
