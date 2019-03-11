const color = document.querySelector("#color-picker");
const height = document.querySelector("#input-height");
const weight = document.querySelector("#input-weight");
const submit = document.querySelector("input[type=submit]");
const table = document.querySelector("#pixel-canvas");
const allTds = table.getElementsByTagName('TD');
const allTrs = table.getElementsByTagName('tr');
const clear = document.querySelector("#clear-canvas");
let colorValue = "black";
let heightValue;
let weightValue;

//events
submit.addEventListener("click",function (evt){
  evt.preventDefault();
  for (let l = 0; l < allTds.length; l++) {
    allTds[l].remove();
    for (let k = 0; k < allTrs.length; k++) {
      allTrs[k].remove();
    };
  };
  
  heightValue = height.value;
  weightValue = weight.value;
  makeGrid();
});

table.addEventListener('click', function (evt) {
  if (evt.target.nodeName === 'TD') {  // ← verifies target is desired element
    // set the cell to the picked color
    evt.target.bgColor = colorValue; //evt yerine event de yazsak aynı oluyor.
  }
});

color.addEventListener("change",function(){
  colorValue = color.value;
});

clear.addEventListener("click", function(){
  // // var alltds = document.getElementsByTagName("td");
  // // for (var tr in alltds) {
  // //   tr.bgColor = "white";
  // // }
  // document.querySelectorAll('td').bgColor = "white";
  console.log("gelieer");
  for (let i = 0; i < allTds.length; i++) {
    allTds[i].bgColor = "white";
  }
  });


//functions
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
