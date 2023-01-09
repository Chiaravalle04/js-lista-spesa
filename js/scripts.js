// lista della spesa 
const foodList = [
    'Pane',
    'Carne',
    'Uova',
    'Pasta'
];
console.log('Lista:', foodList);

const myList = document.getElementById('my_list');

foodList.push('Farina', 'Zucchero', 'Sale', 'Patate', 'Passata di pomodoro');

let i = 0;
while (i < foodList.length) {

    let myLi = document.createElement('li');

    myList.append(myLi);

    myLi.innerHTML = foodList[i];

    let myInput = document.createElement('input');

    myInput.type = 'checkbox';

    myLi.prepend(myInput);

    i++;

};