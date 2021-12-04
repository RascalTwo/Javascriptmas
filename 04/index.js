const items = ["Candles", "Decorations", "Chocolate"]
const checklist = document.getElementById("checklist")

function renderItems(items){
	checklist.innerHTML = '';
	checklist.appendChild(items.reduce((fragment, item, i) => {
		const uid = Date.now() + i;

		const div = document.createElement('div');
		div.className = 'checklist-item';
		div.innerHTML = `
			<input id="${uid}" type="checkbox">
			<label class="strikethrough" for="${uid}">${item}</label>
		`;

		fragment.appendChild(div);
		return fragment;
	}, document.createDocumentFragment()));


	const ui = document.createElement('form');
	ui.className = 'checklist-item';
	ui.innerHTML = `<input id="new-item" required placeholder="New Item" /><button>Add</button>`
	ui.addEventListener('submit', (e) => {
		e.preventDefault();

		const input = e.currentTarget.elements[0];
		items.push(input.value);
		input.value = '';

		renderItems(items);
	});
	checklist.appendChild(ui);
}

renderItems(items);

// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.

