//1. What will be the output ?

//a)

// const value1 ="5";
// const value2 =9;

// let sum = value1+value2;

// console.log(sum);

//output will be 59 the reason is there occurs type casting or type-coercion and since
// the first value is a string the "+" operator considers the latter as string only and concates the value resulting into 59

//b)

// const value1 ="5";
// const value2 =9;

// let sum = Number(value1)+value2;

// console.log(sum);

//In the above code the string value1 is facing an implicit coercion where its converted into a number and resulting the value of sum to be 14

//c)

// console.log(![]);
// For javascript an empty array is a truthy and not logical NOT operator JS converts into boolean and then negates it resulting false

// console.log([] == ![]);
//Here the output is true becuase there occurs a number of coercion and
//the first empty array is converted into an empty string and further into num 0 whereas the "![]" is false which is futher converted into 0
//thus resulting true this happens becuase we are using "==" where type coercion occurs

// console.log([] === ![]);
//Here the output is false since its "===" is use no type coercion is used and
//![] will result in false and the last comparison would be [] = false.

// console.log(null == false);
//here the output is true "==" is used and type coercion occurs and
//no type conversion occurs and null is falsy and results in false = false resulting into true

// console.log(null == true);
//From the above code we can predict the rsult is false becuase its comparing false = true

//d)

// console.log(-"giddyup" + 409);
//here the output is NaN becuase - operator converts the string into num and results in NaN and NaN + a num is still NaN

// let myVar_1 =10 + "";
// console.log(myVar_1);
//here the out is 10 the nums is concatenated to the string

// let myVar_2 =10.5 + "";
// console.log(myVar_2);
//here the out is 10.5 the nums is concatenated to the string

// let myVar_3 =-10.5 + "";
// console.log(myVar_3);
//here the out is -10.5 the nums is concatenated to the string

// let myVar_4 =true + "";
// console.log(myVar_4);
//here the true is 10 the bool is concatenated to the string

//4) Difference between "==" and "==="

// "==" is not that strict its undergoes the explicit type coercion of the values and
// compares the values

//"===" on the other side considers the type and no type conversion occurs and
// it helps in uneccessary conversion

//5) Diff between the var and let keyword

// Variables declared with var are function-scoped, meaning they are only accessible within the function where they are declared. If declared outside any function, they become globally scoped.
// Variables declared with let are block-scoped, meaning they are limited to the block (enclosed by curly braces) in which they are declared. This includes loops, conditionals, and functions.

// Variables declared with var are hoisted to the top of their scope and initialized with undefined. This means you can use a var variable before its declaration in the code.
// Variables declared with let are also hoisted, but they are not initialized until the code execution reaches their declaration. Accessing a let variable before its declaration results in a ReferenceError.

// Variables declared with var can be re-declared within the same scope without any error.
// Variables declared with let cannot be re-declared within the same scope.

//6) Explain implicit type coercion

// Implicit type coercion, also known as type coercion or type conversion, refers to the automatic conversion of one data type to another by the JavaScript engine during certain operations. This conversion is done implicitly without explicit instructions from the developer. JavaScript is a loosely-typed language, which means that variables can change types dynamically, and operations can be performed between different types.
//1.String and Number Concatenation:
// var num = 5;
// var str = "10";
// var result = num + str; // The number 5 is implicitly converted to a string and concatenated with "10"
// console.log(result); // "510"

//2.Numeric and Boolean Operations:
// var num = 5;
// var bool = true;
// var result = num + bool; // The boolean value `true` is implicitly converted to the number 1
// console.log(result); // 6

//3.Equality Comparison:
// var num = 5;
// var str = "5";
// if (num == str) {
//   console.log("Equal"); // The string "5" is implicitly converted to the number 5 for the comparison
// }

//4.Logical Operations:
// var num = 10;
// var str = "abc";
// if (num && str) {
//   console.log("Both are truthy"); // The non-empty string "abc" is implicitly converted to true in a boolean context
// }

