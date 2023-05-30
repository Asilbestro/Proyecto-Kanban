const form = document.getElementById("form");
const input = document.getElementById("todo-input");
const taskColumn = document.getElementById("todo-column");

// Crear tarea y agregar a Up Coming
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = input.value; 
    if (!value) return;

    const newTask = document.createElement("p");

    newTask.classList.add("task");
    newTask.setAttribute("draggable", "true");
    newTask.innerText = value;

    

    newTask.addEventListener("dragstart", () => {
        newTask.classList.add("is-dragging");
    });

    newTask.addEventListener("dragend", () => {
        newTask.classList.remove("is-dragging");
    });

    taskColumn.appendChild(newTask);
    input.value = "";
});