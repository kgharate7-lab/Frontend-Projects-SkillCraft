function addTask() {
    let taskInput = document.getElementById("taskInput");
    let dateTimeInput = document.getElementById("dateTimeInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let dateText = dateTimeInput.value 
        ? " (" + dateTimeInput.value + ")" 
        : "";

    li.innerHTML = `
        <span>${taskInput.value}${dateText}</span>
        <br>
        <button onclick="this.parentElement.classList.toggle('completed')">✔</button>
        <button onclick="editTask(this)">✏</button>
        <button onclick="this.parentElement.remove()">🗑</button>
    `;

    taskList.appendChild(li);

    taskInput.value = "";
    dateTimeInput.value = "";
}

function editTask(btn) {
    let span = btn.parentElement.querySelector("span");
    let newText = prompt("Edit task:", span.innerText);
    if (newText) {
        span.innerText = newText;
    }
}