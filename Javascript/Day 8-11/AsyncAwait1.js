async function myfunction() {
    console.log("call no 1");
    let response= await fetch('https://api.github.com/users');
    console.log('call no 2');
    let users=await response.json();
    console.log('call no 3');
    return users;
}

console.log('call no 4');
let a=myfunction();
console.log(a);
myfunction().then((data)=>{
  console.log(data);
})
console.log('call no 5');