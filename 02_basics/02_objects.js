//Singleton

// Object.create  -->construtor through
// const tinderUser={}    -----> Non Singleton Object

const tinderUser = new Object(); //----->  Singleton Object
tinderUser.id = "1223abc";
tinderUser.name = "Sammy";
tinderUser.isLoggediN = false;

// console.log(tinderUser);

//object literals
const mySym = Symbol("key1");

const JsUser = {
  fname: " Shailesh",
  lname: "Pandey",
  "full Name": "Shailesh Pandey",
  [mySym]: "KeyOne",
  age: 25,
  location: "Gondia",
  email: "Shailesh@gmail.com",
  moblie: 8412907451,
  isLoggedIn: false,
  lastLogInDays: ["Mon", "Tues"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log( JsUser[mySym]);

JsUser.email = "vaibhav@gmail.com";
// Object.freeze(JsUser)
JsUser.email = "vinu@gmail.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello Js User");
};
JsUser.greeting2 = function () {
  console.log(`Hello Js User, ${this.fname}`);
};
// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());

const regularUser = {
  email: " user@gmail.com",
  fullName: {
    userName: {
      fname: "Shailesh",
      lname: "Pandey",
    },
  },
};

// console.log(regularUser.fullName.userName.fname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

const obj3 = { obj1, obj2 };
// console.log(obj3);

//const obj4 = Object.assign(obj1,obj2);
//Object.assign(traget,source)
const obj4 = Object.assign({}, obj1, obj2);
// console.log(obj4);

const obj5 = { ...obj1, ...obj2 };
// console.log(obj5);

const users = [
  {
    id: 1,
    email: "s@gmail.com",
  },
  {
    id: 1,
    email: "s@gmail.com",
  },
  {
    id: 1,
    email: "s@gmail.com",
  },
  {
    id: 1,
    email: "s@gmail.com",
  },
];

// console.log(users[1].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggediN"));

//**********destucturing of Object******** */

const course = {
  coursename: "Js In Hindi",
  price: 999,
  courseInstructor: "Hitesh",
};

// course.courseInstructor
const { courseInstructor: instructor } = course;
// console.log(courseInstructor);

console.log(instructor);

// {
//     "name":"Shailesh",
//     "courseName":"Js In Hindi",
//     "price":"free"
// }


// [
//     {},
//     {},
//     {},
//     {},
//     {}
// ]