const count=true;
let promise1=new Promise(function(resolve,reject){
  if(count){
    resolve("resolved by promise 1");
  }
  else{
    reject("rejected by promise 2");
  }
})

console.log(promise1);