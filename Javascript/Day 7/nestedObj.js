let person={
  name: "yaskaran",
  city: "jalandhar",
  behav:{
    name: true,
    show: function(){
      console.log(this.name);
    }
  },
  info: function(){
    console.log(this.name);
  }
};

console.log(person.behav.show());
console.log(person.info());
