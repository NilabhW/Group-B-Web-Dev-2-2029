const obj = {
  name: "Arnav",
  hobbies: ["Skecthing", "Football"],
  age: 20,
  hasACar: true,
};

console.log(obj);

localStorage.setItem("person", JSON.stringify(obj));

const val = JSON.parse(localStorage.getItem("person"));

console.log(val);
