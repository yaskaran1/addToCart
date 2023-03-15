/* 
Create 3 functions that takes an argument
These functions returns a promise
The promise will resolve with a message "resolved by 'function name'", if the passed argument is true
The promise will reject with a message "rejected by 'function name'",if the passed argument is false */

function myfunction1(value){
  return new Promise(function(resolve,reject){
    if(value===true){
      resolve("Resolved by myfunction1");
    }
    else{
      reject("Rejected by myfunction1");
    }
})

.then((result)=>{
  console.log(result);
})

.catch((err)=>{
  console.log(err);
})
}
function myfunction2(value){
  return new Promise(function(resolve,reject){
    if(value===true){
      resolve("Resolved by myfunction2");
    }
    else{
      reject("Rejected by myfunction2");
    }
})
.then((result)=>{
  console.log(result);
})

.catch((err)=>{
  console.log(err);
})
}
function myfunction3(value){
  return new Promise(function(resolve,reject){
    if(value===true){
      resolve("Resolved by myfunction3");
    }
    else{
      reject("Rejected by myfunction3");
    }
})
.then((result)=>{
  console.log(result);
})

.catch((err)=>{
  console.log(err);
})
}