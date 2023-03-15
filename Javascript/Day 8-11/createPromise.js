let promise=new Promise((resolve, reject)=>{
    setTimeout(()=>{
      reject(true);
    },5000);
});

promise.catch((value)=>{
  console.log(value);
});

setTimeout(()=>{
  console.log("hello");
},5000);
