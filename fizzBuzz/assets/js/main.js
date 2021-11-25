(function main() {
    const result = msg => {
        const checkDiv = form.querySelectorAll('div');
        const divOne = form.querySelector('div');
        checkDiv.length > 0 ? divOne.remove() : console.log('');
        const div = document.createElement('div');
        div.innerText = msg;
        form.appendChild(div);
        div.style.backgroundColor = ' #0fe6db';
        div.style.padding = '1rem';
        div.style.marginTop = '2rem';
        div.style.color = '#fff';
        div.style.fontSize = '1.2rem';
        div.style.width = '100%';
        div.style.borderRadius = '4px';
        div.style.textAlign = 'center';
        div.style.fontWeight = 'normal';
    };

    const fizzBuzz = num => {
        if (num === '' || isNaN(num)) {
            result('Digite novamente');
        } else if (num < 0 || num > 100) {
            result('Digite um número de 0 - 100');
        } else if (num % 3 === 0 && num % 5 === 0) {
            result('FizzBuzz');
        } else if (num % 3 === 0) {
            result('Fizz');
        } else if (num % 5 === 0) {
            result('Buzz');
        } else if (num % 3 !== 0 && num % 5 !== 0) {
            result(`${num} não é divísivel por 3 e/ou 5`);
        }
    };

    const form = document.querySelector('form');

    form.addEventListener('submit', event => {
        event.preventDefault();

        const num = form.querySelector('#number');

        fizzBuzz(num.value);
    });
})();
