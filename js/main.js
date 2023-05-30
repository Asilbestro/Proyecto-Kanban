const submit = document.getElementById("btn-id");
// const input = document.getElementById("todo-input");
// const task_column = document.getElementById("todo-column");

// Cuando se hace click al boton añadir tarea, muestra el formulario
submit.addEventListener("click", (e) => {
    e.preventDefault();

    const form = document.querySelector(".form");
    form.classList.toggle("expand-form");



    const value = input.value;
    console.log(value);
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
    const additional_info_div = document.createElement('div');
    additional_info_div.className = 'additional-info';

    // Crear elementos p dentro del div con info adicional
    const description_p = document.createElement('p');
    description_p.textContent = 'Descripción de la tarea:';
    const in_charge_p = document.createElement('p');
    in_charge_p.textContent = 'Encargado: Juan (CEO)';
    const estimated_hours_p = document.createElement('p');
    estimated_hours_p.textContent = 'Horas estimadas: 15hs';

    // Añadir los elementos p al div con info adicional
    additional_info_div.appendChild(description_p);
    additional_info_div.appendChild(in_charge_p);
    additional_info_div.appendChild(estimated_hours_p);

    // Añadir div adicional al div principal
    div.appendChild(additional_info_div);

    div.addEventListener("dragstart", () => {
        div.classList.add("is-dragging");
    });

    div.addEventListener("dragend", () => {
        div.classList.remove("is-dragging");
    });

    div.addEventListener('click', () => {
        additional_info_div.classList.toggle("expand");
    });

    // Añadir el div principal a la columna de tareas
    task_column.appendChild(div);

    // Borrar campo input una vez agregada la tarea
    input.value = "";
});

function die(message) {
    throw new Error(message);
}