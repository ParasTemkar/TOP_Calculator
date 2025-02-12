
const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {

    if (num1 === undefined) {
    number.addEventListener('click', (e) => {
        const num1 = e.target.id;
        return num1;
    })}
    else {
        number.addEventListener('click', (e) => {
            const num2 = e.target.id;
            return num2;
    })}
    });


