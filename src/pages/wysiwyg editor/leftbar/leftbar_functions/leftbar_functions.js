import Element from "../Element.js";


function add_elem(option) {
  switch (option) {
    case "text":
      createText();
      break;
    case "image":
      createImage();
      break;
    case "video":
      createVideo();
      break;
    case "SVG":
      createSVG();
      break;
    case "IFC":
      createIFC();
      break;
    case "form":
      createForm();
      break;
    default:
      return alert("Function can't be called at the moment.");
  }
}

function createText () {
  Element("text")
}

async function createImage() {

 Element("img");

}


async function createVideo() {
  Element("video")

}

async function createSVG() {
new Element("SVG")
}

function createIFC() {
  return {};
}

function createForm() {
  return {};
}

export { add_elem };
