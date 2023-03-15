let promise=new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve(1);
  },5000);
});

promise.then((value)=>{
      console.log(value);
    return value+1;
})
.then((value)=>{
  console.log(value);
  return value+1;
})
.then((value)=>{
  console.log(value);
  return value+1;
});