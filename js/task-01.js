const categories = [...document.querySelectorAll('.item')];
console.log("Number of categories:", categories.length);
console.log();
categories.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryItems = item.querySelectorAll('li');
    console.log("Category:", categoryName);
    console.log("Elements:", categoryItems.length);
    console.log();
})