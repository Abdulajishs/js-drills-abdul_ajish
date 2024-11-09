
export function keys(object) {
    let arr = [];
    for (const key in object) {
        arr.push(key)
    }
    return arr
}

export function values(object) {
    let arr = [];
    for (const key in object) {
        arr.push(object[key])
    }
    return arr
}

export function mapObject(object, cb) {
    let result = {};
    for(let key in object){
        result[key] = cb(object,key)
    }
    return result;
}

export function pairs(object) {
    let arr = [];
    for(const key in object){
        arr.push([key,object[key]])
    }
    return arr
}

export function invert(object) {
    let result = {};
    for(const key in object){
        result[object[key]] = key
    }
    return result;
}

export function defaults(object,defaultObj){
    // return {...defaultObj,...object}
    for(const key in defaultObj){
        if(!object.hasOwnProperty(key)){
            object[key] = defaultObj[key]
        }
    }
    return object
}
