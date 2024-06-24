// Imported functions from utility
import {
  createElementsWithID, // create HTML elements with ID
  createElementsWithClass, // create HTML element with class
  createElementsWithClassAndID, // create html elements with class and ID
  appendChild, // appendChild elements
  prependChild, // create and add link to created image
} from "../utility.js";

export function signUp() {
  let signUpSection = createElementsWithClassAndID(
    "section",
    "signUpFormContainer",
    "column"
  );
  prependChild("main", signUpSection);

  createElementsWithClassAndID(
    "div",
    "holder",
    "container column",
    signUpSection
  );

  netflixLogo();
  signUpInputs();
  termOfUse();
  signUpButton();
  sendToLogin();
}

function netflixLogo() {
  // Create container div
  let logoContainer = createElementsWithID("div", "netflixLogo", "#holder");

  // Create SVG element
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("width", "227");
  svg.setAttribute("height", "85");
  svg.setAttribute("viewBox", "0 0 227 85");

  // Create path element inside SVG
  let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M 10 41.366 L 10 72.731 14.040 71.993 C 16.261 71.586, 18.322 71.011, 18.618 70.715 L 19.157 70.176 19.041 49.883 C 18.976 38.722, 19.115 29.795, 19.349 30.045 C 19.582 30.295, 21.592 37.250, 23.814 45.500 C 26.036 53.750, 28.355 62.413, 28.966 64.750 L 30.077 69 32.414 69 C 33.699 69, 36.156 68.719, 37.875 68.375 L 41 67.750 41 38.875 L 41 10 36.028 10 L 31.056 10 30.778 23.750 L 30.500 37.500 27.186 25.500 C 25.363 18.900, 23.645 12.713, 23.368 11.750 L 22.865 10 16.433 10 L 10 10 10 41.366 M 46.500 38.615 L 46.500 67.231 54 66.594 C 58.125 66.243, 64.088 65.683, 67.250 65.349 L 73 64.742 73 60.036 L 73 55.331 65 55.794 L 57 56.257 57 48.628 L 57 41 63.500 41 L 70 41 70 36.500 L 70 32 63.454 32 L 56.909 32 57.204 25.250 L 57.500 18.500 65.149 18.210 L 72.798 17.920 73.175 13.960 L 73.553 10 60.026 10 L 46.500 10 46.500 38.615 M 75.829 14 L 76.210 18 80.605 18 L 85 18 85 41 L 85 64 90.500 64 L 96 64 96 41 L 96 18 101 18 L 106 18 106 14 L 106 10 90.724 10 L 75.447 10 75.829 14 M 109 37.052 L 109 64.105 114.129 63.802 L 119.258 63.500 119.076 52.299 L 118.893 41.098 125.197 40.799 L 131.500 40.500 131.807 36.250 L 132.115 32 125.557 32 L 119 32 119 25 L 119 18 127 18 L 135 18 135 14 L 135 10 122 10 L 109 10 109 37.052 M 138.781 36.917 L 139.062 63.835 146.281 64.408 C 150.251 64.722, 155.750 65.097, 158.500 65.240 L 163.500 65.500 163.750 64.750 C 163.887 64.338, 164 62.238, 164 60.085 L 164 56.171 156.500 55.468 L 149 54.765 149 32.383 L 149 10 143.750 9.999 L 138.500 9.999 138.781 36.917 M 167.780 37.880 L 168.060 65.762 171.155 66.381 C 172.857 66.721, 175.094 67, 176.125 67 L 178 67 178 38.500 L 178 10 172.750 9.999 L 167.500 9.999 167.780 37.880 M 187.247 23.485 L 192.236 36.969 187.453 50.735 C 184.822 58.306, 182.243 65.057, 181.722 65.738 L 180.775 66.976 182.137 67.406 C 182.887 67.642, 185.341 68.045, 187.591 68.301 L 191.682 68.767 195.038 58.383 C 196.883 52.673, 198.670 48, 199.007 48 C 199.344 48, 201.114 53.150, 202.941 59.445 L 206.262 70.889 211.381 71.726 L 216.500 72.564 216.830 71.791 C 217.012 71.366, 214.867 63.591, 212.064 54.514 L 206.967 38.010 211.826 24.005 L 216.684 10 211.530 10 L 206.376 10 203.500 19 C 201.918 23.950, 200.343 28, 200 28 C 199.657 28, 198.082 23.950, 196.500 19 L 193.624 10 187.940 10 L 182.257 10 187.247 23.485"
  );

  // Append path to SVG
  svg.appendChild(path);

  // Append SVG to container
  appendChild(logoContainer, svg);
  // Append container to parent element
  appendChild("#holder", logoContainer);
}

function signUpInputs() {
  createElementsWithClassAndID("form", "signUpForm", "column", "#holder");

  const inputs = [
    { type: "username", placeholder: "Name", autocomplete: "username" },
    { type: "email", placeholder: "Email Address", autocomplete: "email" },
    { type: "password", placeholder: "Create Password" },
  ];

  inputs.forEach((inputConfig) => {
    let createInputs = createElementsWithClass("input", "formInput", "form");
    createInputs.type = inputConfig.type;
    createInputs.placeholder = inputConfig.placeholder;
    createInputs.autocomplete = inputConfig.autocomplete;
  });
}

function termOfUse() {
  let termOfUseParentDiv = createElementsWithClass("div", "row", "#signUpForm");
  let termOfUseSpan = createElementsWithClassAndID(
    "span",
    "termText",
    "smallText",
    termOfUseParentDiv
  );
  termOfUseSpan.innerText = "By signing up, you confirm that you accept our";

  let termOfUseLink = createElementsWithClassAndID(
    "a",
    "termLink",
    "smallText",
    termOfUseParentDiv
  );
  termOfUseLink.innerText = "Terms of use";
  termOfUseLink.setAttribute("href", "#");
}

function signUpButton() {
  let signUnButtonElement = createElementsWithClassAndID(
    "button",
    "signUpButton",
    "submitButton",
    "#signUpForm"
  );

  signUnButtonElement.innerText = "Sign Up";
}

function sendToLogin() {
  let loginLinkContainer = createElementsWithClassAndID(
    "div",
    "loginLinkContainer",
    "row",
    "#holder"
  );

  let alreadyMemberSpan = createElementsWithClassAndID(
    "span",
    "alreadyMemberText",
    "mediumText",
    loginLinkContainer
  );

  alreadyMemberSpan.innerText = "Already a member?";

  let loginLink = createElementsWithClassAndID(
    "a",
    "loginLink",
    "mediumText",
    loginLinkContainer
  );

  loginLink.innerText = "Login";
  loginLink.setAttribute("href", "#");
}
