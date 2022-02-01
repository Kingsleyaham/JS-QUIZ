function startCountdown() {
    var currentDate = new Date();
    var endTime = currentDate.getTime() + 2 * 60 * 1000;

    var timer = setInterval(function () {

        var now = new Date().getTime();

        var distance = endTime - now;


        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        // Display the result in the element with id="demo"
        document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(timer);
            displayResult();
            document.getElementById("timer").style.display = 'none';

        }


    }, 1000);
}