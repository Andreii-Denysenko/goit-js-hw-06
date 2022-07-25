function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const text = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');
btnChangeColor.addEventListener('click', changeColor );

function changeColor (){
document.body.style.backgroundColor = getRandomHexColor();
text.textContent = getRandomHexColor();
}
