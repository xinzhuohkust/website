function calculateDaysBetweenDates(date1, date2) {
    const oneDayMilliseconds = 24 * 60 * 60 * 1000;
    const diffMilliseconds = Math.abs(date2 - date1);
    return Math.round(diffMilliseconds / oneDayMilliseconds);
}

const startDay = new Date('2021-03-20T00:00:00+08:00'); // Beijing Time
const today = new Date(); // Current date
const daysPassed = calculateDaysBetweenDates(startDay, today);

document.getElementById('daysPassed').textContent = daysPassed;