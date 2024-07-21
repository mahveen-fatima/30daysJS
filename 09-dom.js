// Day-9 DOM manipulation
//1 selecting and manipulating elements
function textChange() {
    let text = document.getElementById("text")
    text.textContent = "New text"
}

function colorChange() {
    let button = document.querySelector(".button")
    button.style.backgroundColor = "red"
}

//2 creating and appending elements
function addingDiv() {
    
    let div = document.createElement("div");
    div.textContent = "This is a new div element.";
    document.body.appendChild(div);
}

function addingNewList() {
    let newList = document.createElement("li")
    newList.textContent = "New list is here"
    let ulList = document.getElementById("list")
    ulList.appendChild(newList)
}

//3. Removing elements
function removing() {
    let para = document.querySelector(".removePara")

    if(para) {
        para.remove()
    }
}

function removingLastChild() {
    let parentList = document.getElementById("parentList");

    if (parentList.lastChild) {
        parentList.removeChild(parentList.lastChild);
    }
}

//4. Modifying attributes and classes

function changingImageSrc() {
    let imgElement = document.getElementById("imageId");

    imgElement.setAttribute("src", "https://w7.pngwing.com/pngs/570/593/png-transparent-github-pages-source-code-people-s-code-github-thumbnail.png");
}

function addClass() {
    let element = document.getElementById("paragraph");
    element.classList.add("highlight");
}
function removeClass() {
    let element = document.getElementById("paragraph");
    element.classList.remove("highlight");
}

//5. Event handling

document.getElementById("myButton").addEventListener("click", function() {
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "This is the new paragraph text.";
});

document.getElementById("myElement").addEventListener("mouseover", function() {
    this.style.borderColor = "red";
});
document.getElementById("myElement").addEventListener("mouseout", function() {
    this.style.borderColor = "black";
});
