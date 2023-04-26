"use strict";

import { Person } from "./sub-sub-folder/person.js";
import { Employee } from "./sub-sub-folder/sub-class/employee.js";

// Question 1
console.log("Question 1");
const ana = new Person("Ana Smith", new Date(1998, 11, 15));
const bob = new Person("Bob Jone", new Date(1945, 10, 16));
const carlos = new Person("Carlos Slim Helu", new Date(1976, 8, 24));

let people = [ana, bob, carlos];

for (let person of people) {
  console.log(person.toString());
}

// Question 2
console.log("--------------------------------------");
console.log("Question 2");
const jim = new Employee(
  "Jim Hanson",
  new Date(1984, 1, 25),
  "245,990.00",
  new Date(2000, 7, 9)
);

console.log(jim.doJob("Software Engineer"));
