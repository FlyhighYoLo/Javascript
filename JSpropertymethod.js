//문자열 프로퍼티와 메서드

var str1 = "Hello World";

str1.length; // 문자열 길이 11
str1.charAt(0); //문자 H 추출
str1.split(""); //공백 기준으로 문자 나눈 후 배열 [Hello, World]로 출력
console.log(str1);

// 배열 프로퍼티와 메서드

var fruit =["사과","배","포도"];

fruit.length;          //데이터 개수
fruit.push("딸기");    //배열 뒤에 데이터 삽입
fruit.unshift("레몬"); //배열 앞에 데이터 삽입

fruit.pop();          //배열 뒤의 데이터 제거
fruit.shift();        //배열 앞의 데이터 제거 

//math의 수학연산 메서드
Math.abs(-3);     //절대값
Math.ceil(0.3);   //올림
Math.floor(10.9); //내림
Math.random();    // 임의의 숫자 출력

//문자를 숫자로 변환하는 메서드
parseInt("20.6");    //정수 형태의 20 변환
parseFloat("20.6");  //실수 형태의 20.6변환

