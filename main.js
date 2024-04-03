const display = document.getElementById('display');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
    const valueDisplay = display.value;
    if(valueDisplay == ''){
        alert('введи данные');
    }
    else{
        display.value = '';
        const sum = 3.14 * valueDisplay ** 2;
        display.value = sum;
    }
});