"use strict";

// use these curly brackets to create different execution contexts and avoid same variables errors
// {
//   //Question 1:
//   console.log("Question 2");
//   const student = {
//     firstName: "Adama",
//     lastName: "Sorho",
//     grades: [90, 82, 100],
//     inputNewGrade: function (newGrade) {
//       this.grades.push(newGrade);
//     },
//     computeAverageGrade: function () {
//       let result = 0;
//       for (let grade of this.grades) {
//         result += grade;
//       }

//       return result / this.grades.length;
//     },
//   };

//   const sorho = Object.create(student);
//   const yeo = Object.create(student);
//   yeo.firstName = "Yaya";
//   yeo.lastName = "Yeo";
//   yeo.inputNewGrade(56);

//   const coulibaly = Object.create(student);
//   coulibaly.firstName = "Ismael";
//   coulibaly.lastName = "Coulibaly";
//   coulibaly.inputNewGrade(100);

//   let students = [sorho, yeo, coulibaly];

//   for (let student of students) {
//     // The average grade is equal for each student object because they belong to the same student object where the grades array is created.
//     console.log(
//       `${student.lastName} average grade is: ${student.computeAverageGrade()}`
//     );
//   }
// }

// // use these curly brackets to create different execution contexts and avoid same variables errors
// {
//   // Question 2
//   console.log("-------------------------------------------------");

//   console.log("Question 2");
//   function Student(firstName, lastName, grades) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.grades = grades;
//   }

//   Student.prototype.inputNewGrade = function (newGrade) {
//     this.grades.push(newGrade);
//   };

//   Student.prototype.computeAverageGrade = function () {
//     let result = 0;
//     for (let grade of this.grades) {
//       result += grade;
//     }

//     return result / this.grades.length;
//   };

//   const sorho = new Student("Adama", "Sorho", [90, 82, 100, 98]);
//   const yeo = new Student("Yaya", "Yeo", [76, 59, 100, 100]);
//   const coulibaly = new Student("Ismael", "Coulibaly", [89, 58, 90, 90]);

//   let students = [sorho, yeo, coulibaly];

//   for (let student of students) {
//     console.log(
//       `${student.lastName} average grade is: ${student.computeAverageGrade()}`
//     );
//   }
// }

// // Question 3
// console.log("-------------------------------------------------");
// console.log("Question 3");
// Array.prototype.sort = function () {
//   for (let i = 0; i < this.length; ++i) {
//     let j = this.length - 1;

//     while (i < j) {
//       if (this[i] > this[j]) {
//         let temp = this[i];
//         this[i] = this[j];
//         this[j] = temp;
//       }
//       --j;
//     }
//   }

//   return this;
// };

// let nums = [76, 9, 100, 10];
// console.log(nums.sort());

const students = [
  { name: "Quincy", grades: [99, 88], courses: ["cs301", "cs303"] },
  { name: "Jason", grades: [29, 38], courses: ["cs201", "cs203"] },
  { name: "Alexis", grades: [79, 78], courses: ["cs105", "cs211"] },
  { name: "Sam", grades: [91, 82], courses: ["cs445", "cs303"] },
  { name: "Katie", grades: [66, 77], courses: ["cs303", "cs477"] },
];

const studentsAverageGrade = students
  .filter((student) => student.courses.includes("cs303"))
  .reduce((prev, student) => {
    prev[student.name] =
      student.grades.reduce((val, grade) => val + grade, 0) /
      student.grades.length;

    return prev;
  }, {});

console.log(studentsAverageGrade);
