function constObj(){
  this.name= "yaskaran"; 
  this.id= 234;
}

let obj1=new constObj();
let obj2=new constObj();
constObj.prototype.id="male";
obj1={...obj1,gender:"male"};
console.log(obj1.id);
console.log(obj2.id);

console.log(Object.keys(obj1).length);
console.log(obj1.gender);
