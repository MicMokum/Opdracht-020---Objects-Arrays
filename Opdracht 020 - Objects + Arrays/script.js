let person = {
    name: "Michiel",
    age: 47.5
}

console.log(person);
console.log(person.name);
console.log(person['name']);
console.log(person.age);
console.log(person['age']);

let evaluations = [7, 10, 9];
console.log(evaluations);  // laat niks zien
console.log(typeof(evaluations));

let newVar = [];
newVar[0] = "groen";
newVar[1] = "blauw";
newVar[2] = "rood";
console.log(newVar.length);
console.log(newVar[0]);
console.log(newVar[newVar.length - 1]);
newVar[newVar.length] = "geel";
newVar[newVar.length] = 5;
newVar.push({greeting: "hi ik ben een object"});
console.log(newVar[newVar.length - 1]['greeting']);

