// create HTML element by getting the element tag and append it
export function createElement(element, append) {
  const createEelements = document.createElement(element);
  $(append).append(createEelements);

  return createEelements;
}

// Create HTML element by getting the element tag, ID and append it
export function createElementsWithID(element, id, append) {
  const createElements = document.createElement(element);
  createElements.setAttribute("id", id);
  $(append).append(createElements);

  return createElements;
}
// Create HTML element by getting the element tag, Class and append it
export function createEelementsWithClass(element, className, append) {
  const createEelements = document.createElement(element);
  createEelements.setAttribute("class", className);
  $(append).append(createEelements);

  return createEelements;
}
// Create HTML element by getting the element tag, ID, classname and append it
export function createEelementsWithClassAndID(element, id, className, append) {
  const createEelements = document.createElement(element);
  createEelements.setAttribute("id", id);
  createEelements.setAttribute("class", className);
  $(append).append(createEelements);

  return createEelements;
}
// Prepend a HTML element
export function prependChild(firstElement, secondElement) {
  $(firstElement).prepend(secondElement);
}
// Append a HTML element
export function appendChild(parentElement, childElement) {
  $(parentElement).append(childElement);
}
// Create a HTML image element with its src and append it
export function addImage(link, parentElement) {
  const createImage = document.createElement("img");
  createImage.setAttribute("src", link);
  $(parentElement).append(createImage);

  return createImage;
}
