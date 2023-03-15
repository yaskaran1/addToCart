
function myfunction1(callback){
  console.log("myfunction1");
  callback();
};

function myfunction2(){
  console.log("myfunction2");
};

//myfunction1(myfunction2);


//callback hell
function function1(){
  setTimeout(()=>{
    myfunction1(myfunction2);
    setTimeout(()=>{
      myfunction2();
    },5000)
  },5000)
}

function1();