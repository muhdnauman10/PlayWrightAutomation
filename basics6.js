//objects is collection of properties

let person = {
  firstName: "john",
  lastName: "Joe",
};

console.log(person.lastName);
console.log(person["lastName"]);
person.firstName = "Tim doe";
console.log(person.firstName);
person.gender = "male";
console.log(person);
delete person.gender;
console.log(person);
console.log("gender" in person);
//print all the values of javascript object
for (let key in person) {
  console.log(person[key]);
}
