const obj1={
  name:"yaskaran",
  id: 234,
  get userName(){
    return this.name;
  }
};

console.log(obj1.userName);

const obj2={
  name:"yaskaran",
  id: 234,
  set changeName(newName){
    this.name=newName;
  }
};

obj2.changeName="karan";
console.log(obj2.name);