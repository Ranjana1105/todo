const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

addBtn.addEventListener("click", addTask);
input.addEventListener("keypress", e => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const text = input.value.trim();
  if (text === "") return;

  tasks.push({ text, completed: false });
  input.value = "";
  saveAndRender();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveAndRender();
}

function editTask(index) {
  const newText = prompt("Edit task:", tasks[index].text);
  if (newText && newText.trim() !== "") {
    tasks[index].text = newText;
    saveAndRender();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");

    const span = document.createElement("span");
    span.textContent = task.text;
    span.onclick = () => toggleTask(index);

    const actions = document.createElement("div");
    actions.className = "actions";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";
    editBtn.onclick = () => editTask(index);

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete";
    delBtn.onclick = () => deleteTask(index);

    actions.appendChild(editBtn);
    actions.appendChild(delBtn);

    li.appendChild(span);
    li.appendChild(actions);
    taskList.appendChild(li);
  });
}

renderTasks();

