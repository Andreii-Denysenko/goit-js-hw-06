const refs = {
inputName: document.querySelector('#name-input'),
outputName: document.querySelector('#name-output'),
};


refs.inputName.addEventListener('input', OnInputName)


function OnInputName (event) {
if(event.currentTarget.value === '' ){
refs.outputName.textContent = 'Anonymous';
}else{
    refs.outputName.textContent = event.currentTarget.value;
}};