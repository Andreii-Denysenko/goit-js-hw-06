
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.getElementById('ingredients')
const arrayItem = [];

for (let i = 0 ; i < ingredients.length ; i += 1){
  const itemList = document.createElement("li");
  itemList.textContent = ingredients[i];
  itemList.classList.add('item');
  arrayItem.push(itemList)
};
list.append(...arrayItem)
// console.log();






