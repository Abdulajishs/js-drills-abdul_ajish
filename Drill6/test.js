import { testObject } from "./objects.js";

import { keys, values, mapObject, pairs, invert, defaults } from "./solution.js";

console.log(keys(testObject));

console.log(values(testObject));


console.log(mapObject(testObject,(obj,key)=>{
    return typeof obj[key] ===  "number" ? obj[key]+1 : obj[key] ;
}))

console.log(pairs(testObject))

console.log(invert(testObject));

let iceCream = {flavor: "chocolate"};
let defaultObj = {flavor: "vanilla", sprinkles: "lots"};
console.log(defaults(iceCream,defaultObj));