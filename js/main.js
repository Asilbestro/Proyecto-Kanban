// Formulario para añadir tarea, y el boton que abre su formulario
const form1 = document.querySelector("#form1");
const button_add_task = document.getElementById("button-id");
const button_column = document.querySelectorAll("#button-id");

// Formulario para añadir columna, y el boton que abre su formulario
// const form2 = document.querySelector("#form2");
const button_add_column = document.getElementById("submit-id-column");

// contenedor de las columnas
const board = document.querySelector('.column');

// Valores del formulario para agregar tarea
const input_task = document.getElementById('name-task');
const input_description = document.getElementById('description-task');
const input_expiration = document.getElementById('expiration-task');
const input_in_charge = document.getElementById('in-charge-task');

// Valor del cambio del titulo del h3 en cada columna
const input_h3 = document.getElementById("input-change-title-id");

const task_column = document.getElementById("todo-column");

// Boton para cerrar el formulario 1
const button_close_form = document.getElementById('close-form');
const button_close_form2 = document.getElementById('close-form2');

// Valor del formulario para agregar columna
const input_column = document.getElementById('name-column');
const zone_drop = document.querySelectorAll('card-column');

const more_function = document.querySelectorAll('#more-function');


const board1 = document.querySelector(".board");
let column_closer = "";


