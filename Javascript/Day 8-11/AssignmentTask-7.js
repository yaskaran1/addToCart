/*
Call all the functions in sequence by async await and console the promise value.
Case 1: Arguments passed to all functions are true
Case 2: Arguments passed to 2nd functions is false  */

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
async function case1(){
  try{
    console.log(await myfunction1(true));
    console.log(await myfunction2(true));
    console.log(await myfunction3(true));
  }
  catch(error){
    console.log(error);
  };
}

//CASE 2
async function case2(){
  try{
    console.log(await myfunction1(true));
    console.log(await myfunction2(false));
    console.log(await myfunction3(true));
  }
  catch(error){
    console.log(error);
  };
}

case1();
case2();