//7.JS a staticlly type or a dynamicallly typed
// JavaScript is considered a dynamically typed language. This means that variable types are not explicitly declared, and the type of a variable can change during runtime. In contrast, statically typed languages require explicit type declarations for variables, and the type remains fixed throughout the program's execution.
// You can use a variable without specifying its type explicitly.
// Variable types are determined dynamically during runtime based on the assigned values.
// The same variable can hold different types of values at different points in the program.

// This dynamic typing provides flexibility but also requires careful consideration to avoid unexpected behavior. It's essential for developers to be aware of the types of values they are working with and how implicit type coercion can affect operations in JavaScript.

//8) What is NaN property in JS?

// In JavaScript, NaN stands for "Not a Number." It is a special value that represents the result of an operation that should return a valid number but doesn't. NaN is often the result of an arithmetic operation involving undefined or unrepresentable mathematical values.

//1.Division by Zero:
// var result = 10 / 0; // Results in NaN

//2.Invalid Mathematical Operations:
// var result = Math.sqrt(-1); // Results in NaN (trying to find the square root of a negative number)

//3.Undefined Values in Arithmetic Operations:
// var result = "abc" / 2; // Results in NaN (trying to divide a non-numeric string by a number)

// JavaScript provides the global isNaN() function to check whether a value is NaN. It returns true if the provided value is NaN, and false otherwise.

// console.log(isNaN(NaN));        // true
// console.log(isNaN("Hello"));    // true (since converting "Hello" to a number results in NaN)
// console.log(isNaN(123));         // false (123 is a valid number)
// console.log(isNaN("123"));       // false (can be successfully converted to a number)
// console.log(isNaN(true));        // false (true is converted to 1, which is a valid number)

// "Passed by value" and "passed by reference" refer to the ways in which values are transferred to functions or assigned to variables in programming languages. These concepts are particularly relevant in understanding how data is handled in function calls. Let's explore each one:

//1.Passed by Value:

// In languages that use "passed by value," a copy of the actual value is passed to the function or assigned to another variable.
// Changes made to the parameter or the variable within the function do not affect the original value outside the function.
// Most primitive data types (like numbers, booleans, and strings) in many programming languages follow "passed by value."
// function increment(x) {
//   x++; // Changes made to x do not affect the original value outside the function
// }

// let num = 5;
// increment(num);
// console.log(num); // Output: 5

//2.Passed by Reference:

// In languages that use "passed by reference," the memory address (reference) of the actual value is passed to the function or assigned to another variable.
// Changes made to the parameter or the variable within the function directly affect the original value outside the function.
// Most non-primitive data types (like arrays and objects) in many programming languages follow "passed by reference."

// function addToArray(arr) {
//   arr.push(42); // Changes made to arr directly affect the original array outside the function
// }

// let myArray = [1, 2, 3];
// addToArray(myArray);
// console.log(myArray); // Output: [1, 2, 3, 42]

// It's important to note that the terms "passed by value" and "passed by reference" are sometimes used more broadly, and the behavior can vary based on the language. In some contexts, you might hear the term "passed by sharing" when discussing languages like Java or Python, where the behavior depends on the specific characteristics of the data type being passed.

//10. What is IIFE in JS?

// An Immediately Invoked Function Expression (IIFE) is a design pattern in JavaScript where a function is defined and executed immediately after its creation. The primary purpose of an IIFE is to create a private scope for variables, preventing them from polluting the global scope.

// In this pattern:

// The function is enclosed within parentheses, turning it into an expression.
// The final pair of parentheses at the end (function() { /* code */ })(); immediately invokes (calls) the function.
// This pattern is useful for encapsulating code, especially when you want to create variables that are only accessible within the function and not visible in the global scope. It helps prevent naming conflicts and keeps the global scope clean.

// (function() {
//   var privateVariable = "I'm private!";

//   function privateFunction() {
//     console.log("This is a private function.");
//   }

//   // Code within the IIFE can access privateVariable and privateFunction,
//   // but they are not visible outside the IIFE.

