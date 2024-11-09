
// foreach higher function

export function each(elements, cb) {
    cb(elements)
}


// map higher order function

export function map(elements, cb) {
    return cb(elements)
}


// reduce higher order function

export function reduce(elements, cb, startingValue) {
    return cb(startingValue,elements)
}

// find higher order function

export function find(elements, cb) {
    return cb(elements)
}
 
// filter higher order function 

export function filter(elements, cb) {
    return cb(elements)
}


// flatten

export function flatten(elements) {
    let result = [];
    for (const ele of elements) {
        if(Array.isArray(ele)){
            result = result.concat(flatten(ele))
        }else{
            result.push(ele)
        }
    }
    return result;
}