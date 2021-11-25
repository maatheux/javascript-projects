(function main() {
    const zeroLeft = num => (num < 10 ? `0${num}` : `${num}`);

    const addHour = (hoursAdd, minutesAdd, secondsAdd) => {
        hours.innerHTML = zeroLeft(hoursAdd);
        minutes.innerHTML = zeroLeft(minutesAdd);
        seconds.innerHTML = zeroLeft(secondsAdd);
    };

    const start = () => {
        timer = setInterval(() => {
            secondsAdd++;

            if (secondsAdd === 60) {
                secondsAdd = 0;
                minutesAdd++;

                if (minutesAdd === 60) {
                    minutesAdd = 0;
                    hoursAdd++;
                }
            }

            addHour(hoursAdd, minutesAdd, secondsAdd);
        }, 1000);
    };

    const pause = () => {
        clearInterval(timer);
    };

    const reset = () => {
        clearInterval(timer);
        secondsAdd = 0;
        minutesAdd = 0;
        hoursAdd = 0;
        addHour(hoursAdd, minutesAdd, secondsAdd);
    };

    const clock = document.querySelector('.clock');
    const hours = document.querySelector('.hours');
    const minutes = document.querySelector('.minutes');
    const seconds = document.querySelector('.seconds');
    let secondsAdd = 0;
    let minutesAdd = 0;
    let hoursAdd = 0;
    let timer;
    let isRunning = false;

    document.addEventListener('click', event => {
        const element = event.target;

        if (element.classList.contains('start')) {
            clock.style.color = '#000';
            if (!isRunning) {
                start();
                isRunning = true;
            }
        } else if (element.classList.contains('pause')) {
            clock.style.color = '#ff1313';
            pause();
            isRunning = false;
        } else if (element.classList.contains('reset')) {
            clock.style.color = '#000';
            reset();
            isRunning = false;
        }
    });
})();
