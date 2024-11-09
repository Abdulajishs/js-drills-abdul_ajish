import { each, map, reduce, find, filter, flatten } from "./solution.js";

let numbers = [1,2,3,4,5];

// foreach higher function
let  multiple = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]*2)
    }
}
each(numbers,multiple);


// map higher order function
let squareNumber = (numbers) => {
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
        arr.push(numbers[i]*numbers[i])
    }
    return arr
}

let result = map(numbers,squareNumber);
console.log(result)


// reduce higher order function
let sum = (acc,numbers) => {
    for(let i = 0; i < numbers.length; i++){
        acc += numbers[i]
    }
    return acc
}

console.log(reduce(numbers,sum,0));

// find higher order function
let even = (numbers) => {
    for(let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 === 0) {
            return numbers[i]
        }
    }
}

console.log(find([],even));


// filter higher order function
let evens = (numbers) => {
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 === 0){
            arr.push(numbers[i])
        }
    }
    return arr
}
console.log(filter(numbers,evens))


// flatten 
const nestedArray = [1, [2], [[3]], [[[4]]]];
console.log(flatten(nestedArray))



