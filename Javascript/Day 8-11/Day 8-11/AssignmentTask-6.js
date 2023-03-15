/*
Call all the functions in sequence by promise chaining and console the promise value.
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

//CASE 1
Promise.all([myfunction1(true),myfunction2(true),myfunction3(true)])
.then(function(value){
  console.log(value);
  return myfunction1(true);
})

.then(function(value){
  return myfunction2(true);
})

.then(function(value){
  return myfunction3(true);
})

.catch((err)=>{
  console.log("can't handle");
})

//CASE 2
Promise.all([myfunction1(true),myfunction2(false),myfunction3(true)])
.then(function(value){
  return myfunction1(true);
})

.then(function(value){
  return myfunction2(true);
})

.then(function(value){
  return myfunction3(true);
})

.catch((err)=>{
  console.log("can't handle");
})