// usamos la propagacion para acceder al elemento que se desea, y optimizamos el codigo, ya que no hay que activar un
// event listener cada vez que queremos seleccionar un elemento 
board1.addEventListener('click', (event) => {

    // si se hace click al boton para añadir tarea, mustra el formulario
    if (event.target && event.target.id === 'button-id') {
        event.preventDefault();

        // columna de donde se activo el evento añadir tarea
        const parent = event.target;
        column_closer = parent.closest('.card-column');

        form1.classList.toggle("expand-form");
    }

    if (event.target && event.target.id === "submit-id-task") {
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
        img.id = "img-more-icon";
        img.src = "https://cdn-icons-png.flaticon.com/128/10519/10519044.png";

        button.appendChild(img);

        const div_container_functions = document.createElement("div");
        div_container_functions.className = "container-functions";
        div_container_functions.id = "container-functions-id";

        button.appendChild(div_container_functions);

        const div_change_color = document.createElement("div");
        div_change_color.className = "p-change-color";
        div_change_color.id = "color-task";


        const li_red = document.createElement("li");

        const i_red = document.createElement("i");
        i_red.className = "fas fa-square red";
        i_red.id = "i-red";

        li_red.appendChild(i_red);

        const li_yellow = document.createElement("li");

        const i_yellow = document.createElement("i");
        i_yellow.className = "fas fa-square yellow";
        i_yellow.id = "i-yellow";

        li_yellow.appendChild(i_yellow);


        const li_green = document.createElement("li");

        const i_green = document.createElement("i");
        i_green.className = "fas fa-square green";
        i_green.id = "i-green";

        li_green.appendChild(i_green);


        const li_white = document.createElement("li");

        const i_white = document.createElement("i");
        i_white.className = "fas fa-square white";
        i_white.id = "i-white";

        li_white.appendChild(i_white);

        div_change_color.appendChild(li_red);
        div_change_color.appendChild(li_yellow);
        div_change_color.appendChild(li_green);
        div_change_color.appendChild(li_white);

        const div_p_edit = document.createElement("div");

        const p_edit = document.createElement("p");
        p_edit.className = "p-edit";
        p_edit.textContent = "Editar";

        div_p_edit.appendChild(p_edit);

        const div_p_delete = document.createElement("div");

        const p_delete = document.createElement("p");
        p_delete.className = "p-delete";
        p_delete.textContent = "Eliminar";

        div_p_delete.appendChild(p_delete);

        div_container_functions.appendChild(div_change_color);
        div_container_functions.appendChild(div_p_edit);
        div_container_functions.appendChild(div_p_delete);

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

        console.log(column_closer);
        // Añadir el div principal a la columna de tareas
        column_closer.appendChild(div);

        // Borrar campo input una vez agregada la tarea
        input_task.value = "";
        input_description.value = "";
        input_expiration.value = "";
        input_in_charge.value = "";

        form1.classList.toggle("expand-form");
    }

    // le cambia la clase al container con las funciones de cambiar color, editar y borrar
    if (event.target && event.target.id === "more-function" || event.target.id === "img-more-icon") {
        // container para mostrar mas funciones
        const icon_more_function = event.target;
        container_functions = icon_more_function.parentNode.querySelector('.container-functions');

        container_functions.classList.toggle("hidden");

        const div_change_color = container_functions.querySelector(".p-change-color");
        const p_edit = container_functions.querySelector(".p-edit");
        const p_delete = container_functions.querySelector(".p-delete");

        // remueve el evento de cada opcion de la tarea, para que no se acumule
        div_change_color.removeEventListener('click', handleChangeColor);
        p_edit.removeEventListener('click', handleEdit);
        p_delete.removeEventListener('click', handleDelete);

        // escucha el si se hace click a cada una de las opciones de las tareas
        div_change_color.addEventListener('click', handleChangeColor);
        p_edit.addEventListener('click', handleEdit);
        p_delete.addEventListener('click', handleDelete);
    }

    // cerrar el div para cambiar de color una vez seleccionado el color
    if (event.target && event.target.id === "i-red" || event.target.id === "i-yellow" || event.target.id === "i-green" || event.target.id === "i-white") {
        const i_color = event.target;
        const container_functions = i_color.closest(".container-functions");
        container_functions.classList.toggle("hidden");
    }

    // Evento para cerrar formulario1 al clickear X
    if (event.target && event.target.id === "close-form" || event.target.id === "img-close-form") {
        input_task.value = "";
        input_description.value = "";
        input_expiration.value = "";
        input_in_charge.value = "";

        const parent = event.target.closest("#form1");
        parent.classList.remove("expand-form");
    }

    // Al hacer click al botono de añadir columna, intercambia la clase para mostrar el formulario
    if (event.target && event.target.id === "submit-id-column") {
        event.preventDefault();

        // como estoy en el mismo nivel de form2, accedo al padre, y luego selecciono el form2
        const element_parent = event.target
        const form = element_parent.parentNode.querySelector("#form2");

        form.classList.toggle("expand-form");
        form.classList.toggle("form2");
    }

    // Formulario 2 para agregar columna
    if (event.target && event.target.id === "submit-id") {
        event.preventDefault();

        const div_column = document.createElement('div');
        div_column.className = 'card-column';
        div_column.id = 'todo-column';

        const img = document.createElement('img');
        img.id = "img-delete-column";
        img.className = "img-column";
        img.src = "https://cdn-icons-png.flaticon.com/128/7666/7666109.png";
        img.alt = "icono de borrar";

        const h3_column = document.createElement('h3');
        h3_column.className = 'title-column'
        h3_column.textContent = input_column.value;

        const button = document.createElement('button');
        button.className = "btn-form add-task";
        button.id = "button-id";
        button.type = "submit";
        button.textContent = "Añadir Tarea +";

        div_column.appendChild(img);
        div_column.appendChild(h3_column);
        div_column.appendChild(button);
        board.appendChild(div_column);

        input_column.value = "";

        const form2 = event.target.closest("#form2");

        form2.classList.toggle("expand-form");
        form2.classList.toggle("form2");
    }

    // bloque para cerrar formulario2 al clickear la X
    if (event.target && event.target.id === "img-close-form2") {
        input_column.value = '';

        const form2 = event.target.closest("#form2");

        form2.classList.remove('expand-form');
        form2.classList.remove('form2');
    }

    // bloque para mandar datos al servidor cuando se activa click en icono delete column
    if (event.target && event.target.id === "img-delete-column") {
        console.log("activaste el evento click de borrar", event.target);

        // codigo para realizar elimancion en la BD
    }

    // bloque para cambiar el h3 de cada columna
    if (event.target && event.target.id === "h3-id") {
        const h3 = event.target;
        h3.classList.toggle("hidden-title");

        const input_change_h3 = h3.parentNode.querySelector("#input-change-title-id");
        input_change_h3.classList.toggle("hidden-title");

        const input_submit = h3.parentNode.querySelector("#submit-h3-id");
        input_submit.classList.toggle("hidden-title");
    }

    // bloque para tomar el valor del input para cambiar el titulo, y muestra el nuevo
    if (event.target && event.target.id === "submit-h3-id") {
        const h3 = document.getElementById("h3-id");
        // h3.innerHTML = input_h3.value;

        console.log("mandar a la BD cuando conectemos al backend");

        // const input_change_h3 = h3.parentNode.querySelector("#input-change-title-id");


        // h3.classList.toggle("hidden-title");

        // input_change_h3.classList.toggle("hidden-title");

        // const input_submit = h3.parentNode.querySelector("#submit-h3-id");
        // input_submit.classList.toggle("hidden-title");
    }

})

function handleChangeColor(event) {
    if (event.target.id === "i-red") {
        select_task_element(event, '#fb4141');
    } else if (event.target.id === "i-yellow") {
        select_task_element(event, '#f8ef3b');
    } else if (event.target.id === "i-green") {
        select_task_element(event, '#2cf64e');
    } else if (event.target.id === "i-white") {
        select_task_element(event, '#ffffff');
    }

}

// funcion para acceder al evento que clickie y seleccionar color al background
function select_task_element(event, color) {
    const current_element = event.target;

    const task_element = current_element.closest('.task');
    task_element.style.backgroundColor = color;
}

function handleEdit() {
    console.log("activaste el evento editar");
    // codigo para concetarse con el backend y editar
}

function handleDelete() {
    console.log("activaste el evento borrar");
    // codigo para concetarse con el backend y eliminar
}


function die(message) {
    throw new Error(message);
}

