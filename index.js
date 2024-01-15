//Day-1

//console.log("hello");

//primitive types in js

//console.log("2" + 1); // implicit string conversion

//console.log(2 + "1"); // // implicit string conversion

//console.log("3" + 1 + 2); // "31" => "312"

//console.log("1"+ 2+ 3)

// console.log(1 + 2 + "3");

// console.log(+"2"). // explicit numeric conversion

// console.log(1 + "2");
// console.log(1 + +"2");

// console.log(1 + "2");

// console.log(+"abc") // NaN
// Infinity
// console.log(NaN === NaN)
// primitive types in js

// Number // 1 , 2 , 3
// String
// Boolean
// Null
// Undefined
// Symbol
// BigInt

// js is loosely typed language

// var a = "10";
// var b = 10;
// var c = null;
// var d = undefined;
// var e = null;

// console.log(typeof a);
// console.log(typeof typeof a);

// what is undefined , what is not defined , what is null

//
//console.log(e);
// var e = null;

// call api
// when js assign some value - undefined
// when user assign some empty value - null
// console.log(e);
// console.log(g);

// null

// typeof undefined
// typeof null
// var a = 10
// var b = "10"
// console.log(a == b) // implicit numeric conversion
// console.log(a === b)

// tyep conversions in js
// imlpicit numeric conversions/ coercions
// imlicit string conversions
// explicit conversions

//Day-2

// let ladder = {
//     stop:0,
//     up(){
//         this.stop ++ ;
//     },
//     down(){
//         this.stop -- ;
//     },
//     showStep: function(){
//         console.log(this.stop);
//     }
// }
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

// Array.prototype.sum =  function(){
//     let sum = 0;
//     for(let i = 0; i < this.length ; i ++ ){
//         sum = sum + this[i];
//     }
//     console.log(sum);
// }

// arr = [1, 2, 3, 4]
// arr2 = [3, 4, 1, 8, 9]
// arr.sum()
// arr2.sum()

// Call

// let cap = {
//     name: "Steve",
//     team: "cap",
//     petersTeam: function(mem1, mem2){
//         console.log(`Hi ${this.name} from ${this.team}`);

//         console.log(`I am working with ${mem1} & ${mem2} `);
//     }
// }
// let ironMan = {
//     name: "Tony",
//     team: "iron man"
// }

//  borrowing a function and can use it for another object without actually adding into it.
//We can also pass parameters for that function.
// cap.petersTeam.call(ironMan, "natasha", "war machine");

// more example of call
// function greet(){
//     console.log(this.name);
// }
// let obj = {
//     name: "Steve",
//     team: "avengers"
// }
// greet.call(obj)

// Apply
// let cap = {
//     name: "Steve",
//     team:"cap",
//     petersTeam: function(mem1, mem2, ...otherMan){
//         console.log(`${this.name}   ${this.team}`)
//         console.log(`I am working with ${mem1} & ${mem2} with ${otherMan}`);
//     }
// }
// let ironMan = {
//     name: "Tony",
//     team: "iron man"
// }

// apply
// cap.petersTeam.apply(ironMan, ["natasha", "war machine", "doctor strange", "loki"])

// more example of apply
// function greet(){
//     console.log(this.name);
// }
// let obj = {
//     name: "Steve",
//     team: "avengers"
// }
// greet.apply(obj)

// Bind

// let cap = {
//     name: "Steve",
//     team: "cap",
//     petersTeam: function(mem1, mem2, ...otherMan){
//         console.log(`${this.name}   ${this.team}`)
//         console.log(`I am working with ${mem1} & ${mem2} with ${otherMan}`);
//     }
// }
// let ironMan = {
//     name: "Tony",
//     team: "iron man"
// }

// // bind
// let ironManStolenMan =  cap.petersTeam.bind(ironMan);
// ironManStolenMan("natasha", "war machine", "doctor strange")
// ironManStolenMan("natasha", "war machine")

// Use case of bind, apply and call
// We use call when we want to borrow a method only once with a defined number of parameters
// We use apply when we want to borrow a method only once with n number of parameters.
// We use bind when we want to use a method multiple times and we want to make a permanent copy of that method.

