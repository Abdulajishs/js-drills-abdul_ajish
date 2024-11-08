import { arrayOfObjects } from "./persons.js";
import { hobbiesIndividuals,studentsOnly,nameCity,agesIndividuals,firstHobbies,specificNameEmail,cityCountryIndividuals } from "./solution.js";

let test = {};


let result = hobbiesIndividuals(arrayOfObjects);

console.log(result);


console.log(studentsOnly(arrayOfObjects))


console.log(nameCity(arrayOfObjects,3))

console.log(agesIndividuals(arrayOfObjects));

console.log(firstHobbies(arrayOfObjects));

console.log(specificNameEmail(arrayOfObjects,25));

console.log(cityCountryIndividuals(arrayOfObjects));

