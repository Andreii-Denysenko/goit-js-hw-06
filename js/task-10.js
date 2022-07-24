function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function getRandomRgbColor() {
  const red = Math.round(Math.random(0, 1) * 255);
  const green = Math.round(Math.random(0, 1) * 255);
  const blue = Math.round(Math.random(0, 1) * 255);
  return `rgb(${red},${green},${blue})`;
}



const ref = {
  inputValue: document.querySelector('#controls>input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxListHTML:  document.querySelector('#boxes'),
boxWrap: [],
};

const createBoxes = (amount) => {
amount = ref.inputValue.value;

for (let i = 0; i < amount; i += 1 ){
  const boxSize = 30;
  let growBox = boxSize + i * 10;
  const boxItem = `<div style ='width:${growBox}px ;height:${growBox}px; background-color:${getRandomRgbColor()}'></div>`
  ref.boxWrap.push(boxItem);
}
// return ref.boxWrap;
ref.boxListHTML.append(...ref.boxWrap);
console.log(...ref.boxWrap)
}



const destroyBoxes =() =>{
  ref.boxListHTML.innerHTML=""; 
  ref.inputValue.value = "";
};
ref.btnCreate.addEventListener('click', createBoxes );
ref.btnDestroy.addEventListener('click', destroyBoxes );