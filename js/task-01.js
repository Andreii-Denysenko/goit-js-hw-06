
const allCategories = document.querySelectorAll('.item');



const arrayCatedories = [...allCategories]
.map(categories => `Category:${categories.children[0].textContent}
Elements:${categories.children[1].children.length}` )
.join('\n')


console.log(`Number of categories: ${allCategories.length}` )
console.log(arrayCatedories);



