// var futureVar = undefined;
// let으로 변수를 선어한다.
//변수의 타입을   설정할 필요가 없다
let foo = "a let variable";
let food = "pizza";
let name = "alex";
let age = 100000;
let isStudent = true;
console.log(food);
console.log(age);
console.log(isStudent);

// ket 변수는 배함당이 기능하다, 타입도 바뀐다
foo = 50000;
console.log(foo);

//const 로 상수를 선어한다
const userEmail = "alex@gmail.com";
const userBirthYear = 1980;
console.log(userBirthYear);

// const 는 재할당이 불가능하다
// userBirthYear = 1990;

// var 로 변수를 선어할 수 있다
var lecture = "javascript";
var startTime = 9;
var isHard = true;
console.log(lecture);


//hoisting
// var 변수는 코드 실행 전에 코드의 체일 위로
//끌려 올라가 'undefined' 로 먼저 선어된다
console.log(futureVar);
var futureVar = "I don't exist ... yet";
console.log(futureVar);
// 호이스팅을 일반적인 흐름을 역행하는 방삭이가 때문에
// 현제 var 는 사용이 비권장된다

//예전에는 let, const 를 생략하면 var 가 되었는데
// 현재는 안된다

// console.log(notInit);
notInit = "not init";
console.log(notInit);



