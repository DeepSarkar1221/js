let score = 30;

console.log(typeof score); // number

console.log(typeof score); //number

let score_in_string = "30";
let val_in_int = Number(score_in_string);
console.log(val_in_int); // ans = 30
console.log(typeof val_in_int); // ans = number

score_in_string = "30ab";
val_in_int = Number(score_in_string);
console.log(val_in_int); // ans = NaN
console.log(typeof val_in_int); // ans = number

let score2 = null;
let intval = Number(score2);
console.log(intval); // ans = 0

score2 = undefined;
console.log(Number(score2)); // NaN

/*  conversion  ===> Number
 "33" =>33
 "33sb"=>NaN
 null => 0
 undefined => NaN
 true=>1;
 false=>0
 

*/

let isLoggedIn=1;
 console.log(Boolean(isLoggedIn));
 
/* conversion ====> Boolean

    1=>true;
    0=>false;
    ""=>false;
    "false"=>true // not a empty string is always a true boolean
    NaN,undefined,null ==> false


*/

// conversion ===>String

let result=12;
let stringNumber=String(result)

console.log( stringNumber);
console.log(typeof stringNumber);

/*  conversion ===> Sttring

    NaN==> NaN  (String)
    undefined==>undefined  (String)
    lly,for null



*/




