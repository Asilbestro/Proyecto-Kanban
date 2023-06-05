// Formulario para añadir tarea, y el boton que abre su formulario
const form1 = document.querySelector("#form1");
const button_add_task = document.getElementById("button-id");

// Formulario para añadir columna, y el boton que abre su formulario
const form2 = document.querySelector("#form2");
const button_add_column = document.getElementById("submit-id-column");

// contenedor de las columnas
const board = document.querySelector('.column');

// Valores del formulario para agregar tarea
const input_task = document.getElementById('name-task');
const input_description = document.getElementById('description-task');
const input_expiration = document.getElementById('expiration-task');
const input_in_charge = document.getElementById('in-charge-task');

const task_column = document.getElementById("todo-column");

// Boton para cerrar el formulario 1
const button_close_form = document.getElementById('close-form');
const button_close_form2 = document.getElementById('close-form2');

// Valor del formulario para agregar columna
const input_column = document.getElementById('name-column');
const zone_drop = document.querySelectorAll('card-column');

const more_function = document.querySelectorAll('#more-function');

// Cuando se hace click al boton añadir tarea, muestra el formulario
button_add_task.addEventListener("click", (event) => {
    event.preventDefault();

    // Si se selecciona el boton añadir tarea, va a cerrar el formulario de añadir columna, si estuviese abierto
    form2.classList.remove("expand-form");
    form2.classList.remove("form2");

    form1.classList.toggle("expand-form");
});

form1.addEventListener("submit", (event) => {
    event.preventDefault();

    // Crear elemento div que contiene la tarea
    const div = document.createElement("div");
    div.className = 'task';
    div.id = 'taskId';
    div.draggable = true;

    // Crear boton y div para "ver mas funciones" para las tareas
    const button = document.createElement("button");
    button.className = "button-icon fix";
    // button.className = "";
    button.id = "more-functions";
    button.type = "button";

    const img = document.createElement("img");
    img.src = "https://cdn-icons-png.flaticon.com/128/10519/10519044.png";

    button.appendChild(img);

    const div_container_functions = document.createElement("div");
    div_container_functions.className = "container-functions";
    div_container_functions.id = "container-functions-id";

    button.appendChild(div_container_functions);

    const p_change_color = document.createElement("p");
    p_change_color.textContent = "cambiar color";

    const p_edit = document.createElement("p");
    p_edit.textContent = "Editar";

    const p_delete = document.createElement("p");
    p_delete.textContent = "Eliminar";

    div_container_functions.appendChild(p_change_color);
    div_container_functions.appendChild(p_edit);
    div_container_functions.appendChild(p_delete);

    div.appendChild(button);

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

    more_function.forEach((icon_more_function) => {
        icon_more_function.addEventListener('click', (event) => {
            // evitar que se propague, y se expanda la tarjeta con hacer click al boton 
            event.stopPropagation();

            const show_more_functions = icon_more_function.querySelector(".container-functions");
            show_more_functions.classList.toggle("hidden");

        });
    });
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        button.querySelector(".container-functions").classList.toggle('hidden');
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
button_close_form.addEventListener('click', () => {

    input_task.value = "";
    input_description.value = "";
    input_expiration.value = "";
    input_in_charge.value = "";

    form1.classList.remove("expand-form");
});


// Boton para agregar columna 
button_add_column.addEventListener('click', (event) => {
    event.preventDefault();

    form2.classList.toggle("expand-form");
    form2.classList.toggle("form2");
});


// Formulario 2 para agregar columna
form2.addEventListener('submit', (event) => {
    event.preventDefault();

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

    // arrastrar elementos dentro de la columna nueva
    div_column.addEventListener('dragover', (event) => {
        event.preventDefault();

        const current_task = document.querySelector(".is-dragging");

        div_column.appendChild(current_task);
    });

})

button_close_form2.addEventListener('click', () => {

    input_column.value = '';

    form2.classList.remove('expand-form');
    form2.classList.remove('form2');
});

more_function.forEach((icon_more_function) => {
    icon_more_function.addEventListener('click', (event) => {
        // evitar que se propague, y se expanda la tarjeta con hacer click al boton 
        event.stopPropagation();

        const show_more_functions = icon_more_function.querySelector(".container-functions");
        show_more_functions.classList.toggle("hidden");

    });
});

// function die(message) {
//     throw new Error(message);
// }
