/*
Call all the functions parallelly and console the promise value.
Case 1: Arguments passed to all functions are true
Case 2: Arguments passed to 2nd functions is false */

function myfunction1(value){
  return new Promise((resolve,reject)=>{
    if(value===true){
      resolve("Resolved by myfunction1");
    }
    else{
      reject("Rejected by myfunction1");
    }
})
};

function myfunction2(value){
  return new Promise(function(resolve,reject){
    if(value===true){
      resolve("Resolved by myfunction2");
    }
    else{
      reject("Rejected by myfunction2");
    }
})
};

function myfunction3(value){
  return new Promise(function(resolve,reject){
    if(value===true){
      resolve("Resolved by myfunction3");
    }
    else{
      reject("Rejected by myfunction3");
    }
})
};

//Case 1
myfunction1(true)
.then(function(value){
  console.log(value);
  return myfunction2(true); 
})
.then(function(value){
  console.log(value);
  return myfunction3(true);
})
.then(function(value){
  console.log(value);
})
.catch((err)=>{
  console.log(err);
})

//Case 2

myfunction1(true)
.then(function(value){
  console.log(value);
  return myfunction2(false); 
})
.then(function(value){
  console.log(value);
  return myfunction3(true);
})
.then(function(value){
  return value;
})
.catch((err)=>{
  console.log(err);
})

