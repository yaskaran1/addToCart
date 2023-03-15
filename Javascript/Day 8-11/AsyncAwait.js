
async function f() {
  await Promise.resolve("Whoops!");
}
console.log(f());
