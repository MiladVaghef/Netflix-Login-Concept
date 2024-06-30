// create HTML element by getting the element tag and append it
export function createElement(element) {
  const createElement = document.createElement(element);
  return createElement;
}

// Create HTML element by getting the element tag, ID and append it
export function createElementWithID(element, id) {
  const createElement = document.createElement(element);
  createElement.setAttribute("id", id);

  return createElement;
}
// Create HTML element by getting the element tag, Class and append it
export function createElementWithClass(element, className) {
  const createElement = document.createElement(element);
  createElement.setAttribute("class", className);

  return createElement;
}
// Create HTML element by getting the element tag, ID, classname and append it
export function createElementWithIDAndClass(element, id, className) {
  const createElement = document.createElement(element);
  createElement.setAttribute("id", id);
  createElement.setAttribute("class", className);

  return createElement;
}
// Prepend a HTML element
export function prependChild(parentElement, childElement) {
  parentElement.prepend(childElement);
}
// Append a HTML element
export function appendChild(parentElement, childElement) {
  parentElement.appendChild(childElement);
}
// Create a HTML image element with its src and append it
export function addImage(link, alt) {
  const createImage = document.createElement("img");
  createImage.setAttribute("src", link);
  createImage.setAttribute("alt", alt);

  return createImage;
}
