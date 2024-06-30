// Imported functions from utility
import {
  createElementWithID, // create HTML elements with ID
  createElementWithIDAndClass, // create html elements with class and ID
  appendChild, // appendChild elements
  prependChild, // prependChild elements
  createElement, // create elements without ID and class
  addImage, // create and add link to created image
} from "../utility.js";

export function banner() {
  const mainTag = document.querySelector("main");

  // create the banner section element
  const bannerSection = createElementWithIDAndClass(
    "section",
    "netflixBanner",
    "column"
  );
  appendChild(mainTag, bannerSection);

  // create the banner image element
  let bannerImage = createElementWithID("div", "bannerImage");
  appendChild(bannerSection, bannerImage);
  // add the netflix TV image
  let NetflixTV = addImage("Images/Banner/Netflix-TV.svg", "NetflixTV Banner");
  appendChild(bannerImage, NetflixTV);

  // create the banner text element
  let bannerText = createElementWithID("div", "bannerText");
  appendChild(bannerSection, bannerText);
  // create the "Ready To Watch" title
  let readyToWatch = createElement("h2");
  appendChild(bannerText, readyToWatch);
  readyToWatch.innerHTML = "Ready To<br> Watch";

  circles();

  // return the completed banner section
  return bannerSection;
}

function circles() {
  let banner = document.querySelector("#netflixBanner");

  let circlesContainer = createElementWithID("div", "circlesContainer");

  prependChild(banner, circlesContainer);
  for (let index = 0; index < 21; index++) {
    let circles = createElementWithIDAndClass(
      "div",
      `circle${index + 1}`,
      "bannerCircles"
    );
    appendChild(circlesContainer, circles);
  }
}
