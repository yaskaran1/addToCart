let student={
  name:{
    first:"yaskaran",
    second:"rahul"
  },
};
student.name.marks=45;
console.log(student);

student={...student,name:{...student.name,third:"prabh"}};
console.log(student);
