// this keyword:-

// In real world objects are used for representing real entities, lets say
// e.g.
// let user = {
//     firstname: 'Abhijeet', // here, we are wrapping up data overhere, you can also wrap up the fucntionality with the object
//     age: 23,
//     sayHi: function (){ // function bound to an object is called a method.
//         console.log('hi', user.firstname);
//     }
// };
// let admin = user;
// console.log(admin === user); // true
// admin.sayHi(); // hi Abhijeet
// console.log(admin.sayHi); // function definition
// // --------------------------------------------------
// console.log(user === admin);
// user.sayHi();
// console.log(user.sayHi);
// // ---------------------------------------------------

// e.g.
// let user = {
//         firstname: 'Abhijeet',
//         age: 23,
//         sayHi: function (){
//             console.log('hi', user.firstname);
//         }
//     };
//     let admin = user;
//     user = null;
//     console.log(admin.sayHi); // function definition
//     admin.sayHi(); // nor run because in function definition there is present user.firstname and user is run
// -------------------------------------------------------------------------------------------------------------------------------

// Now, we have to replace user.firstname into admin.firstname because user is null
// e.g.
// let user = {
//     firstname: 'Abhijeet',
//     age: 23,
//     sayHi: function (){
//         console.log('hi', admin.firstname);
//     }
// };
// let admin = user;
// user = null;
// console.log(admin.sayHi);
// admin.sayHi();
// --------------------------------------------------------------------------------------------------------------------------

// Now we cannot do again and again editing the defintion function, so that we can use this keyword in place of admin.firstname
// e.g.
// let user = {
//     firstname: 'Abhijeet',
//     age: 23,
//     sayHi: function (){
//         console.log('hi', this.firstname); // here it points to the 'this' keyword
//     }
// };
// let admin = user;
// user = null;
// console.log(admin.sayHi);
// admin.sayHi();
// --------------------------------------------------------------------------------------------------------------------------

// e.g.
// let user = {
//     firstname: 'Abhijeet',
//     score: 0,
//     incrementScore: function () {
//         this.score++;
//     }
// }
// console.log(user.score); // 0
// user.incrementScore(); // calling the function
// console.log(user.score); // 1
// console.log(user.incrementScore); // function definition

// e.g.
// function sayHi() {
//     console.log(this, 'VALUE OF THIS KEYWORD'); // value of 'this' is defined during runtime and it refers to the object from where it was called.
//     console.log(this.firstName);
// }
// let user = {
//     firstName: 'Amit',
//     objectType: 'USER'
// }
// let admin = {
//     firstName: 'Shruti',
//     objectType: 'ADMIN'
// }
// user.funcUser = sayHi;
// admin.funcAdmin = sayHi;
// user.funcUser();
// admin.funcAdmin();
// ------------------------------------------------------------------------------------------------------

// e.g.
// var firstName = 'Aditi';
// function sayHi() {
//     console.log(this); // inside a normal function 'this' refers to a global object
//     console.log(this.firstName); // Firstly undefined after initializing var Aditi will print because in global object which is defined by var.
// }
// let user = {
//     firstName: 'Amit',
//     objectType: 'USER'
// }
// let admin = {
//     firstName: 'Shruti',
//     objectType: 'ADMIN'
// }
// let user2 = {
//     firstName: 'Bhanu',
//     sayHi: () => { // 'this' inside an arrow function refers to window object beacause it is a bad person, it does not feel effected from where we call, it refers to window object
//         console.log(this.firstName);
//     }
// }
// sayHi();
// ----------------------------------------------------------------------------------------------------------------------------------------------------

// e.g.
// var firstName = 'Aditi';
// function sayHi() {
//     console.log(this);
//     console.log(this.firstName);
// }
// let user = {
//     firstName: 'Amit',
//     objectType: 'USER'
// }
// let admin = {
//     firstName: 'Shruti',
//     objectType: 'ADMIN'
// }
// let user2 = {
//     firstName: 'Bhanu',
//     sayHi(){
//         console.log(this.firstName); // Bhanu because 'this' refers to user2
//     }
// }
// user2.sayHi()
// ------------------------------------------------------------------------------------------------------------------------------------------------------

// e.g.
// let ladder = {
//     step: 0,
//     up() {
//         this.step++
//     },
//     down() {
//         this.step--
//     },
//     showStep() {
//         console.log(this.step);
//     }
// }
// ladder.up() // 1
// ladder.up() // 2
// ladder.down() // 1
// ladder.down() // 0
// ladder.down() // -1
// ladder.showStep() // -1 will print
// ladder.up() // 0
// ladder.up() // 1
// ladder.up() // 2
// ladder.showStep() // 2 will print

// e.g.
// let ladder = {
//     step: 0,
//     up() {
//         console.log(this.step++);
//     },
//     showStep() {
//         console.log(this.step);
//     }
// }
// ladder.up() // 0 will print
// ladder.up() // 1 will priunt
// ladder.showStep() // 2 will print

// e.g.
// let ladder = {
//     step: 0,
//     up() {
//         console.log(++this.step);
//     },
//     showStep() {
//         console.log(this.step);
//     }
// }
// ladder.up() // 1 will print
// ladder.up() // 2 will priunt
// ladder.showStep() // 2 will print

// e.g.
// const obj = {
//     message: 'Hello, World',
//     getMessage() {
//         const message = 'Hello, Earth'
//         return this.message
//     }
// }
// let result = obj.getMessage()
// console.log(result); // Hello, World

// e.g.
// const obj = {
//     message: 'Hello, World',
//     getMessage() {
//         const message = 'Hello, Earth'
//         return message
//     }
// }
// let result = obj.getMessage()
// console.log(result); // Hello, World

// -------------------------------------------------------------------------------------------------------------------------------------------------------------

// let obj = {
//     who: 'World',
//     greet: function(){
//         console.log(`Hello, ${this.who}`);
//     },
//     farewell: () => {
//         console.log(`Goodbye, ${this.who}`);
//     }
// }
// obj.greet() // Hello World
// obj.farewell() // Goodbye undefined