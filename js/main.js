const form1 = document.querySelector("#form1");
const button_add_task = document.getElementById("button-id");

const form2 = document.querySelector("#form2");
const button_add_column = document.getElementById("submit-id-column");
const board = document.querySelector('.column');

// Valores del formulario para agregar tarea
const input_task = document.getElementById('name-task');
const input_description = document.getElementById('description-task');
const input_expiration = document.getElementById('expiration-task');
const input_in_charge = document.getElementById('in-charge-task');

const task_column = document.getElementById("todo-column");

// Boton para cerrar el formulario 1
const button_close_form = document.getElementById('close-form');

// Valor del formulario para agregar columna
const input_column = document.getElementById('name-column');
const zone_drop = document.querySelectorAll('card-column');

// Cuando se hace click al boton añadir tarea, muestra el formulario
button_add_task.addEventListener("click", (e) => {
    e.preventDefault();
    form1.classList.toggle("expand-form");
});

form1.addEventListener("submit", (e) => {
    e.preventDefault();

    // Crear elemento div que contiene la tarea
    const div = document.createElement("div");
    div.className = 'task';
    div.id = 'taskId';
    div.draggable = true;

    // Crear elemento p dentro el div
    const p = document.createElement('p');
    p.textContent = input_task.value;

    // Añadir elemento p al div
    div.appendChild(p);


    // Crear elemento div con información adicional dentro del otro div
    const additional_info_div = document.createElement('div');
    additional_info_div.className = 'additional-info';

    // Crear elementos p dentro del div con info adicional
    const description_p = document.createElement('p');
    description_p.textContent = 'Descripción de la tarea: ';

    const text_description_p = document.createElement('p');
    text_description_p.textContent = input_description.value;

    const in_charge_p = document.createElement('p');
    in_charge_p.textContent = 'Encargado: ' + input_in_charge.value;

    const estimated_hours_p = document.createElement('p');
    estimated_hours_p.textContent = 'Vencimiento: ' + input_expiration.value;

    // Añadir los elementos p al div con info adicional
    additional_info_div.appendChild(description_p);
    additional_info_div.appendChild(in_charge_p);
    additional_info_div.appendChild(estimated_hours_p);
    description_p.appendChild(text_description_p);

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

    input_task.value = "";
    input_description.value = "";
    input_expiration.value = "";
    input_in_charge.value = "";

    form1.classList.toggle("expand-form");
});

// Evento para cerrar formulario
button_close_form.addEventListener('click', (e) => {
    e.preventDefault();

    form1.classList.toggle("expand-form");
});


// Boton para agregar columna 
button_add_column.addEventListener('click', (e) => {
    e.preventDefault();

    form2.classList.toggle("expand-form");
    form2.classList.toggle("form2");
});


// Formulario 2 para agregar columna
form2.addEventListener('submit', (e) => {
    e.preventDefault();

    const div_column = document.createElement('div');
    div_column.className = 'card-column';
    div_column.id = 'todo-column';

    const h3_column = document.createElement('h3');
    h3_column.className = 'title-column'
    h3_column.textContent = input_column.value;

    div_column.appendChild(h3_column);
    board.appendChild(div_column);

    input_column.value = "";

    form2.classList.toggle("expand-form");
    form2.classList.toggle("form2");

})

// function die(message) {
//     throw new Error(message);
// }
