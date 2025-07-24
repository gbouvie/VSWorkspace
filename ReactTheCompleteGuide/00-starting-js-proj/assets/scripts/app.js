// import { apiKey } from "./util.js";

// import apiKey from "./util.js";
// import { apiKey, abc as content } from "./util.js";
// import * as util from "./util.js";
// console.log("App.js is running!");
// console.log("API Key:", apiKey);
// console.log("ABC:", content);
// console.log("Util:", util);

// const userMessage = "Hello, World!";
// let userMessage = "Hello, World!";

// console.log(userMessage);
// userMessage = "Hello, Universe!";
// console.log(userMessage);

// console.log(10 === 10.0);

function createGreeting(userName, message = "Hello!!") {
    // console.log(message + userName + "!");
    return message + " I am " + userName + "!";
}

const greeting = createGreeting("Giovani", "Hi!!");
console.log(greeting);
const greeting2 = createGreeting("Ms. Smith");
console.log(greeting2);