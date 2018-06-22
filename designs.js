// Select color input
// Select size input
const color = document.querySelector("#colorPicker");
const height = document.querySelector("#inputHeight");
const weight = document.querySelector("#inputWeight");
const submit = document.querySelector("input[type=submit]");
const table = document.querySelector("#pixelCanvas");
const click = document.querySelectorAll('#pixelCanvas td');
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
    }
  };

  //click ile cell in background-color ı colorValue olacak
  document.querySelector('#pixelCanvas').addEventListener('click', function (evt) {
    if (evt.target.nodeName === 'TD') {  // ← verifies target is desired element
      // set the cell to the picked color
      evt.target.bgColor = colorValue; //evt yerine event de yazsak aynı oluyor.
    }
});
