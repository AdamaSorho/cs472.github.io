"use strict";

import { Person } from "../person.js";

class Employee extends Person {
  #salary;
  #hireDate;

  constructor(name, birthDate, salary, hireDate) {
    super(name, birthDate);
    this.#salary = salary;
    this.#hireDate = hireDate;
  }

  doJob(jobTitle) {
    return `${this.name} is a ${jobTitle} who earns $${this.#salary}`;
  }
}

export { Employee };
