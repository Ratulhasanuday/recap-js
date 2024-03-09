const student={
              name:'Ratul',
              age:20,
              doWork:['web','devlopment',]
};
const number = [12, 23, 53, 63, 12, 60]
//1. template string
const abut=` My Name is${student.name} age of${student.age} hsa number${number[2]} also like do Worke${student.doWork[0]}`
console.log(abut);
//2. arrow function
const getFiftyFive=()=>55;
const addSixtyFive=num => num+65;
const isEven=x=>x%2==0;//this is single line arrow  function 
const addThree=(x,y,z)=>x+y+z;
const doMath=(num1,num2)=>{//multiline function use in this typre function
              const sum=num1+num2;
              return sum;
}
//3.spread opperator
const newNumber=[...number];
number.push(99);
number.push(99);
number.push(99);
number.push(99);
console.log(number);
console.log(newNumber);
//creat a new array from an older array and add  an element
const currentNumber=[...number,55]
console.log(number);
console.log(newNumber);
console.log(currentNumber);