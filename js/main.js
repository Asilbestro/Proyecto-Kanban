const form = document.getElementById("form");
const input = document.getElementById("todo-input");
const taskColumn = document.getElementById("todo-column");

// Crear tarea y agregar a Up Coming
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = input.value;
    if (!value) return;

    // Crear elemento div que contiene la tarea
    const div = document.createElement("div");
    div.className = 'task';
    div.id = 'taskId';
    div.draggable = true;

    // Crear elemento p dentro el div
    const p = document.createElement('p');
    p.textContent = value;

    // Añadir elemento p al div
    div.appendChild(p);


    // Crear elemento div con información adicional dentro del otro div
    const additionalInfoDiv = document.createElement('div');
    additionalInfoDiv.className = 'additional-info';

    // Crear elementos p dentro del div con info adicional
    const descriptionP = document.createElement('p');
    descriptionP.textContent = 'Descripción de la tarea:';
    const managerP = document.createElement('p');
    managerP.textContent = 'Encargado: Juan (CEO)';
    const estimatedHoursP = document.createElement('p');
    estimatedHoursP.textContent = 'Horas estimadas: 15hs';

    // Añadir los elementos p al div con info adicional
    additionalInfoDiv.appendChild(descriptionP);
    additionalInfoDiv.appendChild(managerP);
    additionalInfoDiv.appendChild(estimatedHoursP);

    // Añadir div adicional al div principal
    div.appendChild(additionalInfoDiv);


    div.addEventListener("dragstart", () => {
        div.classList.add("is-dragging");
    });

    div.addEventListener("dragend", () => {
        div.classList.remove("is-dragging");
    });

    div.addEventListener('click', () => {
        additionalInfoDiv.classList.toggle("expand");
    });

    // Añadir el div principal a la columna de tareas
    taskColumn.appendChild(div);

    // Borrar campo input una vez agregada la tarea
    input.value = "";
});