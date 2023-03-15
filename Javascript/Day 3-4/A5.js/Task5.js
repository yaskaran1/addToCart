let dataset=[{
  firstName : "Charlie",
  lastName : "smith",
  email : "charlie@yopmail.com"},
{
  firstName : "Yaskaran",
  lastName : "Yaskaran",
  email : "Yaskaran@gmail.com"
}];

function randomAge(dataset){
  dataset.map((value)=>{return value.age=Math.floor(Math.random()*(35-10)+10)});
  return dataset;
}

console.log(randomAge(dataset))

let text =[{
  firstName : "Charlie",
  lastName : "smith",
  email : "charlie@yopmail.com"},
{
  firstName : "Alexa",
  lastName : "Denial",
  email : "alexa@gmail.com"
}];

function returnName(text){
  return text.map((value)=>{ return value.email.charAt(0).toUpperCase()+value.email.slice(1).replace(/@.*$/,"")});
}
console.log(returnName(text));