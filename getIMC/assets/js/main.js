function main() {
    function editFinalResult(msg, classNameAdd, classNameRemove) {
        result = document.querySelector('.final-result');

        result.innerHTML = `${msg}`;

        result.style.padding = '0.5rem 0.2rem';
        result.classList.add(`${classNameAdd}`);
        result.classList.remove(`${classNameRemove}`);
    }

    let result;
    const form = document.querySelector('form');

    form.addEventListener('submit', event => {
        event.preventDefault();
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        if (
            (peso.value === '' && altura.value === '') ||
            (isNaN(peso.value) && isNaN(altura.value))
        ) {
            editFinalResult('Peso e altura inválida', 'errorIMC', 'doneIMC');
        } else if (peso.value === '' || isNaN(peso.value)) {
            editFinalResult('Peso inválido', 'errorIMC', 'doneIMC');
        } else if (altura.value === '' || isNaN(altura.value)) {
            editFinalResult('Altura inválida', 'errorIMC', 'doneIMC');
        } else {
            let imc = (Number(peso.value) / Number(altura.value) ** 2).toFixed(
                2
            );

            if (imc < 18.5) {
                result = 'Abaixo do peso';
            } else if (imc > 18.5 && imc < 24.9) {
                result = 'Peso normal';
            } else if (imc > 25 && imc < 29.9) {
                result = 'Sobrepeso';
            } else if (imc > 30 && imc < 34.9) {
                result = 'Obesidade grau 1';
            } else if (imc > 35 && imc < 39.9) {
                result = 'Obesidade grau 2';
            } else {
                result = 'Obesidade grau 3';
            }

            editFinalResult(
                `Seu IMC é ${imc} (${result})`,
                'doneIMC',
                'errorIMC'
            );
        }
    });
}
main();
