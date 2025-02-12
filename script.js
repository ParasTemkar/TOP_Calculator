const numbers = document.querySelectorAll('.number');

let num1 = '';
let num2 = '';
let operator = '';

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        if (operator === '') {
            num1 += e.target.id;
            document.getElementById('result').innerHTML = num1;
        } else {
            num2 += e.target.id;
            document.getElementById('result').innerHTML = num2;
        }
    });
});

// All the operators
const addition = document.getElementById('add');
addition.addEventListener('click', () => {
    operator = '+';
});

const subtraction = document.getElementById('sub');
subtraction.addEventListener('click', () => {
    operator = '-';
});

const multiplication = document.getElementById('multi');
multiplication.addEventListener('click', () => {
    operator = '*';
});

const division = document.getElementById('div');
division.addEventListener('click', () => {
    operator = '/';
});

