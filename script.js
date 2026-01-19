let taskList = document.getElementById("taskList");

function addTask() {
    let taskInput = document.getElementById("task");
    let timeInput = document.getElementById("time");

    if (taskInput.value === "" || timeInput.value === "") {
        alert("Please enter task and time!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <div>
            <strong>${taskInput.value}</strong><br>
            <span class="time">⏰ ${new Date(timeInput.value).toLocaleString()}</span>
        </div>
        <button class="delete" onclick="this.parentElement.remove()">X</button>
    `;

    taskList.appendChild(li);

    taskInput.value = "";
    timeInput.value = "";
}
