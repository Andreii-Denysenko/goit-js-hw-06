const input = document.querySelector('#validation-input');
const amountSimbol = input.getAttribute('data-length');


input.addEventListener('blur', changesСolorBorder );

function changesСolorBorder (event){
if (event.currentTarget.value.length == amountSimbol){
input.classList.add("valid"); 
input.classList.remove('invalid');
}else {
input.classList.add("invalid"); 
input.classList.remove('valid');
};
};
