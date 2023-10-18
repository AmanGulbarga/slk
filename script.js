// Define an array of menu items
const menuItems = [
    { category: 'STARTERS', items: ['Masala papad', 'Soop', 'Noodles'] },
    { category: 'Main Courses', items: ['Egg Biryani', 'Veg-Thali', 'Chiken Birayani'] },
    { category: 'Desserts', items: ['Ice-Cream',  'Kulfi'] }
];

// Function to display the menu items in HTML
function displayMenu() {
    const menuList = document.getElementById('menu-list');

    menuItems.forEach(category => {
        const categoryTitle = document.createElement('div');
        category
        categoryTitle.textContent = category.category;
        menuList.appendChild(categoryTitle);

        const itemList = document.createElement('ul');
        category.items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            itemList.appendChild(listItem);
        });

        menuList.appendChild(itemList);
    });
}

// Call the displayMenu function when the page loads
window.addEventListener('load', displayMenu);
