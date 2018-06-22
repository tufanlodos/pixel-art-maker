// Select color input
// Select size input
const color = document.querySelector("#colorPicker");
const height = document.querySelector("#inputHeight");
const weight = document.querySelector("#inputWeight");
const submit = document.querySelector("input[type=submit]");
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
//submit e click ile event koy
// When size is submitted by the user, call makeGrid()

function makeGrid() {

  console.log(colorValue,weightValue,heightValue);
// Your code goes here!

}
