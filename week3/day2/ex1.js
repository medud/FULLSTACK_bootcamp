const people = ["Greg", "Mary", "Devon", "James"];
people.splice(0,1)
console.log(people)

people[2]="Jason";

people.push("Mohamed") 
console.log(people);
let x = people.indexOf("Mary");
console.log(x);

let new_people=people.slice(1)
console.log(new_people);

let y = people.indexOf("foo");
// console.log(y) because it dos'nt exist

const last = people[people.length - 1];
console.log(last);


for (i=0;i<people.length;i++) {
    console.log(people[i]);   
}




