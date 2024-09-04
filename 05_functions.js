// function 키워드
// 함수 이름
// 매개변수 목록
// Java의 메서드랑 비슷한데,
// 반환형, 매개변수 자료형 이 생략

// 함수 선언식
function add(a, b) {
    return a + b;
}
/*
public int add(int a, int b) {}
public long add(long a, long b) {}
*/
console.log(add(1, 2)); //3
console.log("a", "b"); // ab
console.log(add(true, false)); // 1
console.log(add(Infinity, -Infinity)); //NaN

//일급 객체
//First class citizen
//일급 객체란, 일반적인 프로그레밍 어어에서
//1. 한수의 인자로 절달 가능하고
//2. 함수의 반환겂으로 반환이 가능하고
//3. 

// 함수 표현식
const subtract = function(a, b) {
    return  a - b;
}
console.log(subtract(10, 5)); //5

//함수 선어식 -> hoisting 일어남
function hoistedFun() {
    console.log("this function is hoisted");
}
//함수 표현식 -> hoisting 일어나지 않음
// notHoistedFun(); // ReferenceError
const notHoistedFun = function() {
    console.log("this function is not hoisted")
}

//Arrow Function
//화살표 함수
const arrowMulti = (a, b) => {
    return a * b; 
}
const arrowSquare = a => {
    return a * a;
}

// 한게의 결과를 반환하는 화살표 함수
const arrowCube = (a) => a * a * a;

console.log(arrowMulti(2 ,3)); // 6
console.log(arrowSquare(2)); // 4
console.log(arrowCube(3)); //9

//함수에 인자 전달하기
//1. 기본값 설정하기
const getMessage = function(name = "Anonymous") {
    return `Hi ${name}!!!`
}
// Hi Jeeho Park!!!
console.log(getMessage("Jeeho Park"));
// Hi Anonumous!!!
console.log(getMessage());

const multiply = function(a, b = 1) {
    return a * b;
}
console.log(multiply(10)); //10
console.log(multiply(10, 2)); //20

//2. 매개변수와 인자의 객수 불일치 허용
console.log("//////") /////
const divide = function(a, b) {
    console.log(a); //undefined //1
    console.log(b); //undefined //2
    return a / b;
}
console.log(divide()); // NaN
console.log(divide(1));
console.log(divide(1, 2)); 
console.log(divide(1, 2, 3)); //0.5
console.log(divide(1, 2, 3, 4, 5, 6, 7, 8)); //0.5

//3. spread syntax (...)
const fewNum = [1, 2];
// ... 을 이용해서 배열의 원소들을 
//새로운 배열의 원소들에 할당가능
//const number = [0, fewNum, 3, 4]; // [0, [1, 2], 3, 4]
const numbers = [0, ...fewNum, 3, 4];
//[0, 1, 2, 3, 4]
console.log(numbers);
console.log(add(...fewNum)); //3
console.log(add(...numbers)); //1
// 함수를 만들때도 하나의 매개변수에 데이터를 받기 위해

const sum = function(...numbers) {
    let sumNum = 0;
    for (const number of numbers) {
        sumNum += Number(number);
    }
    return sumNum;
}
console.log(sum(1, 2, 3)); //6
console.log(sum(...numbers)); //10

// Extra: Object의 spread syntax
const jeeho = {
    firstName: "Jeeho",
    lastName: "Park",
}
const person = {
    ...jeeho,
    email: "eduheeho@gmail.com",
}
console.log(person);
