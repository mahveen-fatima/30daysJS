// Day-10 Event Handling

//1.Basic event handling
//1
const button = document.getElementById("toChangeText")
const para = document.getElementById("para")

button.addEventListener("click", () => {
    para.textContent = "This is new paragraph"
})

//2
const toggleImage = document.getElementById("toggleImage")

toggleImage.addEventListener("click", ()  => {
    if(toggleImage.style.display === "none") {
        toggleImage.style.display = "block"
    } else {
        toggleImage.style.display = "none"
    }
})


// 2.Mouse events
//1
const div = document.getElementById("changeColor")

div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "green"
})
//2
div.addEventListener("mouseout", () => {
    div.style.backgroundColor = "red"
})

//3. Keyboards events
//1
const input = document.getElementById("keyLog")

input.addEventListener("keydown", (event) => {
    console.log(`key pressed: ${event.key}`);
})

//2
const inputField = document.getElementById('inputField');
const paragraph = document.getElementById('displayPara');

inputField.addEventListener('keyup', () => {
    paragraph.textContent = `Current value: ${inputField.value}`;
});

// 4. Form events
//1
const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
});

//2
const dropdown = document.getElementById('dropdown');
const displayOptions = document.getElementById('displayOptions');

dropdown.addEventListener('change', () => {
    displayOptions.textContent = `Selected value: ${dropdown.value}`;
});

//5. Event Delegations
//1
const myList = document.getElementById('myList');

myList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log(`Clicked item: ${event.target.textContent}`);
    }
});

//2
const parent = document.getElementById('parent');
const list = document.getElementById('list');
const addChildButton = document.getElementById('addChildButton');


parent.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log(`Clicked item: ${event.target.textContent}`);
    }
});

function addListItem() {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
}
addChildButton.addEventListener('click', addListItem);


