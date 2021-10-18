document.addEventListener('DOMContentLoaded', function () {
    const timer = () => {
        // Конечная дата в формате год, месяц, число и если нужно, часы, минуты, секунды.
        // 1) new Date(2021, 0, 1) - до 1 декабря 2021 года. Подсчёт месяцев идёт с нуля.
        // 2) new Date(2021, 0, 1, 23, 0, 59) - до 1 декабря 2021 года 23 часов 0 минут 59 секунд.
        const deadline = new Date(2021, 9, 19, 12, 0, 0);

        // Id таймера.
        let timerId = null;

        // Добавление нуля к значению.
        const addZero = (value) => value < 10 ? '0' + value : value;

        // Вычисляем разницу дат и устанавливаем оставшееся временя в качестве содержимого элементов.
        const countdownTimer = () => {
            const diff = deadline - new Date();
            if (diff <= 0) {
                clearInterval(timerId);
                return;
            }

            const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
            const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
            const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
            const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

            $days.textContent = addZero(days);
            $hours.textContent = addZero(hours);
            $minutes.textContent = addZero(minutes);
            $seconds.textContent = addZero(seconds);
        };

        // Получаем DOM-элементы, содержащие компоненты даты.
        const $days = document.getElementById('days');
        const $hours = document.getElementById('hours');
        const $minutes = document.getElementById('minutes');
        const $seconds = document.getElementById('seconds');

        // Вызываем функцию countdownTimer.
        countdownTimer();

        // Вызываем функцию countdownTimer каждую секунду.
        timerId = setInterval(countdownTimer, 1000);
    };

    const copy = () => {
        const copyText = document.getElementById('copy-text');
        const copyBtn = document.getElementById('copy-btn');

        const onClickButtonHandler = () => {
            let range, selection;

            range = document.createRange();
            range.selectNode(copyText);

            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);

            document.execCommand('copy');
        };

        copyBtn.addEventListener('click', onClickButtonHandler);
    };

    timer();
    copy();
});