// Function.prototype.mybind = function (obj, ...args) {
//     console.log(this);
//     console.log(args);
//     let fn = this;
//     return function (...args2) {
//       console.log(args2, "args2");
//       const newArgs = [...args, ...args2];
//       console.log(newArgs);
//       fn.apply(obj, newArgs);
//       console.log("called the bound function");
//     };
//   };

//   var obj = {
//     name: "Steve",
//   };
//   function printName(city, state) {
//     console.log(this.name + " " + city + " " + state);
//   }

//   var boundedFn = printName.mybind(obj, "New York");

//   boundedFn("USA");

//Day-3

//refresher from class2
// var a = 10;
// var b = a;
// console.log(a, "--1");
// b = 20;
// console.log(a, "--2");
// console.log(b, "---3");

// var a = { k1: 10 };
// var b = a;
// console.log(a, "--1");
// //b = { k2: 30 };
// b.k2 = 30;
// console.log(a, "--2");
// console.log(b, "---3");

// Hoisting

// var n = '10';
// var sum = function (n, b) {
//   return n + b;
// }

// var result = sum(100, 20);
// console.log(result);
// console.log(n);

// console.log(a)
// var a = 10

// var debug = true
//  console.log(typeof greet);
// greet();
// function greet() {
//     console.log("Hello!");
// }
// var greet = "Hi!";
// console.log(greet)
// console.log(typeof greet);

// var debug = true

// function real() {
//     console.log("I am real. Always run me");
// }
// function real() {
//     console.log("No I am real one ");
// }
// real();
// function real() {
//     console.log("You both are wasted");
// }

// console.log(a)
// let a=10;

// var b = 1;
// function outer() {
//   var b = 2;
//   function inner() {
//     b++;
//     console.log(b); // 1
//     var b = 3;
//     console.log(b);  // 2
//   }
//   inner();
// }
// outer();

// var d = 1;
// function test() {
//   d = "2";
//   console.log(typeof d); // 1
// function d() {}
// };

// test()

// console.log(typeof d); // 2

// var d = 1;
// function test() {
//   d = "2";
//   console.log(typeof d); // 1
// };

// test()

// console.log(typeof d); // 2

// Assignment
// immaBeOnTop();

// var immaBeOnTop;

// function immaBeOnTop() {
//   console.log('first');
// }

// immaBeOnTop = function() {
//   console.log('second');
// };

// foo();

// function foo() {
//   console.log(1);
// }

// var foo = function() {
//   console.log(2);
// };

// function foo() {
//   console.log(3);
// }

// foo();

// function Add(){
//   console.log(answer)
//   var answer = 2
// };
// Add()

// var temp= 'hi';
// function display(){
//     console.log(temp);
//     var temp = 'bye';
// };
// display();

// var d = 1;

// (function () {
//   d = "2";
//   console.log(typeof d);
//   function d() {}
// })();

// console.log(typeof d);

// var d = 1;

// (function () {
//   d = "2";
//   console.log(typeof d);
// })();

// console.log(typeof d, "");

//

//Day-4

//Will start at 8.05

// var debug = true
// //foo()
// function foo () {
//     console.log(1);
// }

// var foo = function () {
//     console.log(2);
// }

// function foo () {
//     console.log(3);
// }

// foo()

// Host objects
// window , localstorage , session storage , os , process
// native objects
// JSON

// window is a global object in browser
// global in nodejs

// function foo () {
//     console.log("Simple function call");
//     console.log(this === window);
//   }
// foo();

// var debug = true
// var cap = {
//     firstName : "Steve",
//     sayHi : function(){
//         console.log("hi from", this.firstName);
//     }
// }

// cap.sayHi(); // 1

// var sayHiAdd = cap.sayHi;

// var sayHiadd1 = function(){
//     console.log("hi from", this.firstName);
// }

// var firstName = "Tony";
// sayHiAdd(); // 2.

//
// var debug = true
// var cap = {
//     firstName : "Steve",
//     sayHi : function(){
//         console.log("53", this.firstName);
//         var iAmInner = function(){
//             console.log("55",this.firstName);
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();

// var call = {
//     caller: "mom",
//     says: function() {
//       console.log(`Hey, ${this.caller} just called.`);
//     }
//   };

// call.says(); // hey mom just called
// var say = call.says;
// say(); // hey undefined just called

// function anotherCaller() {
//     console.log(`${this.caller} called, too!`);
//   }

