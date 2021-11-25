function main() {
    /*
    function leftZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    function getCurrentMonth(today) {
        let currentMonth = today.getMonth();

        switch (currentMonth) {
            case 0:
                return 'Janeiro';
            case 1:
                return 'Fevereiro';
            case 2:
                return 'Março';
            case 3:
                return 'Abril';
            case 4:
                return 'Maio';
            case 5:
                return 'Junho';
            case 6:
                return 'Julho';
            case 7:
                return 'Agosto';
            case 8:
                return 'Setembro';
            case 9:
                return 'Outubro';
            case 10:
                return 'Novembro';
            case 11:
                return 'Dezembro';
            default:
                return '';
        }
    }

    function getCurrentDay(today) {
        const currentDay = today.getDay();

        switch (currentDay) {
            case 0:
                return 'Domingo';
            case 1:
                return 'Segunda-feira';
            case 2:
                return 'Terça-feira';
            case 3:
                return 'Quarta-feira';
            case 4:
                return 'Quinta-feira';
            case 5:
                return 'Sexta-feira';
            case 6:
                return 'Sábado';
            default:
                return '';
        }
    }

    const today = new Date();

    document.querySelector('.container .text').innerHTML = `${getCurrentDay(
        today
    )}, ${today.getDate()} de ${getCurrentMonth(
        today
    )} de ${today.getFullYear()} - ${leftZero(today.getHours())}:${leftZero(
        today.getMinutes()
    )}`;*/

    let dateNow = () => {
        let today = new Date();
        document.querySelector('.text').innerHTML = today.toLocaleString(
            'pt-BR',
            {
                dateStyle: 'full',
                timeStyle: 'medium'
            }
        );
    };

    dateNow();
    setInterval(() => {
        dateNow();
    }, 1000);
}
main();

function reload() {
    window.location.reload();
}
