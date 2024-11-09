export function counterFactory() {
    let count = 0;
    return {
        increment() {
            count += 1;
            return count;
        },
        decrement() {
            count -= 1;
            return count;
        }
    }
}


export function limitFunctionCallCount(cb,n) {
    let count = 0;
    return function () {
        if (count < n) {
            count++
            return cb()
        } else {
            return null
        }
    }
}

export function cacheFunction(cb) {
    let cache = {};
    return function (...args) {
        // console.log(args,cache)
        let key = JSON.stringify(args)
        if(cache.hasOwnProperty(key)){
            return cache[key]
        }else{
            let result = cb(...args)
            cache[key] = result
            return result
        }
    }
}