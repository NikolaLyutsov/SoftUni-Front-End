// Task 2. Stopwatch
// Write a timer that counts minutes and seconds. The user should be able to control it with buttons. Clicking
// [Start] starts the counter. Clicking [Stop] resets the timer back to zero. Only one of the buttons should be
// enabled at a time (you cannot stop the timer, if it is not running).
// Submit only the stopwatch() function in judge.

        function stopwatch() {
            let startButton = document.getElementById('startBtn');
            startButton.addEventListener('click', start);

            let stopButon = document.getElementById('stopBtn');
            stopButon.addEventListener('click', stop);

            let outputBox = document.getElementById('time');
            let timer = null;

            function stop() {
                stopButon.disabled = true;
                startButton.disabled = false;
                clearInterval(timer);
            }

            function start() {
                startButton.disabled = true;
                stopButon.disabled = false;

                let seconds = 0;
                timer = setInterval(tick, 1000);
                outputBox.textContent = '00:00';
                
                function tick() {
                    seconds++;
                    let currentMinute = ('0' + Math.floor(seconds / 60)).slice(-2);
                    let currentSecond = ('0' + seconds % 60).slice(-2);
                    outputBox.textContent = `${currentMinute}:${currentSecond}`;
                }
            }
        }