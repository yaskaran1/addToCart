let dataset=[{
  firstName : "Charlie",
  lastName : "smith",
  email : "charlie@gmail.com"},
{
  firstName : "Yaskaran",
  lastName : "Yaskaran",
  email : "yaskaran@gmail.com"
},
  {
    firstName : "Charlie",
    lastName : "smith",
    email : "charlie@gmail.com"
}];

function sortEmail(dataset){
  let sortedDataset = dataset.sort((p1, p2) => (p1.email > p2.email) ? 1 : (p1.email < p2.email) ? -1 : 0);
  return sortedDataset;
}

console.log(sortEmail(dataset));