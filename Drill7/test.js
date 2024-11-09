import { counterFactory, limitFunctionCallCount, cacheFunction } from "./solution.js";

let counter = counterFactory();
console.log(counter.increment());
console.log(counter.decrement());



function greeting() {
    return "Hello, Ajish";
}
let limitedGreeting = limitFunctionCallCount(greeting,3);
console.log(limitedGreeting());
console.log(limitedGreeting());
console.log(limitedGreeting());
console.log(limitedGreeting());



function add(a,b) {
    return a+b
}
let cachedResult = cacheFunction(add);

console.log(cachedResult(1,2));
console.log(cachedResult(3,2));
console.log(cachedResult(4,2));
console.log(cachedResult(1,2));

