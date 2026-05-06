"use strict"; // treat all JS code as newar version

// alert("hello");  //We are using node Js , not the browser

console.log(3 + 3);
console.log("deep");








// data Types---->

/* 
 ***** Primitive ******

  1.  number =>upto 2^53  
  2.  bigint
  3. string=>""
  4. boolean 
  5. null=>standalone value
  6.undefined => 
  7. symbol =>unique

  ****** Non primitive *******
   1.object
   2.array
   3.function


  *****  IMPORTANT *******
  for all primitive ===> use Stack
  for all NON Primitive ===> use Heap 


*/

console.log(typeof(5));
console.log(typeof "5");


console.log(typeof null);  //****ans =  object */
console.log(typeof undefined);  //******ans = undefine  */


const id=Symbol("123")
console.log(id);
const id2=Symbol("123")
console.log(id===id2);//false


//*** Object  ***/
let myobj={
  name:"Deep",
  age:32
}
 // Array
 let myarr=["deep",34,43,"yoo"]

// function 
let myfun=function(){
  console.log("Deep Sarkar");
  
} 

console.log(typeof myobj); //object
console.log(typeof myarr); //object
console.log(typeof myfun); //function

// object,array,function all are object but function is a "object function" so its type function



