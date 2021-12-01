const countdownDisplay = document.getElementById("countdown-display")

function dayOfYear(date){
    return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000
}

function renderCountdown(){
    const now = new Date();
    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.

    let christmas = new Date(now.getFullYear(), 11, 25);
    if (christmas < now) christmas.setFullYear(now.getFullYear() + 1);

    const remaining = christmas - now;
    const days = remaining / (1000 * 3600 * 24);
    const hours = days * 24;
    const minutes = hours * 60;
    const seconds = minutes * 60;

    countdownDisplay.innerHTML = `<table>
        <tr><td>Days</td><td>${days.toFixed(0)}</td></tr>
        <tr><td>Hours</td><td>${hours.toFixed(0)}</td></tr>
        <tr><td>Minutes</td><td>${minutes.toFixed(0)}</td></tr>
        <tr><td>Seconds</td><td>${seconds.toFixed(0)}</td></tr>
    </table>`;

    setTimeout(renderCountdown, 1000);
}

renderCountdown()

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.