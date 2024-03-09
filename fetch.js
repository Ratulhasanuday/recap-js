//1. JSON
const student = {
              name: 'Ratul',
              age: 20,
              job: ['web developer', 'graphic designer']
}
const studentJson = JSON.stringify(student);
console.log(student);
console.log(studentJson);
const studentObj = JSON.parse(studentJson)
console.log(studentObj);
//2.fetch
// fetch('url')
//               .then(res => res.json())
//               .then(data => console.log(data))
//3.keys,values
const key=Object.keys(student);
console.log(key);
const  values=Object.values(student);
console.log(values);
 // for
 const number=[23,54,67,87,23,78]
 number.forEach(num=>console.log(num))
 number.map(num=>num*2)
 //for of used only array like object
 // for in used only object 
 //add or remove from an array
 const products=[
              {name:'Laptop',price:32000,brand:'lenovo',color:'silver'},
              {name:'Phone',price:7000,brand:'iPhone',color:'golden'},
              {name:'watch',price:3000,brand:'casio',color:'yellow'},
              {name:'sunglass',price:3000,brand:'ribon',color:'black'},
              {name:'camera',price:9000,brand:'canon',color:'gray'},
];
const newProduct={name:'webcam',price:6000,brand:'lal',color:'blace'}
// copy products array and then add newProduct
const newProducts=[...products,newProduct]
console.log(newProducts);
//creat  a new array without one specific item
//remove phone means creat a new arra without the phone;
const remainin =products.filter(product=>product.name!=='Phone')
console.log(remainin);

