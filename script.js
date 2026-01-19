function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    // Mark as completed
    li.onclick = function () {
        li.classList.toggle("completed");
    };

    // Delete button
    let deleteBtn = document.createElement("span");
    deleteBtn.textContent = "✖";
    deleteBtn.className = "delete";

    deleteBtn.onclick = function (event) {
        event.stopPropagation();
        li.remove();
    };

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
