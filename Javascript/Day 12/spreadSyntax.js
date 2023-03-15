const object1={
  name: "yaskaran",
  role: "Software engineer"
}

const object2={...object1};
console.log(object2);

object1.name="rahul";
console.log(object1);
console.log(object2);