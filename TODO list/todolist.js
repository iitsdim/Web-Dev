// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// Create a new list item when clicking on the "Add" button
const newElement = function (listName) {
    let li = document.createElement("LI");
    let inputValue = document.getElementById("titleToDo").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById(listName.toString()).appendChild(li);
    }
    document.getElementById("titleToDo").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

document.getElementById('toDoListDisplay').addEventListener('click', function (ev) {
    if (ev.target.tagName == 'LI') {
        document.getElementById('toDoListDone').appendChild(ev.target);
    }
}, false);
document.getElementById('toDoListDone').addEventListener('click', function (ev) {
    if (ev.target.tagName == 'LI') {
        document.getElementById('toDoListDisplay').appendChild(ev.target);
    }
}, false);
