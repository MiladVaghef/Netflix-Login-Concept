// Imported functions from utility
import {
  createElementsWithID, // create HTML elements with ID
  createEelementsWithClassAndID, // create html elements with class and ID
  appendChild, // appendChild elements
  createElement, // create elements without ID and class
  addImage, // create and add link to created image
} from "../utility.js";

export function banner() {
  // create the banner section element
  let bannerSection = createEelementsWithClassAndID(
    "section",
    "netflixBanner",
    "column",
    "main"
  );

  // create the banner image element
  let bannerImage = createElementsWithID("div", "bannerImage");
  appendChild(bannerSection, bannerImage);
  // add the netflix TV image
  addImage("Images/Netflix-TV.svg", bannerImage).setAttribute(
    "alt",
    "NetflixBanner"
  );

  // create the banner text element
  let bannerText = createElementsWithID("div", "bannerText");
  appendChild(bannerSection, bannerText);
  // create the "Ready To Watch" title
  let readyToWatch = createElement("h2", bannerText);
  readyToWatch.innerHTML = "Ready To<br> Watch";

  // return the completed banner section
  return bannerSection;
}
