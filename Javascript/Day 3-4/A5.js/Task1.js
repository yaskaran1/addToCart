let dataset=[{
  firstName : "Charlie",
  lastName : "smith",
  email : "charlie@yopmail.com"},
  {
    firstName : "Charlie",
    lastName : "smith",
    email : "yaskaran@yopmail.com"}];


function emailReturn(dataset){
  return dataset.map((item)=>{return item.email});
}
console.log(emailReturn(dataset));
