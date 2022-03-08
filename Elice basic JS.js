//산술연산자
console.log(20+10);
console.log(20-10);
console.log(20*10);
console.log(20/10);
console.log(20%10);

console.log("20"+"10"); //2010으로 표시됨
console.log("20"-"10");
console.log("20"*"10");
console.log("20"/"10");
console.log("20"%"10");
// 문자열도 산술연산자로 표시 가능하나 +의 경우는 다르게 나타나므로 주의!

var num = 10;

console.log(++num); //num+1 후 num 출력 11
console.log(--num); //-1 후 num 출력    10

console.log(num++); // num 출력 후 num+1 10 . num =11 ** =출력을 먼저 한다. 
console.log(num--); // num 출력 후 num-1 10 = 출력은 11로 최종값은 10

console.log(10 == 20);  //값이 같다. false
console.log(10 === 20); //데이터 타입과 값이 같다
console.log(10 !== 20);  // 값이 같지 않다

console.log(10 > 20); 
console.log(10 >= 20);
console.log(10 < 20);
console.log(10 <= 20);

