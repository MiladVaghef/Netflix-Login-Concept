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

function createMainTag() {
  let mainTag = createElementsWithClass("main", "row");
  prependChild("body", mainTag);
}

// Create the banner
function createBanner() {
  banner();
}
// Call the functions
function callFunctions() {
  createMainTag();
  createBanner();
}

callFunctions();
