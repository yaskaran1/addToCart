let jsonObj={
  name:"Yaskaran",
  ID:"RTIN0232"
};

console.log(typeof(jsonObj));
console.log(jsonObj);

let myJsonStr=JSON.stringify(jsonObj);

console.log(typeof(myJsonStr));
console.log(myJsonStr);

let newJsonObj=JSON.parse(myJsonStr);
console.log(typeof(newJsonObj));
console.log(newJsonObj);