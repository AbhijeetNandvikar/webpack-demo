import _ from "lodash";
import "./style.css";
import myImage from "./BlogDesign.png";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");
  const image = new Image();
  image.src = myImage;
  element.appendChild(image);
  return element;
}

document.body.appendChild(component());
