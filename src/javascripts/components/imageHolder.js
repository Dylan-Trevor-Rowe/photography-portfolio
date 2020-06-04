
import print from "../helpers/data/utils";
import image from "../helpers/data/imageData";

const filterFunction = (choice, property) => image.getImage().filter((img) => {
  if (img[property] === choice) {
    return true;
  }
  return false;
});

const arrayPrinter = (filtered) => {
  let domstring = "";

  filtered.forEach((e) => {
    domstring += ` <div id="blank" class="text-center">
      <img src="${e.Img}" class="rounded" alt="">
    </div>`;
  });
  print.printToDom("dropIt", domstring);
};

const imagePrinter = () => {
  let domstring = "";

  const newImages = image.getImage();
  newImages.forEach((e) => {
    domstring += ` <div id="blank" class="text-center">
    <img src="${e.Img}" class="rounded" alt="">
  </div>`;
  });
  print.printToDom("dropIt", domstring);
};
export default { imagePrinter, filterFunction, arrayPrinter };
