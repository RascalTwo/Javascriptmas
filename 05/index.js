const greetingDisplay = document.getElementById("greeting-display")
const btn = document.getElementById("btn")
const bauble = document.getElementById("bauble")
btn.addEventListener("click", writeGreeting)

const greetings = [
    "Santa Claus is coming to town!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!",
]

const randomFrom = arr => arr[Math.floor(Math.random() * greetings.length)]

function writeGreeting() {
    greetingDisplay.textContent = randomFrom(greetings);
}

const card = document.getElementById('card');
document.getElementById('ctm').addEventListener('click', () => {
    const customFromTo = confirm('Add "From" and "To" fields?')
    let from, to;
    if (customFromTo) {
        from = prompt('From: ');
        if (!from) return;

        to = prompt('To: ');
        if (!to) return;
    }

    const customGreeting = confirm('Add custom greeting message?')
    let greeting;
    if (customGreeting) {
        greeting = prompt('From: ');
        if (!greeting) return;
    }
    else {
        greeting = randomFrom(greetings);
    }

    for (const [label, value] of Object.entries({ From: from, To: to })) {
        const className = label.toLowerCase();
        let node = document.getElementsByClassName(className)[0];
        if (!value) {
            if (node) node.remove();
            continue;
        }
        if (!node) {
            node = document.createElement('span');
            node.className = className;
            card.insertAdjacentElement('afterbegin', node);
        }
        node.textContent = `${label}: ${value}`;
    }
    greetingDisplay.textContent = greeting;
});

// Task:
// Write a function to display a random greeting in the card.

// Stretch goals:
// - Allow the user to input to and from names.
// - Add an input for custom messages.