//   privateFunction();
// })();

// In modern JavaScript development, the use of block-scoped variables (let and const) and modules has reduced the need for IIFE in certain scenarios. However, IIFE is still relevant in specific contexts, especially when dealing with older code or specific design patterns.

//12) Strict mode in Js and characteristics of JS strict mode

// Strict mode is a feature in JavaScript that was introduced in ECMAScript 5 (ES5) to help developers write more reliable and maintainable code by catching common mistakes and preventing the use of certain error-prone features.

// To enable strict mode, you can add the following line at the beginning of a script or a function:

// Can enter the strict mode by
// "use strict";

// "use strict";
// // code in strict mode

// function myFunction() {
//   "use strict";
//   // code in strict mode
// }

// Error Handling:

// In strict mode, some common coding errors that would otherwise go unnoticed are turned into runtime errors. For example, assigning a value to an undeclared variable or using delete on a variable, function, or function argument is not allowed.
// Safer Code:

// Strict mode helps eliminate some of the JavaScript "silent errors" by throwing exceptions. This makes debugging easier and helps developers catch and fix issues early in the development process.
// Restrictions on this:

// In strict mode, the value of this is undefined in functions that are not methods or constructors. This helps prevent accidental use of the global object as the value of this.
// No Octal Syntax:

// Octal literals (e.g., 0123) are not allowed in strict mode. In non-strict mode, these are interpreted as octal values, but strict mode requires using the 0o prefix for octal literals.
// No Assignment to Read-Only Properties:

// In strict mode, assignments to read-only properties (like undefined, NaN, and Infinity) and assignments to undeclared variables result in a TypeError.
// No Duplicate Parameter Names:

// Strict mode disallows duplicate parameter names in function declarations.
// Using strict mode is generally considered a good practice, as it encourages cleaner and safer coding practices. It's backward-compatible, so existing code won't be affected if strict mode is applied, but it may catch and highlight potential issues.

// What are higher order functions?
// Higher-order functions are functions in JavaScript that can take other functions as arguments or return functions as results. Essentially, a higher-order function either accepts functions as parameters, returns a function, or does both. This concept is rooted in functional programming and is a key feature of languages like JavaScript that support first-class functions.

//1.Functions as Arguments:

// function operateOnArray(array, operation) {
//   return array.map(operation);
// }

// const numbers = [1, 2, 3, 4];

// // Here, 'double' is a function passed as an argument to 'operateOnArray'
// const doubledNumbers = operateOnArray(numbers, function double(x) {
//   return x * 2;
// });

// console.log(doubledNumbers); // Output: [2, 4, 6, 8]

//2.Functions as Return Values:

// function multiplier(factor) {
//   return function(x) {
//     return x * factor;
//   };
// }

// // 'double' is a function returned by 'multiplier'
// const double = multiplier(2);
// console.log(double(5)); // Output: 10

//3.Array Methods:
// Higher-order functions are commonly used with array methods like map, filter, and reduce.

// const numbers = [1, 2, 3, 4, 5];

// // 'square' is a function passed to 'map'
// const squaredNumbers = numbers.map(function square(x) {
//   return x * x;
// });

// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Higher-order functions enable more concise and expressive code, facilitating the development of modular and reusable components. They are a fundamental concept in functional programming and play a crucial role in building robust and maintainable software.

//13)

//13) Explain "this" keyword

// n JavaScript, the this keyword is a reference to the object on which the current function is being invoked. The value of this can be dynamic and depends on how a function is called. The behavior of this can vary in different contexts:

//Global Context:

// In the global context (outside of any function), this refers to the global object. In browsers, the global object is usually the window object.
// console.log(this === window); // true

// Function Context:

// In a function, the value of this depends on how the function is called. If the function is a method of an object, this refers to that object. If the function is not a method but is invoked as a standalone function, this refers to the global object (or undefined in strict mode).

// function exampleFunction() {
//   console.log(this);
// }

