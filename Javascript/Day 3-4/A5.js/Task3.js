let text =[{
  firstName : "Charlie",
  lastName : "smith",
  email : "charlie@yopmail.com"},
{
  firstName : "Alexa",
  lastName : "Denial",
  email : "denial@gmail.com"
}];
function Array(text){
      return text.map((value)=> {return `Hi I am ${value.firstName.charAt(0).toUpperCase()+value.firstName.slice(1,)} ${value.lastName.charAt(0).toUpperCase()+value.lastName.slice(1,)}. You can reach out to me on ${value.email}.`});
}
console.log(Array(text));