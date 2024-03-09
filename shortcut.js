//'almas',5, true,{},[]
//'',0,false,null, undefined
let myVar = 5;
if (myVar) {
    //check any truthy
    myVar = myVar * 20;
}
else {
    myVar = 0
}
let myMoney = 50;
//you can ceck negative or falsy anything
if (!myMoney) {

}
const money = 80;
let food;
if (money>100) {
    food='birayani';

}
else {
    food="cha biscuit"
}
//ternary operator 
let food1=(money>100)?"biryani":"cha biscut";
let drink=(money>100 && myVar>100)?"coke":"filter water";
console.log(drink);
// number to string convertion
const num1=52;

console.log();

const numStr=num1+'';
console.log(numStr);
// string to number
const input='560'
const inputNum=+input
console.log(inputNum);

let isActive=true;
const showUser=()=>console.log('display User');
const hideUser=()=>console.log('hide user');
isActive?showUser():hideUser();
//use && if the left side is true then right side will be executed

isActive&&showUser()
//use || if the left side is false then right side will be executed
isActive|| hideUser()
//toggle boolean
isActive=!isActive;


console.log();
console.log();