// exampleFunction(); // In non-strict mode, this refers to the global object (e.g., window)

//3.Object Method Context:

// When a function is a method of an object, this refers to the object on which the method is called.

// const myObject = {
//   myMethod: function() {
//     console.log(this);
//   }
// };

// myObject.myMethod(); // 'this' refers to 'myObject'

// 4.Constructor Function Context:
// When a function is used as a constructor with the new keyword, this refers to the newly created instance.

// function MyClass() {
//   this.property = "value";
// }

// const myInstance = new MyClass();
// console.log(myInstance.property); // 'value'

//5.Event Handler Context:
// In event handlers, this often refers to the element that triggered the event.

// document.getElementById("myButton").addEventListener("click", function() {
//   console.log(this); // 'this' refers to the button element
// });

//The behavior of this can sometimes be confusing, especially in nested functions or callbacks where it might not behave as expected. Arrow functions, introduced in ES6, behave differently regarding this and lexically capture the value of this from the surrounding context.

// function exampleFunction() {
//   setTimeout(() => {
//     console.log(this); // 'this' inside the arrow function refers to 'this' of exampleFunction
//   }, 1000);
// }

// exampleFunction();

//4)Predict the output
//a)
// function doSomething() {
//     console.log(this);
// }
// doSomething()

// When you call doSomething() in the global context (not as a method of an object or within a specific context), the this keyword inside the function will refer to the global object. In browsers, the global object is usually window. So, if you run this code in a browser environment, you can expect the output to be:
// This is because, in the global context, the value of this inside a function defaults to the global object. However, if you are running this code in a Node.js environment or in an environment with strict mode enabled, the global object may be undefined instead of Window.

//b)
// var obj ={
//     name:"Vivek",
//     getName:function (params) {
//         console.log(this.name);
//     }
// }
// obj.getName()

//Output :Vivek
// In the given code, the getName method is defined inside the obj object. When you call obj.getName(), the this keyword inside the getName method refers to the object (obj) on which the method is called. Therefore, the output will be the value of the name property of the obj object.

//c)

// var obj ={
//     name :"vivek",
//     getName:function () {
//         console.log(this.name);
//     }
// }

// var getName = obj.getName
// var obj2 = {name:"Akshay",getName}
// obj2.getName()

// In the given code, you have an object obj with a getName method. Later, you create a new object obj2 with its name property set to "Akshay" and assign the getName method from the obj to obj2. Finally, you call obj2.getName().

// However, it's important to note that when you assign the getName method to the variable getName, it loses its original context (obj). Therefore, if you were to call getName() directly without any object context, it would result in an error or unexpected behavior, depending on the strict mode. In this example, it works as expected because it is invoked on obj2.

// var obj1={
//     address:"Mumbai,India",
//     getAddress:function(){
//         console.log(this.address);
//     }
// }
// var getAddress = obj1.getAddress;
// var obj2 = {name:"Akshay"};
// obj2.getAddress()

// In this case, obj2.getAddress() will result in an error because getAddress is not a method of obj2. When you try to call obj2.getAddress(), this inside getAddress will refer to obj2, which doesn't have an address property, causing an error.

// To fix this, you should either call getAddress on obj1 or ensure that getAddress is bound to the correct object context.

//15. Explain call(),spply() and bind() method

// In JavaScript, the call(), apply(), and bind() methods are used to control the value of this in a function and to pass arguments to a function. These methods are often used when working with object methods, inheritance, or creating functions with a specific context.

// call() Method:

// The call() method is used to invoke a function with a specified this value and individual arguments passed one by one.
// Syntax: function.call(thisArg, arg1, arg2, ...)

// var person1 = { name: "John" };
// var person2 = { name: "Jane" };

// function greet(message) {
//     console.log(message + " " + this.name);
// }

// greet.call(person1, "Hello"); // Output: Hello John
// greet.call(person2, "Hi");    // Output: Hi Jane

// apply() Method:

