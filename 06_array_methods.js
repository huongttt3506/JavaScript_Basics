// reverse
const numbers = [0, 1, 2, 3, 4];
numbers.reverse();
console.log(numbers);

const cities = ["seoul", "daecheon", "daegu", "busan"];
console.log(cities.reverse());

// push & pop
numbers.push(5);
numbers.push(6);
console.log(numbers); // 4, 3, 2, 1, 0, 5, 6
console.log(numbers.pop()); // 6
console.log(numbers.pop()); //5
console.log(numbers.pop()); //0
console.log(numbers); // [4, 3, 2, 1]
numbers.push(0);
console.log(numbers); // [4, 3, 2, 1, 0]

// unshift & shift

cities.unshift("qwangchu");
cities.unshift("kangnung");
console.log(cities); // ['kangnung', 'qwangchu', 'busan', 'daegu', 'deacheon', 'seoul']
cities.unshift("Beijing");
console.log(cities); // ['Beijing', 'kangnung', 'qwangchu', 'busan', 'daegu', 'daecheon', 'seoul']
console.log(cities.shift()); //Beijing
console.log(cities); //['kangnung', 'qwangchu', 'busan', 'daegu', 'daecheon', 'seoul']

//includes and indexof
console.log(cities.includes("kangnung")); // true
console.log(cities.includes("chaechu")); // false
console.log(numbers); //(5) [4, 3, 2, 1, 0]
console.log(numbers.includes("0")); //false
console.log(numbers.includes(0)); //true

const dIdx = cities.indexOf("daegu"); // -> 3
console.log(cities[dIdx]); // daegu
const jIndx = cities.indexOf("chaechu"); 
console.log(jIndx); //-1
console.log(cities[jIndx]); //undefined

//Array Helper Methods
// => this method is similar to  Java Stream method
const action = function (target) {
    console.log(target + target);
}
// The second parameter of apply is a function
const apply = function (target, callback) {
    callback(target);
}
//
//callback 
apply(10, action); // 20
apply(10, (target) => {
    console.log(target + target + target) //30
});

//forEach
numbers.forEach(function (element, index, array) {
    console.log(`element: ${element}`);
    console.log(`index: ${index}`);
    console.log(`array: ${array}`);
});

numbers.forEach(function(element) {
    console.log(`element: ${element}`);
});
numbers.forEach(console.log);
numbers.forEach(function (e, i, a) {
    console.log(e, i, a);
});

//map
// base on elements of array
// callback
// result is  new array
const doubled = numbers.map(function (element, index, array) {
    return element * 2;
});
console.log(doubled);

// filter
// base on elements of array
// use callback
// create new array contain elements with condition
const evens = numbers.filter(function (element) {
    return element % 2 === 0;
});
console.log(evens); //[4, 2, 0]

const odds = numbers.filter(function (element) {
    return element % 2 !== 0;
});
console.log(odds); //[3, 1]

//reduce
//processes each element in the array
// accumulates a single value, which is returned as the final result.

const scores = [90, 90, 80, 77];
const sum = scores.reduce(function (acc, e, i, a) {
    return acc + e;
}, 0);
// callback function: acc (accimulator) = 0; e: element, 
//i: index (not used in this code); a: entire array (not used in this code)

console.log(sum); //337





