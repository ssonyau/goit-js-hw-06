const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const items = [];
ingredients.forEach(item => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  listItem.classList.add('item');
  items.push(listItem);
})

document.querySelector('#ingredients').append(...items);
