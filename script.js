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

const equal = document.getElementById('equal');
equal.addEventListener('click', () => {
    let result;
    switch (operator) {
        case '+':
            result = parseInt(num1) + parseInt(num2);
            break;
        case '-':
            result = parseInt(num1) - parseInt(num2);
            break;
        case '*':
            result = parseInt(num1) * parseInt(num2);
            break;
        case '/':
            result = parseInt(num1) / parseInt(num2);
            break;
    }
    document.getElementById('result').innerHTML = result;
    num1 = '';
    num2 = '';
    operator = '';
});

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    operator = '';
    document.getElementById('result').innerHTML = '';
});
 