// The apply() method is similar to call(), but it takes an array or an array-like object as the second argument, where each element of the array is passed as an argument to the function.
// Syntax: function.apply(thisArg, [arg1, arg2, ...])

// var numbers = [1, 2, 3, 4, 5];

// function sum() {
//     return Array.from(arguments).reduce((total, num) => total + num, 0);
// }

// var result = sum.apply(null, numbers);
// console.log(result); // Output: 15

// bind() Method:

// The bind() method creates a new function with a specified this value and initial arguments. Unlike call() and apply(), bind() does not invoke the function immediately but returns a new function that can be invoked later.
// Syntax: function.bind(thisArg, arg1, arg2, ...)

// var person = { name: "Alice" };

// function introduce(greeting) {
//     console.log(greeting + " I'm " + this.name);
// }

// var boundFunction = introduce.bind(person, "Hi there,");
// boundFunction(); // Output: Hi there, I'm Alice

// Implementing 'call()'
// Function.prototype.myCall = function (context, ...args) {
//     // Ensure the first argument is an object (or null/undefined for the global object)
//     context = context || window;

//     // Create a unique key to avoid naming conflicts in the context object
//     const uniqueKey = Symbol("uniqueKey");

//     Attach the function to the context object with the unique key
//     context[uniqueKey] = this;

//     Invoke the function using the context object
//     const result = context[uniqueKey](...args);

//     Remove the function from the context object
//     delete context[uniqueKey];

//     return result;
// };

// Implementing 'apply()'
// Function.prototype.myApply = function (context, argsArray) {
// Ensure the first argument is an object (or null/undefined for the global object)
//     context = context || window;

// Create a unique key to avoid naming conflicts in the context object
//     const uniqueKey = Symbol("uniqueKey");

// Attach the function to the context object with the unique key
//     context[uniqueKey] = this;

// Invoke the function using the context object and the provided array of arguments
//     const result = context[uniqueKey](...argsArray);

// Remove the function from the context object
//     delete context[uniqueKey];

//     return result;
// };

// Implementing 'bind()'
// Function.prototype.myBind = function (context, ...args) {
// Save a reference to the original function
//     const originalFunction = this;

// Return a new function that, when called, will invoke the original function with the specified context and arguments
//     return function (...additionalArgs) {
//         return originalFunction.myApply(context, args.concat(additionalArgs));
//     };
// };

// Example usage
// var person = { name: "Alice" };

// function introduce(greeting) {
//     console.log(greeting + " I'm " + this.name);
// }

// Using 'call()'
// introduce.myCall(person, "Hello");

// Using 'apply()'
// introduce.myApply(person, ["Hi there,"]);

// Using 'bind()'
// var boundFunction = introduce.myBind(person, "Greetings,");
// boundFunction();  // Output: Greetings, I'm Alice

//18. What is currying in javscript?

// Currying is a functional programming technique in JavaScript where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. The curried function returns a new function for each argument until all the arguments are collected, and the original function can be invoked.

// Non-curried function
// function add(x, y, z) {
//     return x + y + z;
// }

// Curried version
// function curryAdd(x) {
//     return function(y) {
//         return function(z) {
//             return x + y + z;
//         };
//     };
// }

// Using the curried function
// console.log(curryAdd(1)(2)(3)); // Output: 6

//18. Explain Scope and Scope chain in JS with examples?

// Scope refers to the context in which variables are declared and accessed. JavaScript has two types of scope: global scope and local scope. Variables declared outside of any function or block have global scope, while variables declared within a function or block have local scope.

// Scope refers to the context in which variables are declared and accessed. JavaScript has two types of scope: global scope and local scope. Variables declared outside of any function or block have global scope, while variables declared within a function or block have local scope.

// cope Chaining in JavaScript:
// Scope chaining refers to the process of searching for variables within nested scopes. If a variable is not found in the current scope, JavaScript looks up the chain of nested scopes until it finds the variable or reaches the global scope. This mechanism allows inner scopes to access variables declared in outer scopes.

// Global scope
// var globalVar = "I'm global";

