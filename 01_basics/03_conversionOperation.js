let score = 33
let score1 = "33abc"
let score2 = null
let score3 = undefined

console.log(typeof score);
console.log(typeof (score1));
console.log(typeof (score2));
console.log(typeof score3);



let valueInNumber = Number(score1)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let valueInNumber1 = Number(score2)
console.log(typeof valueInNumber1);

//"33"=>33
//"33abc"=>nan
// true=>1;false=>0

let isloggedIn = 1
let booleanisloggedIn = Boolean(isloggedIn)
console.log( booleanisloggedIn);
//1=> true; 0=>false
//"" => false
//"Akash"=> true

let number = 33
let stringNumber = String(number)
console.log(stringNumber);
console.log(typeof stringNumber);

/***************************** Operation *************************/

let value =3
let negValue = -value
console.log(negValue);

/*console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);*/

let str1 = "hello"
let str2 = "world"

let str3 = str1 + str2
console.log(str3);
console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");
console.log(+true);

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);



