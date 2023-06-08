// Formulario para añadir tarea, y el boton que abre su formulario
const form1 = document.querySelector("#form1");
const button_add_task = document.getElementById("button-id");
const button_column = document.querySelectorAll("#button-id");

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

let column_closer = "";

const board1 = document.querySelector(".board");

// usamos la propagacion para acceder al elemento que se desea, y optimizamos el codigo, ya que no hay que activar un
// event listener cada vez que queremos seleccionar un elemento 
board1.addEventListener('click', (event) => {
    console.log(event.target);
    if (event.target && event.target.id === 'button-id') {
        event.preventDefault();

        // columna de donde se activo el evento añadir tarea
        const parent = event.target;
        column_closer = parent.closest('.card-column');

        // Si se selecciona el boton añadir tarea, va a cerrar el formulario de añadir columna, si estuviese abierto
        form2.classList.remove("expand-form");
        form2.classList.remove("form2");

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


        const li_blue = document.createElement("li");

        const i_blue = document.createElement("i");
        i_blue.className = "fas fa-square white";
        i_blue.id = "i-blue";

        li_blue.appendChild(i_blue);

        div_change_color.appendChild(li_red);
        div_change_color.appendChild(li_yellow);
        div_change_color.appendChild(li_green);
        div_change_color.appendChild(li_blue);

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


        // div.addEventListener("dragstart", () => {
        //     // cerrar el div que muestra mas opciones a las tareas (editar,eliminar, cambiar de color)
        //     div.querySelector(".container-functions").classList.remove("hidden");

        //     div.classList.add("is-dragging");
        // });

        // div.addEventListener("dragend", () => {
        //     div.classList.remove("is-dragging");
        // });

        // div.addEventListener('click', () => {
        //     additional_info_div.classList.toggle("expand");
        // });

        // button.addEventListener('click', (event) => {
        //     event.stopPropagation();

        //     const show_more_functions = button.querySelector(".container-functions");
        //     show_more_functions.classList.toggle("hidden");

        //     const p_change_color = show_more_functions.querySelector(".p-change-color");
        //     const p_edit = show_more_functions.querySelector(".p-edit");
        //     const p_delete = show_more_functions.querySelector(".p-delete");

        //     // remueve el evento de cada opcion de la tarea, para que no se acumule
        //     p_change_color.removeEventListener('click', handleChangeColor);
        //     p_edit.removeEventListener('click', handleEdit);
        //     p_delete.removeEventListener('click', handleDelete);

        //     // escucha el si se hace click a cada una de las opciones de las tareas
        //     p_change_color.addEventListener('click', handleChangeColor);
        //     p_edit.addEventListener('click', handleEdit);
        //     p_delete.addEventListener('click', handleDelete);

        // });

        // Añadir el div principal a la columna de tareas
        column_closer.appendChild(div);

        // Borrar campo input una vez agregada la tarea
        input_task.value = "";
        input_description.value = "";
        input_expiration.value = "";
        input_in_charge.value = "";

        form1.classList.toggle("expand-form");
    }

    if (event.target && event.target.id === "more-function" || event.target.id === "img-more-icon") {
        // container mas funciones de donde se activo
        const icon_more_function = event.target;
        container_functions = icon_more_function.parentNode.querySelector('.container-functions');

        container_functions.classList.toggle("hidden");

        const div_change_color = container_functions.querySelector(".p-change-color");
        const p_edit = container_functions.querySelector(".p-edit");
        const p_delete = container_functions.querySelector(".p-delete");

        console.log(div_change_color);

        // remueve el evento de cada opcion de la tarea, para que no se acumule
        div_change_color.removeEventListener('click', handleChangeColor);
        p_edit.removeEventListener('click', handleEdit);
        p_delete.removeEventListener('click', handleDelete);

        // escucha el si se hace click a cada una de las opciones de las tareas
        div_change_color.addEventListener('click', handleChangeColor);
        p_edit.addEventListener('click', handleEdit);
        p_delete.addEventListener('click', handleDelete);
    }

    if (event.target && event.target.id === "i-red" || event.target.id === "i-yellow" || event.target.id === "i-green" || event.target.id === "i-white") {
        const i_color = event.target;
        const container_functions = i_color.closest(".container-functions");
        container_functions.classList.toggle("hidden");
    }

    // more_function.forEach((icon_more_function) => {
    //     icon_more_function.addEventListener('click', (event) => {
    //         // evitar que se propague, y se expanda la tarjeta con hacer click al boton 
    //         event.stopPropagation();

    //         const show_more_functions = icon_more_function.querySelector(".container-functions");
    //         show_more_functions.classList.toggle("hidden");

    //         console.log(show_more_functions);

    //         const div_change_color = show_more_functions.querySelector(".p-change-color");
    //         const p_edit = show_more_functions.querySelector(".p-edit");
    //         const p_delete = show_more_functions.querySelector(".p-delete");

    //         // remueve el evento de cada opcion de la tarea, para que no se acumule
    //         div_change_color.removeEventListener('click', handleChangeColor);
    //         p_edit.removeEventListener('click', handleEdit);
    //         p_delete.removeEventListener('click', handleDelete);

    //         // escucha el si se hace click a cada una de las opciones de las tareas
    //         div_change_color.addEventListener('click', handleChangeColor);
    //         p_edit.addEventListener('click', handleEdit);
    //         p_delete.addEventListener('click', handleDelete);

    //         // div_change_color.addEventListener('click', (event) => {
    //         //     console.log(event.target);
    //         // })
    //     })
    // });

})


