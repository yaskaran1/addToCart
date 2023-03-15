const object1= { 
  name: "Yaskaran",
  Role: "Software Engineer"
};
const object2=object1;
console.log(object2);

object1.name="Rahul";
console.log(object1);
console.log(object2);