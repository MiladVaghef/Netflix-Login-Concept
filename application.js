// Imported functions from utility
import {
  createElementsWithID, // create HTML elements with ID
  createElementsWithClass, // create HTML element with class
  createElementsWithClassAndID, // create html elements with class and ID
  createElement, // create elements without ID and class
  appendChild, // appendChild elements
  addImage, // create and add link to created image
  prependChild, // create and add link to created image
} from "./utility.js";

// Import the banner from banner.js
import { banner } from "./Components/banner.js";

// Import the signUp function from signUp.js
import { signUp } from "./Components/signUp.js";

function createMainTag() {
  let mainTag = createElementsWithClass("main", "row");
  prependChild("body", mainTag);
}

// Create the banner
function createBanner() {
  banner();
}
// Create the signUp
function createSignUp() {
  signUp();
}

// Call the functions
function callFunctions() {
  createMainTag();
  createBanner();
  createSignUp();
}

callFunctions();
