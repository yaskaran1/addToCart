function myfunction(){
  setTimeout(() => {
    console.log("hello");
  }, 5000);
}
myfunction();

setTimeout(myfunction,1000);