// button_column.forEach((column) => {
//     column.addEventListener('click', (event) => {

//         event.preventDefault();

//         // columna de donde se activo el evento añadir tarea
//         const parent = event.target;
//         column_closer = parent.closest('.card-column');

//         // Si se selecciona el boton añadir tarea, va a cerrar el formulario de añadir columna, si estuviese abierto
//         form2.classList.remove("expand-form");
//         form2.classList.remove("form2");

//         form1.classList.toggle("expand-form");

//     })
// })


form1.addEventListener("submit", (event) => {
    // event.preventDefault();

    // // Crear elemento div que contiene la tarea
    // const div = document.createElement("div");
    // div.className = 'task';
    // div.id = 'taskId';
    // div.draggable = true;

    // // Crear boton y div para "ver mas funciones" para las tareas
    // const button = document.createElement("button");
    // button.className = "button-icon fix";
    // // button.className = "";
    // button.id = "more-functions";
    // button.type = "button";

    // const img = document.createElement("img");
    // img.src = "https://cdn-icons-png.flaticon.com/128/10519/10519044.png";

    // button.appendChild(img);

    // const div_container_functions = document.createElement("div");
    // div_container_functions.className = "container-functions";
    // div_container_functions.id = "container-functions-id";

    // button.appendChild(div_container_functions);

    // const div_change_color = document.createElement("div");
    // div_change_color.className = "p-change-color";
    // div_change_color.id = "color-task";


    // const li_red = document.createElement("li");

    // const i_red = document.createElement("i");
    // i_red.className = "fas fa-square red";

    // li_red.appendChild(i_red);

    // const li_yellow = document.createElement("li");

    // const i_yellow = document.createElement("i");
    // i_yellow.className = "fas fa-square yellow";

    // li_yellow.appendChild(i_yellow);


    // const li_green = document.createElement("li");

    // const i_green = document.createElement("i");
    // i_green.className = "fas fa-square green";

    // li_green.appendChild(i_green);


    // const li_blue = document.createElement("li");

    // const i_blue = document.createElement("i");
    // i_blue.className = "fas fa-square white";

    // li_blue.appendChild(i_blue);

    // div_change_color.appendChild(li_red);
    // div_change_color.appendChild(li_yellow);
    // div_change_color.appendChild(li_green);
    // div_change_color.appendChild(li_blue);

    // const div_p_edit = document.createElement("div");

    // const p_edit = document.createElement("p");
    // p_edit.className = "p-edit";
    // p_edit.textContent = "Editar";

    // div_p_edit.appendChild(p_edit);

    // const div_p_delete = document.createElement("div");

    // const p_delete = document.createElement("p");
    // p_delete.className = "p-delete";
    // p_delete.textContent = "Eliminar";

    // div_p_delete.appendChild(p_delete);


    // div_container_functions.appendChild(div_change_color);
    // div_container_functions.appendChild(div_p_edit);
    // div_container_functions.appendChild(div_p_delete);

    // div.appendChild(button);

    // // Crear elemento p dentro el div
    // const p = document.createElement('p');
    // p.textContent = input_task.value;

    // // Añadir elemento p al div
    // div.appendChild(p);


    // // Crear elemento div con información adicional dentro del otro div
    // const additional_info_div = document.createElement('div');
    // additional_info_div.className = 'additional-info';

    // // Crear elementos p dentro del div con info adicional
    // const description_p = document.createElement('p');
    // description_p.textContent = 'Descripción de la tarea: ';

    // const text_description_p = document.createElement('p');
    // text_description_p.textContent = input_description.value;

    // const in_charge_p = document.createElement('p');
    // in_charge_p.textContent = 'Encargado: ' + input_in_charge.value;

    // const estimated_hours_p = document.createElement('p');
    // estimated_hours_p.textContent = 'Vencimiento: ' + input_expiration.value;

    // // Añadir los elementos p al div con info adicional
    // additional_info_div.appendChild(description_p);
    // additional_info_div.appendChild(in_charge_p);
    // additional_info_div.appendChild(estimated_hours_p);
    // description_p.appendChild(text_description_p);

    // // Añadir div adicional al div principal
    // div.appendChild(additional_info_div);


    // div.addEventListener("dragstart", () => {
    //     // cerrar el div que muestra mas opciones a las tareas (editar,eliminar, cambiar de color)
    //     div.querySelector(".container-functions").classList.remove("hidden");

    //     div.classList.add("is-dragging");
    // });

    // div.addEventListener("dragend", () => {
    //     div.classList.remove("is-dragging");
    // });

    // div.addEventListener('click', () => {
    //     additional_info_div.classList.toggle("expand");
    // });

    // button.addEventListener('click', (event) => {
    //     event.stopPropagation();

    //     const show_more_functions = button.querySelector(".container-functions");
    //     show_more_functions.classList.toggle("hidden");

    //     const p_change_color = show_more_functions.querySelector(".p-change-color");
    //     const p_edit = show_more_functions.querySelector(".p-edit");
    //     const p_delete = show_more_functions.querySelector(".p-delete");

    //     // remueve el evento de cada opcion de la tarea, para que no se acumule
    //     p_change_color.removeEventListener('click', handleChangeColor);
    //     p_edit.removeEventListener('click', handleEdit);
    //     p_delete.removeEventListener('click', handleDelete);

    //     // escucha el si se hace click a cada una de las opciones de las tareas
    //     p_change_color.addEventListener('click', handleChangeColor);
    //     p_edit.addEventListener('click', handleEdit);
    //     p_delete.addEventListener('click', handleDelete);

    // });

    // // Añadir el div principal a la columna de tareas
    // column_closer.appendChild(div);


    // // Borrar campo input una vez agregada la tarea
    // input_task.value = "";
    // input_description.value = "";
    // input_expiration.value = "";
    // input_in_charge.value = "";

    // form1.classList.toggle("expand-form");
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

    const button = document.createElement('button');
    button.className = "btn-form add-task";
    button.id = "button-id";
    button.type = "submit";
    button.textContent = "Añadir Tarea +";

    div_column.appendChild(button);
    div_column.appendChild(h3_column);
    board.appendChild(div_column);

    input_column.value = "";

    form2.classList.toggle("expand-form");
    form2.classList.toggle("form2");

    // columna de donde se activo el evento añadir tarea
    const parent = event.target;
    column_closer = parent.closest('.card-column');
    console.log(column_closer);

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



// more_function.forEach((icon_more_function) => {
//     icon_more_function.addEventListener('click', (event) => {
//         // evitar que se propague, y se expanda la tarjeta con hacer click al boton 
//         event.stopPropagation();

//         const show_more_functions = icon_more_function.querySelector(".container-functions");
//         show_more_functions.classList.toggle("hidden");

//         const div_change_color = show_more_functions.querySelector(".p-change-color");
//         const p_edit = show_more_functions.querySelector(".p-edit");
//         const p_delete = show_more_functions.querySelector(".p-delete");

//         // remueve el evento de cada opcion de la tarea, para que no se acumule
//         div_change_color.removeEventListener('click', handleChangeColor);
//         p_edit.removeEventListener('click', handleEdit);
//         p_delete.removeEventListener('click', handleDelete);

//         // escucha el si se hace click a cada una de las opciones de las tareas
//         div_change_color.addEventListener('click', handleChangeColor);
//         p_edit.addEventListener('click', handleEdit);
//         p_delete.addEventListener('click', handleDelete);

//         // div_change_color.addEventListener('click', (event) => {
//         //     console.log(event.target);
//         // })
//     })
// });


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

// funcion para acceder
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
