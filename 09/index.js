const meter = document.getElementById("meter")


const now = new Date();
const christmas = new Date(now.getFullYear(), 11, 25);
const remaining = christmas - now;
const days = remaining / (1000 * 3600 * 24);
meter.value = Math.min(25 - days, 25);

// Task:
// Write a function to wire up the festivity loader to reflect how many days are remaining until Christmas!

// Stretch goals:
// - Animate the loader.
// - Change the colors depending on the meter's value.
