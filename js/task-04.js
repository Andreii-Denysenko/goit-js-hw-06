let counterValue = 0;
const btnIncrement = document.querySelector('[data-action="decrement"]')
const btnDecrement = document.querySelector('[data-action="increment"]')


btnIncrement.addEventListener('click', event =>{counterValue -= 1;
value.textContent = counterValue;}),

btnDecrement.addEventListener('click', event =>{
    counterValue += 1;
    value.textContent = counterValue;
})
