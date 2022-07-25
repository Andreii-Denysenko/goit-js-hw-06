const form = document.querySelector('.login-form');





form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event){
event.preventDefault();
// FormData () - собирает данные всей форми. event.currentTarget - ссылка на саму форму (дом - узел)
// FormData - пустой обьект . (под капотом можно перебрать forEach)
// const formData = new FormData(event.currentTarget);
// formData.forEach((value,name)=>{
//     console.log(value)
//     console.log(name)
// });
// console.log(formData)
const formElements = event.currentTarget.elements;
const email = formElements.email.value;
const password = formElements.password.value;
const formValue = ({email, password})
if( email && password !== ""){
    // можно сразу console.log({email, password}); - что бы не создавать переменную.
    console.log(formValue);
    event.currentTarget.reset()
}else{
    alert(` Все поля должны быть заполнены!!!`)
};
};