// function outerFunction() {
//      Outer local scope
//     var outerVar = "I'm in outer function";

//     function innerFunction() {
//          Inner local scope
//         var innerVar = "I'm in inner function";
//         console.log(globalVar);  // Accessing globalVar from inner scope
//         console.log(outerVar);   // Accessing outerVar from inner scope
//         console.log(innerVar);   // Accessing innerVar from inner scope
//     }

//     innerFunction();
//     console.log(innerVar); // This will result in an error as innerVar is not accessible outside innerFunction
// }

// outerFunction();
// console.log(outerVar); // This will result in an error as outerVar is not accessible outside outerFunction

// In this example, innerFunction has access to variables declared in both its local scope, the outer function's scope (outerVar), and the global scope (globalVar). However, variables declared in innerFunction are not accessible outside of it.

// Understanding scope and scope chaining is crucial for writing maintainable and bug-free JavaScript code. It helps prevent naming conflicts and ensures that variables are used in the appropriate context.

// A closure in JavaScript is a feature that allows a function to retain access to variables from its outer (enclosing) scope, even after the outer function has finished execution. This enables the inner function to "remember" and access the variables of its containing (enclosing) function, creating a closure around those variables.

// Closures are created when a function is defined within another function, and the inner function refers to variables from the outer function. Here's a simple example to illustrate closures:

// function outerFunction() {
//     var outerVariable = "I'm from outer function";

//     Inner function defined within outer function
//     function innerFunction() {
//         console.log(outerVariable); // Accessing outerVariable from inner function
//     }

//     Returning the inner function
//     return innerFunction;
// }

// Creating a closure by invoking outerFunction and assigning the returned inner function to a variable
// var closureFunction = outerFunction();

// Calling the closure function
// closureFunction(); // Output: I'm from outer function

// A closure in JavaScript is a feature that allows a function to retain access to variables from its outer (enclosing) scope, even after the outer function has finished execution. This enables the inner function to "remember" and access the variables of its containing (enclosing) function, creating a closure around those variables.

// Closures are created when a function is defined within another function, and the inner function refers to variables from the outer function. Here's a simple example to illustrate closures:

// javascript
// Copy code
// function outerFunction() {
//     var outerVariable = "I'm from outer function";

//     // Inner function defined within outer function
//     function innerFunction() {
//         console.log(outerVariable); // Accessing outerVariable from inner function
//     }

//     // Returning the inner function
//     return innerFunction;
// }

// // Creating a closure by invoking outerFunction and assigning the returned inner function to a variable
// var closureFunction = outerFunction();

// // Calling the closure function
// closureFunction(); // Output: I'm from outer function
// In this example, outerFunction defines a variable outerVariable, and then an inner function innerFunction is defined inside outerFunction. The innerFunction refers to outerVariable. When outerFunction is called, it returns innerFunction, creating a closure. The closureFunction variable now holds a reference to innerFunction, and when closureFunction is invoked, it still has access to the outerVariable even though outerFunction has completed its execution.

// Closures are powerful and are commonly used in JavaScript for various purposes, such as:

// Data Encapsulation: Closures allow for the creation of private variables and methods, encapsulating data within a function's scope.

// Function Factories: Closures can be used to create functions with specific behavior by partially applying arguments.

// Callback Functions: Closures are frequently used in callback functions, where a function passed as an argument retains access to the surrounding context.

// Asynchronous JavaScript: Closures play a role in handling asynchronous code, ensuring that callbacks can reference variables from their original context.

// Understanding closures is fundamental to writing more expressive and modular JavaScript code.

//20. What are object prototypes?

// In JavaScript, object prototypes are a fundamental part of the language's object-oriented nature. The prototype is a mechanism that allows objects to inherit properties and methods from other objects. Every object in JavaScript has an associated prototype, which may be another object or null.

// Prototype Chain:

// 1.Object Instances:

// When you create an object using an object literal or a constructor function, the object automatically gets a reference to its prototype.

