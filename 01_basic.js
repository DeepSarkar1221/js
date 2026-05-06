console.log("Deep")

const accountId= 144345;  //Not changable
let accountEmail="Deep0404@gamil.com"; // changable

var accountPassword="12345"  //changable
console.log(`my accId is ${accountId} and my email is ${accountEmail}`);


/*
  Prefer not use var
  because of issue in block scope and functional scope

*/
accountCity="Malda"  // in default it is a variable type not const type

console.log(accountEmail);

console.table([accountEmail,accountId,accountPassword,accountCity])

let accountState // if we just decalre it then its defaule e undefine hoi
console.log(accountState); 


