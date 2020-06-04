// eslint-disable-next-line no-unused-vars
import image from "../../components/imageHolder";

const registerSelects = () => {
  const selectsArray = Array.from(document.getElementsByTagName("select"));
  // turns it into an array of select elements
  selectsArray.forEach((e) => {
    // loops over array of selects
    e.addEventListener("change", (event) => {
      const userChoice = event.target.value;
      const property = event.target.id;
      const filterGuy = image.filterFunction(userChoice, property);
      //  calls filter function from imageHolder + adds in above 2 variables
      image.arrayPrinter(filterGuy);
      // builds the images and passes in the filter function
    });
  });
};

const clearMe = () => {
  $(document).ready(() => {
    $("button").click(() => {
      $("img").empty();
      image.imagePrinter();
    });
  });
};


export default { registerSelects, clearMe };
