// 할당 연산자
let assign = 0;
// 사칙 연산
console.log(1+2);
console.log(3-1);
console.log(4*3);
console.log(5/2);
console.log(Math.floor(5/2));
console.log(1483281%100);

//복찹할당면산자
assign += 10;
assign -= 3;
assign *=10;
assign /= 5;
console.log(assign); // 14
console.log(assign++); // 14 -> 15
console.log(assign--); // 15 -> 14
console.log(++assign); // 15 -> 15
console.log(--assign); //14 -> 14
console.log(assign) //14

// 비교 연산자
console.log(3>2); //true
console.log(3>=2); //true
console.log(5 <= 3); //false
console.log("alex" > "brad"); //fasle
console.log("alex" < "adam"); //alex
console.log("alex" < "alexed"); //true
console.log("나" > "가"); //true

//==
// 동등 연산자 (ĐẲNG thỨC)
const a = 1;
const b ='1';
console.log(a == b); //true
console.log( a == true); //true
console.log(0.1 + 0.2 != 0.3); //true
console.log(91 - '1' == 90); //true
console.log(true + true == 2); //true
console.log([] == 0); //true

console.log(8*null); //0
console.log("5-1"); // 4
console.log("three" * 3); //NaN

//일치 연산자 
//type 과 값 동시에 비교
console.log(a === b); //false
console.log(a !== b); // true
console.log(a !== Number[b]); //true

//논리 연산자
//and, or, not
console.log(true && false);
console.log(true && true);
console.log(false || true);
console.log(false || false);
console.log(!false);

// 
console.log(true ? 1 : 2);
console.log(false ? 1 : 2);
const result = Math.PI > 4 ? "is bigger" : "is smaller";
console.log(result);


