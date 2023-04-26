"use strict";

function askPassword(ok, fail) {
  let password = prompt("Password?", "");

  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

// wrapper
askPassword(
  function () {
    user.loginOk();
  },
  function () {
    user.loginFail();
  }
);

// bind solution
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// call solution
askPassword(
  function () {
    user.loginOk.call(user);
  },
  function () {
    user.loginFail.call(user);
  }
);

// apply solution
askPassword(
  () => user.loginOk.apply(user),
  () => user.loginFail.apply(user)
);

// Question 2:
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList: function () {
    // console.log(this.title);
    this.students.forEach(
      function (student) {
        console.log(this.title + ": " + student);
      }.bind(this)
    );
  },
};
group.showList();

// function User(name) {
//   this.name = name;

//   this.getName = function () {
//     return this.name;
//   };
// }

// let sorho = new User("Sorho");
// let yeo = new User("Yeo");

// console.log(sorho.getName());
// console.log(yeo.getName());
