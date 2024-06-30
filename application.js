// Imported functions from utility.js
import {
  createElementsWithClass, // Function to create HTML element with class
  prependChild, // Function to prepend child elements to a parent
} from "./utility.js";

// Import the banner function from banner.js
import { banner } from "./Components/banner.js";

// Import the signUp function from signUp.js
import { signUp } from "./Components/signUp.js";

// Function to create the main <main> tag and append it to <body>
function createMainTag() {
  // Create <main> element with class "row"
  let mainTag = createElementsWithClass("main", "row");

  // Prepend <main> to <body>
  prependChild("body", mainTag);
}

// Function to create the banner using imported function
function createBanner() {
  // Call the banner function imported from banner.js
  banner();
}

// Function to create the sign up form using imported function
function createSignUp() {
  // Call the signUp function imported from signUp.js
  signUp();
}

// Function to call all setup functions in order
function callFunctions() {
  // Call functions to set up the page
  createMainTag(); // Create <main> tag and append to <body>
  createBanner(); // Create banner
  createSignUp(); // Create sign-up form
}

// Call the function to start setting up the page
callFunctions();
