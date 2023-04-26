"use strict";

class Course {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  save() {
    const exitIndex = db.findIndex((c) => c.id === this.id);
    if (exitIndex !== -1) return -1;
    db.push(this);

    return this;
  }

  edit() {
    const courseIndex = db.findIndex((c) => c.id === this.id);
    if (courseIndex === -1) return courseIndex;
    db.splice(courseIndex, 1, this);

    return this;
  }

  static deleteById(id) {
    const courseIndex = db.findIndex((c) => c.id == id);
    if (courseIndex === -1) return courseIndex;
    const course = db[courseIndex];
    db.splice(courseIndex, 1);

    return course;
  }

  static getAll() {
    return db;
  }

  static findById(id) {
    return db.find((c) => c.id == id);
  }
}

let db = [
  new Course(1, "FPP"),
  new Course(2, "MPP"),
  new Course(3, "Algorithm"),
  new Course(4, "WAP"),
];

module.exports = Course;
