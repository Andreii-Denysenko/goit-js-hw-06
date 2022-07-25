const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const sizeText = () => {
    text.style.fontSize = `${input.value}px`
};

input.addEventListener('input', sizeText);
console.log(text)