// const myObject = {}; // {} is an object literal

// Prototype Object:

// Objects in JavaScript have a prototype, which is also an object. This prototype object may have its own prototype, forming a chain known as the "prototype chain."

// // The prototype of myObject is Object.prototype
// console.log(Object.getPrototypeOf(myObject) === Object.prototype); // true

// Object.prototype is the root of the prototype chain, and it includes common methods that are available to all objects in JavaScript (e.g., toString, hasOwnProperty).

// Prototypal Inheritance:
// Creating Objects with Constructors:

// When you create objects using constructor functions (using the new keyword), the created objects inherit properties and methods from the prototype of the constructor.

// function Person(name) {
//     this.name = name;
// }

// const person1 = new Person("John");

// // person1 inherits from Person.prototype
// console.log(Object.getPrototypeOf(person1) === Person.prototype); // true

// Extending Prototypes:

// You can extend the prototype of an object to add methods that will be shared among all instances created from that constructor.

// Person.prototype.sayHello = function() {
//     console.log("Hello, my name is " + this.name);
// };

// person1.sayHello(); // Output: Hello, my name is John

// Changing Prototypes Dynamically:

// The prototype of an object can be changed dynamically. However, be cautious when doing this, as it affects all objects that share the same prototype.

// function Animal(type) {
//     this.type = type;
// }

// const dog = new Animal("Dog");
// const cat = new Animal("Cat");

// // Changing the prototype dynamically
// Animal.prototype.sound = function() {
//     console.log("Some generic sound");
// };

// dog.sound(); // Output: Some generic sound
// cat.sound(); // Output: Some generic sound

// Object.create Method:
// The Object.create() method can be used to create a new object with a specified prototype.

// const parent = {
//     sayHello: function() {
//         console.log("Hello from the parent!");
//     }
// };

// const child = Object.create(parent);

// child.sayHello(); // Output: Hello from the parent!

// Understanding prototypes is crucial for working effectively with JavaScript's object-oriented features, especially when dealing with inheritance and object relationships. It provides a flexible and powerful way to share behavior among objects.

//21. Predict the output
//a)

// function real() {
//     console.log("I am real ,Always run me");
// }

// function real() {
//     console.log("No I am real One");
// }

// real()

// function real() {
//     console.log("You Both are wasted");
// }

// In JavaScript, function declarations are hoisted, which means that they are moved to the top of their containing scope during the compilation phase. In your example, the three function declarations are hoisted to the top, and the last one overwrites the previous ones. Therefore, when you call real(), it will execute the last defined function.

// As a result, the output will be "You Both are wasted" because the last definition of the real function is the one that remains after hoisting, and it is the one that gets executed when you call real(). The earlier function declarations are essentially overridden by the last one.

//b)

// var b = 1;

// function outer() {
//   var b = 2;
//   function inner() {
//     b++;
//     console.log(b);
//     var b = 3;
//     console.log(b);
//   }
//   inner();
// }

// outer();

// The global variable b is declared and assigned the value 1.

// The outer function is called.

// Inside outer, a local variable b is declared and assigned the value 2.
// The inner function is called.
// Inside inner:

// b++ is encountered, but since there is a local b declared later in the function (hoisting), it leads to a temporary creation of a variable b in the function scope. This results in NaN because it's trying to increment an undefined value.
// Then, a local variable b is declared and assigned the value 3.
// console.log(b) prints the local variable b, which is 3.


// var d = 1;

// function test() {
//     d="2"
//     console.log(typeof d);
//     function d() {}
// }
// test()

// console.log(typeof d);

// The global variable d is declared and assigned the value 1.

// The test function is called.

// Inside test, the assignment d = "2" modifies the global variable d.
// console.log(typeof d) prints the type of d after the assignment, and at this point, d is a string.
// Inside test, there is a function declaration function d() {}. Function declarations are hoisted to the top of their containing scope during the compilation phase.

// After test is called, console.log(typeof d) outside the function prints the type of the global variable d, which is now a number.