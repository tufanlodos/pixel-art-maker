// Select color input
// Select size input
const color = document.querySelector("#colorPicker");
const height = document.querySelector("#inputHeight");
const weight = document.querySelector("#inputWeight");
const submit = document.querySelector("input[type=submit]");
const table = document.querySelector("#pixelCanvas");
  let colorValue;
  let heightValue;
  let weightValue;

submit.addEventListener("click",function (evt){
  evt.preventDefault();
  colorValue = color.value;
  // color.setAttribute("value",color);

  heightValue = height.value;
  // color.setAttribute("value",height);

  weightValue = weight.value;
  // color.setAttribute("value",weight);
  makeGrid();
});

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  for (let i = 0; i < heightValue ; i++) {
    const newRow = document.createElement("tr");
    table.appendChild(newRow);
    for (let j = 0; j < weightValue; j++) {
      const newD = document.createElement("td");
      newRow.appendChild(newD);
      }
    };
  
  console.log(colorValue,weightValue,heightValue);
// Your code goes here!

}
