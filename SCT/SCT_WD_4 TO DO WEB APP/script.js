function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskDateTime = document.getElementById("taskDateTime");
    let taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let taskText = document.createElement("span");
    taskText.innerText = taskInput.value + 
        (taskDateTime.value ? " ⏰ " + taskDateTime.value : "");

    let buttonsDiv = document.createElement("div");
    buttonsDiv.className = "task-buttons";

    let completeBtn = document.createElement("button");
    completeBtn.innerText = "✔";
    completeBtn.onclick = function () {
        li.classList.toggle("completed");
    };

    let editBtn = document.createElement("button");
    editBtn.innerText = "✏";
    editBtn.onclick = function () {
        let newTask = prompt("Edit task:", taskInput.value);
        if (newTask !== null) {
            taskText.innerText = newTask;
        }
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "🗑";
    deleteBtn.className = "delete";
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    buttonsDiv.appendChild(completeBtn);
    buttonsDiv.appendChild(editBtn);
    buttonsDiv.appendChild(deleteBtn);

    li.appendChild(taskText);
    li.appendChild(buttonsDiv);
    taskList.appendChild(li);

    taskInput.value = "";
    taskDateTime.value = "";
}