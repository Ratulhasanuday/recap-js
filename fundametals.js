// 1. How to declare a vriable using let and const
const names = 'Ratul';
let season = 'Rainy';
season = 'Winter';
// 2 condition
//6 basic conditon:>,<,==,,>=,<=,===,!==,
//multiple conditon :&&,||
if (names === 'Ratul' || season === 'Rainy') {

};
else if (names === 'Ratul') { }
else { };
//3.array
// index,lenght,push
const number = [12, 23, 53, 63, 12, 60]
//4. for loop
for (let i = 0; i < number.lengt; i++) {
     const element = number[i];
     console.log(element);
}
//5. function 
function multiply(num1, num2) {
     const result=num1*num2;
     return result
}
const total=multiply(25,3);
console.log(total);
//6.Object
//3 way to acces property by name
const student={
     name:'Ratul',
     age:20,
}
const myVariable='age'
console.log(student.name);//direct by property
console.log(student['name']);//access by property name string [] use korle '' use korte hobe
console.log(student[myVariable]);//access by property name in a vriable
