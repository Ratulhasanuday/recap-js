const products=[
              {name:'Laptop',price:32000,brand:'lenovo',color:'silver'},
              {name:'Phone',price:7000,brand:'iPhone',color:'golden'},
              {name:'watch',price:3000,brand:'casio',color:'yellow'},
              {name:'sunglass',price:3000,brand:'ribon',color:'black'},
              {name:'camera',price:9000,brand:'canon',color:'gray'},
];
const  brand=products.map(product=>product.brand);//map creat a new array and store data
const price=products.map(product=>product.price)
console.log(brand);
console.log(price);
products.forEach(product=> console.log(product))//forEach kuno kicu return kore na
products.forEach(product=>{

}
)
//3. filter
const cheap=products.filter(product=>product.price<=5000)
console.log(cheap);
const specificName=products.filter(product=>product.name.includes('n'))
console.log(specificName);
const special=products.find(product=>product.name.includes('n'))
console.log(special);