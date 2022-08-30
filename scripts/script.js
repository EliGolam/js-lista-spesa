// Initial Handshake
console.log('DEBUG - script.js: OK!');

// SHopping list
const shoppingList = [];
shoppingList.push('Milk', 'Egg', 'Butter', 'Owen Wilson');
console.log(shoppingList);

const foundList = [];
const notFoundList = []; 

// MockUp Supermarket list
const supermarket = ['Milk', 'Egg', 'Water', 'Coke', 'Gloves', 'Butter', 'Fruits', 'Veggies'];

let i = 0;
while (foundList.length + notFoundList.length < shoppingList.length) {
    if (supermarket.includes(shoppingList[i])) {
        foundList.push(shoppingList[i]);
    } else {
        notFoundList.push(shoppingList[i]);
    }
    i++;
}
console.log('DEBUG - lists: ', foundList, notFoundList);

const found = document.getElementById('items-found');
const notFound = document.getElementById('items-not-found');
console.log('DEBUG - ID :', found, notFound);

for (let j = 0; j < foundList.length; j ++) {
    const item = document.createElement('p');
    item.append(foundList[j]);
    found.append(item);
}

for (let j = 0; j < notFoundList.length; j ++) {
    const item = document.createElement('p');
    item.append(notFoundList[j]);
    notFound.append(item);
}