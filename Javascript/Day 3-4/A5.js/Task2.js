let dataset=[{
  firstName : "Charlie",
  lastName : "smith",
  email : "charlie@yopmail.com"},
{
  firstName : "Yaskaran",
  lastName : "Yaskaran",
  email : "yaskaran@gmail.com"
}];

function nameFromEmail(dataset){
  let names=[];
  for(let i in dataset){
      names[i]=dataset[i].email.charAt(0).toUpperCase()+dataset[i].email.slice(1).replace(/@.*$/,"");
  }
  return names;
}

console.log(nameFromEmail(dataset));