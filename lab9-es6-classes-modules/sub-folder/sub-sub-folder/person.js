"use strict";

class Person {
  #name;
  #dateOfBirth;

  constructor(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
  }

  get name() {
    return this.#name;
  }

  set name(n) {
    this.#name = n;
  }

  get dateOfBirth() {
    return this.#dateOfBirth;
  }

  set dateOfBirth(date) {
    this.#dateOfBirth = date;
  }

  toString() {
    return `Name: ${
      this.name
    }, DateOfBirth: ${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.toLocaleString(
      "en-US",
      { month: "2-digit" }
    )}-${this.dateOfBirth.toLocaleString("en-US", { day: "2-digit" })}`;
  }
}

export { Person };
