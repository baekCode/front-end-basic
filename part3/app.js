import "./styles.css";

function isEven(a) {
    if (a % 2 === 0) return true;
    return false;
}

console.log(isEven(30));
console.log(isEven(29));

function isOdd(a) {
    // if (a % 2 === 1) {
    //   return true;
    // } else {
    //   return false;
    // }
    return a % 2 !== 0;
}

console.log(isOdd(30));
console.log(isOdd(29));

// function fizzBuzz(num) {
//   if (num % 15 === 0) return "FizzBuzz";
//   else if (num % 3 === 0) return "Fizz";
//   else if (num % 5 === 0) return "Buzz";
//   return num;
// }

//fizzBuzz
function fizzBuzz(num) {
    if (num % 15 === 0) return "FizzBuzz";
    if (num % 3 === 0) return "Fizz";
    else if (num % 5 === 0) return "Buzz";
    return num;
}

console.log(fizzBuzz(1));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));

function getDayOfWeek(num) {
    switch (num) {
        case 0:
            return console.log("Sun");
        case 1:
            return console.log("Mon");
        case 2:
            return console.log("Tue");
        case 3:
            return console.log("Wed");
        case 4:
            return console.log("Thu");
        case 5:
            return console.log("Fri");
        case 6:
            return console.log("Sat");
        default:
            return console.log(null);
    }
}

getDayOfWeek(0);
getDayOfWeek(1);
getDayOfWeek(2);
getDayOfWeek(3);
getDayOfWeek(4);
getDayOfWeek(5);
getDayOfWeek(6);
getDayOfWeek(7);

var aaaa;
function a() {
    function b() {
        function c() {
            aaaa = 123 + 3;
        }
        c();
        console.log(aaaa);
    }
    b();
}
a();
// 이위치에서는 a()가 무슨일을 하는지 알수없어서 찾을수없다.
console.log(aaaa);

//while 반복문 사용해보기
function logRepeat() {
    var i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}
logRepeat();

//while 반복문 사용하여 fizzBuzz 재사용해보기
function fizzBuzzGame(max) {
    var i = 1;
    while (i <= max) {
        console.log(fizzBuzz(i));
        i++;
    }
}

fizzBuzzGame(50);

function gugudan(num, maxNum) {
    var i = 1;
    // if(maxNum === undefined){
    //   maxNum = 9;
    // }
    maxNum = maxNum || 9;
    while (i <= maxNum) {
        console.log(`${num} * ${i} = ${num * i}`);
        i++;
    }
    console.log("the end");
}

gugudan(2);
gugudan(5, 4);

//i를 5번 출력하기
function logRepeat(count, aa) {
    var i = 1;
    while (i <= count) {
        aa(i);
        i++;
    }
}

logRepeat(5, function (i) {
    console.log(i);
});
