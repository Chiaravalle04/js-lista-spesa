// lista della spesa 
const foodList = [
    'Pane',
    'Carne',
    'Uova',
    'Pasta'
];
console.log('Lista:', foodList);

const myList = document.getElementById('my_list');

let i = 0;
while (i < foodList.length) {

    let myLi = document.createElement('li');

    myList.append(myLi);

    myLi.innerHTML = foodList[i];

    i++;

};

