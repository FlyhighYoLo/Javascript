function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 30);
sayHello("dal", 20);
sayHello("dongyeop", 33);

//계산기 만들기

function plus(a, b) {
  console.log(a + b);
}
function divide(a, b) {
  console.log(a / b);
}

plus(2, 2);
divide(10, 2);
// 완성은 아래에
const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },

  divide: function (a, b) {
    console.log(a / b);
  },
};

calculator.add(5, 1);
calculator.minus(2, 1);
calculator.divide(4, 2);

//데이터를 받는법

function sayYourName(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayYourName("DongYeop", 34);
sayYourName("KkoBbi", 28);

// 객체에 함수 삽입
const player = {
  name: "DongYeop",
  sayHello: function (otherPersonName) {
    console.log("hello " + otherPersonName + " Nice to meet U!");
  },
};

console.log(player.name);
player.sayHello("Kkobbi");
player.sayHello("Azam");
/* 밖에선 원래 이랬던 함수 식 
function sayHello(){
} (이름위치가 다르다!)*/

//의미가 있는 property를 저장하려고 할때

const player = {
  name /*property*/: "DongYeop",
  age: 34,
};

console.log(player);

player.name = "Kkobbi";
console.log(player);

player.sexy = "maybe soon";
console.log(player);

//return 이해하기

const calculator = {
  plus: function (a, b) {
    console.log(a + b); //여기서 1회성으로 값을 나타내고 저장되지 않음
  },
  minus: function (a, b) {
    return a - b;
  },
};

const plusResult = calculator.plus(2, 3);
console.log(plusResult); //undefined로 뜸 (저장되지 않았기 때문에)

const minusResult = calculator.minus(2, 3);
console.log(minusResult);
//다른문제
const age = 33;

function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(33);
console.log(krAge);

// if ~ else 조건문

var a = 20;
var b = 40;

if (a > b) {
  console.log("a는 b보다 작다");
} else {
  console.log("b는 a보다 크다");
}
// 조건이 true면 if문, false면 else문이 실행된다.

//else if 문 (조건들이 많을때)
var a = 20;
var b = 40;
var c = 60;

if (a > b) {
  document.write("a > b");
} else if (b > c) {
  document.write("b>c");
} else if (a < c) {
  document.write("a < c");
} else if (b < c) {
  document.write("b < c");
} else {
  document.write("모든 조건을 만족하지 않는다.");
}

//중첩 if문
/*1. var a = 20; var b = 40;을 입력하여 두 변수를 생성합니다.

  2.조건문 형식 if ( ) { if ( ) { } else { } } else { }를 입력합니다.

  3.a와 b가 같지 않다면, 중첩된 if문 실행, 같다면 "a === b" 출력합니다.

  4.중첩된 if문에서, a가 b보다 크면 "a > b", 그렇지 않으면 "a < b" 출력합니다.*/

var a = 20;
var b = 40;

if (a !== b) {
  if (a > b) {
    document.write("a > b");
  } else {
    document.write("a < b");
  }
} else {
  document.write("a === b");
}

//
