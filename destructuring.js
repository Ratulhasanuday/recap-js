//array destructuring
const number=[42,65];
// const x=number[0];
// const y=number[1];
// const [x,y]=[42,65]
const [x,y]=number
console.log(x,y);
function boxify(num1,num2) {
              const nums=[num1,num2];
              return nums;
}
const [a,b]=boxify(4,6)
console.log(a,b);
const student={
     name:'Ratul',
     age:20,
     job:['web developer','graphic designer']
}
const [first,second]=student.job;
console.log(first,second);
//object destructuring
const {name,age}={name:'ratul',age:20,}
console.log(name,age );
const employe={
              id:'VS Code',
              designation:'developer',
              machine:'mac',
              language:['HTML','CSS','JAVASCRIPT',],
              specification:{
                            height:66,
                            wight:'65kg',
                            address:'mymensingh',
                            dring:'water',
                            watch:{
                                          color:'black',
                                          price:200,
                                          brand:'garmin',
                            }
                            
              }
}
const {machine,id}=employe;
console.log(machine,id);
const {wight,address}=employe.specification;
console.log(wight,address);
const [code,names]=employe.language;
console.log(code,names);
const {brand}=employe?.specification?.watch;
console.log(brand);