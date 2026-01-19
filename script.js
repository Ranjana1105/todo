function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    li.onclick = () => {
        li.classList.toggle("completed");
    };

    const del = document.createElement("span");
    del.textContent = "🗑";
    del.className = "delete-btn";

    del.onclick = (e) => {
        e.stopPropagation();
        li.classList.add("remove");
        setTimeout(() => {
            li.remove();
        }, 300);
    };

    li.appendChild(del);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