// var call = {
//     caller: "mom",
//     anotherCaller: anotherCaller,
//     says: function() {
//       console.log(`Hey, ${this.caller} just called.`);
//     }
// };

// call.anotherCaller(); // mom called, too!
// var newCall = call.anotherCaller;

// newCall(); // undefined called, too!

// 'This' Arrow functions

// let cap = {
//     firstName : "Steve",
//     sayHi : function(){
//         console.log("53", this.firstName);
//         const iAmInner = function(){
//             console.log("55",this.firstName);
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();

// let cap = {
//     firstName : "Steve",
//     sayHi : function(){
//         console.log("53", this.firstName);
//         const iAmInner = () => {
//             console.log("55",this.firstName);
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();

// var firstName = "Loki"
// let cap = {
//     firstName : "Steve",
//     sayHi : () => {
//         console.log(this, '--this 1')
//         console.log("53", this.firstName);
//         const iAmInner = () => {
//             console.log(this, '--this 2')
//             console.log("55", this.firstName);
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();

// var firstName = "Loki"
// let cap = {
//     firstName : "Steve",
//     sayHi : function(){
//         console.log("53", this.firstName);
//         const subInner = () => {
//             // this => cap // steve
//             console.log("54", this.firstName); // steve
//             const iAmInner = ()=> {
//                 // this => cap
//                 console.log("55", this.firstName); // steve
//             }
//             iAmInner();
//         }
//         console.log(this, '--this 1') // cap
//         subInner();
//     }
// }
// cap.sayHi();

//Day-5

// Use case of bind, apply and call
//Borrow features.
// 1. call => We use call when we want to borrow a method only once with a defined number of parameters.
// 2. apply => We use apply when we want to borrow a method only once with n number of parameters.
// 3. bind => We use bind when we want to use a method multiple times and we want to make a permanent copy of that method.

// Create Your own Bind / Polyfills of bind
// Every array is built using Array.
// Every object is built using Object.
// Every function has a parent Function.

// Function.prototype.myBind = function myBind(args1) {
//     var fn = this // fn() sayHi
//     return function(...args) {
//         //console.log(args)
//         fn.apply(args1, args)
//     }
// }

// var bounded = cap.sayHi.myBind(ironMan)

// bounded('member1', 'member2')

// call , apply

//Day -6

// # 1 : Implement Your own apply and call method

// # 2 : Currying

// # 3  sum(1)(2)(3)()........(n)())

// function greet(age, country) {
//     console.log(`${this.name}, ${age}, ${country}`)
// }

// function sum () {

// }
// // greet(20, 'India')

// var obj = {
//     name : 'Athul',
// }

// greet.call(obj, '24', 'USA')
// greet.apply(obj, ['24', 'USA'])

// var bounded = greet.bind(obj, 12)
// bounded('CH')

// Your own call method

// Function.prototype.myCall = function (context, ...args ) {
//  console.log(context, '--------')
// //   console.log(this)
// //   console.log(args)

//   context.requiredFn = this
//   console.log(context, '----context2')
//   context.requiredFn(...args)
//   delete context.requiredFn

// }

// greet.myCall(obj, '24', 'USA')

// console.log(obj)

// Your own method

// Function.prototype.myApply = function (context, args ) {

//      context.requiredFn = this
//      context.requiredFn(...args)
//      delete context.requiredFn

//    }

// greet.myApply(obj, ['24', 'USA'])

// Closure in highlevel

// function multiply (a) {
//    return function (b) {
//       return a * b
//    }
// }

// var multiplyByTwo = multiply(2)  // function (b) { return 2 * b}

// console.log(multiplyByTwo(5))

// var multiplyByThree = multiply(3)

// console.log(multiplyByThree(5))

// function multiply (a , b) {
//    return a * b
// }

// var multiplyByTwo = multiply.bind(this, 2)
// console.log(multiplyByTwo(5))
// console.log(multiplyByTwo(6))

//

// function sum (a) {
//   return function (b) {
//         return function (c) {
//             return function () {
//               return a + b + c
//             }
//         }
//   }
// }
// console.log(sum(1)(2)(3)())

// console.log(sum(1)(2)(3)()........(n)())

// function sum (a) {
//     return function (b ) {
//       if(b) return sum (a + b)
//       return a
//     }
//  }

//  console.log(sum(1)(2)(3)(4)(5)(20)())
