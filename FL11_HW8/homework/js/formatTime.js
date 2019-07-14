function formatTime(num1) {
    let days = Math.trunc(num1/1440);
    let hours = Math.trunc(num1/60);
    let minutes = num1 % 60;
    return days + hours + minutes;
}
formatTime (120);