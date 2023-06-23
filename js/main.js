// referencia al tablero completo 
const board = document.querySelector(".board");

// contenedor de las columnas
const card_container = document.querySelector('.column');

// Valores del formulario para agregar tarea
const input_task = document.getElementById('name-task');
const input_description = document.getElementById('description-task');
const input_expiration = document.getElementById('expiration-task');
// const input_in_charge = document.getElementById('in-charge-task');
const input_select = document.querySelector('.select-container');


// Valor del cambio del titulo del h3 en cada columna
const input_h3 = document.getElementById("input-change-title-id");

// Valor del formulario para agregar columna
const input_column = document.getElementById('name-column');


// variable global para pasar el valor de donde se activo el evento click de las columnas
let column_closer = "";
// variable global para mandar informacion de un bloque a otro
let task_closer = "";

// usamos la propagacion para acceder al elemento que se desea, y optimizamos el codigo, ya que no hay que activar un
// event listener cada vez que queremos seleccionar un elemento 
board.addEventListener('click', (event) => {

    // expandir tarea al clickear cada una de ellas
    if (event.target && event.target.id === "taskId" || event.target.tagName === "P" || event.target.id === ".additional-info") {
        // columna de donde se activo el evento añadir tarea
        const parent = event.target;
        const column_close = parent.closest('.task');

        const additional_info = column_close.querySelector('.additional-info');
        additional_info.classList.toggle("expand");

        const div_note = column_close.querySelector('.notes');
        div_note.classList.toggle("show-notes");
    }

    // si se hace click al boton para añadir tarea, mustra el formulario1
    if (event.target && event.target.id === 'button-id') {
        event.preventDefault();

        // columna de donde se activo el evento añadir tarea
        const parent = event.target;
        column_closer = parent.closest('.card-column');


        form1.classList.toggle("expand-form");

        // ocultar boton editar
        form1.querySelector("#submit-edit-id-task").classList.add("hidden-title");
        // mostrar boton de añadir tarea, borrando la clase hidden
        form1.querySelector("#submit-id-task").classList.remove("hidden-title");
    }

    // agregar tarea a la columna donde corresponda
    if (event.target && event.target.id === "submit-id-task") {
        event.preventDefault();


        fetch('../tasks.json')
            .then(response => response.json())
            .then(data => {
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
                p.className = "title-task";
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
                text_description_p.className = 'text-description';

                const in_charge_p = document.createElement('p');
                in_charge_p.className = 'users-in-charge';
                in_charge_p.textContent = 'Encargado: ';

                list_users = [];
                // recorre la etiqueta select, y si fue seleccionada agrega el valor en la variable y en el array para mandar al JSON
                for (let i = 0; i < input_select.options.length; i++) {
                    if (input_select.options[i].selected) {
                        users_selected = input_select.options[i];
                        in_charge_p.textContent += users_selected.text + ', ';

                        list_users.push(parseInt(users_selected.value));
                    }
                }
                // borrar la coma de la última palabra
                in_charge_p.textContent = in_charge_p.textContent.slice(0, -2);


                const estimated_hours_p = document.createElement('p');
                estimated_hours_p.className = 'expiration';
                estimated_hours_p.textContent = 'Vencimiento: ' + input_expiration.value;

                // Añadir los elementos p al div con info adicional
                additional_info_div.appendChild(description_p);
                additional_info_div.appendChild(in_charge_p);
                additional_info_div.appendChild(estimated_hours_p);
                description_p.appendChild(text_description_p);

                // Añadir div adicional al div principal
                div.appendChild(additional_info_div);


                // bloque para agregar notas a la tarea
                const add_notes = document.createElement('div');
                add_notes.className = "notes";

                const p_title_note = document.createElement('p');
                p_title_note.className = "p-title-note";
                p_title_note.textContent = "Notas:";

                add_notes.appendChild(p_title_note);

                const div_content_notes = document.createElement('div');
                div_content_notes.className = "content-notes";

                add_notes.appendChild(div_content_notes);

                const p_note = document.createElement('p');
                p_note.textContent = "";

                div_content_notes.appendChild(p_note);

                const label_notes = document.createElement('label');
                label_notes.htmlFor = "notes";
                label_notes.textContent = "Añadir Notas:";

                add_notes.appendChild(label_notes);

                const input_notes = document.createElement('input');
                input_notes.className = "input-note";
                input_notes.id = "input-note-id";
                input_notes.name = "notes";
                input_notes.type = "text";

                add_notes.appendChild(input_notes);

                const button_notes = document.createElement('button');
                button_notes.className = "btn-form submit";
                button_notes.id = "submit-note";
                button_notes.type = "submit";
                button_notes.textContent = "Añadir Nota";

                add_notes.appendChild(button_notes);

                div.appendChild(add_notes);


                // Añadir el div principal a la columna de tareas
                column_closer.appendChild(div);

                // cerrar el formulario
                form1.classList.toggle("expand-form");


                // posición de la columna
                const position = column_closer.dataset.position;
                const current_date = get_current_date();

                // construyendo el json para mandarlo al servidor
                data.columnas[position].tarjetas.push({
                    "id": 78787, // cuando haya conexión a la bd aca va null, y desde SQL le pone el ID
                    "titulo": input_task.value,
                    "descripcion": input_description.value,
                    "creadaEl": current_date,
                    "actualizadaEl": current_date,
                    "creadaPor": 1, // se necesita autenticacion para saber quien creo la tarea
                    "actualizadaPor": 1,
                    "posicion": parseInt(position),
                    "usuarios": list_users,
                    "vencimiento": input_expiration.value,
                    "color": "#ffffff",
                    "notas": []
                });

                console.log(data);

                const result = send_json_server(data, 'http://servidor.php');

                // si se pudo enviar los datos, elimina el elemento del HTML,
                // por el momento sacar el if hasta que se haga la conexión y funcione correctamente
                // if (result) {
                // console.log("se enviaron los datos con éxito");
                // } else {
                // console.log("No se puedo cambiar el color");
                // }

                // Borrar campo input una vez agregada la tarea
                input_task.value = "";
                input_description.value = "";
                input_expiration.value = "";
                input_select.value = "";


            })
            .catch(error => {
                console.error('Error al cargar el JSON: ', error);
            });


    }

    // bloque para editar la tarea y mostrarla en el HTML
    if (event.target && event.target.id === "submit-edit-id-task") {
        event.preventDefault();

        // id de la tarea a modificar
        const id_task = task_closer.querySelector('.p-edit').id;

        fetch('../tasks.json')
            .then(response => response.json())
            .then(data => {
                for (column of data.columnas) {
                    for (card of column.tarjetas) {
                        if (id_task == card.id) {
                            // selecciona la etiqueta mas cerca con esa clase
                            const p_task = task_closer.querySelector('.title-task');
                            // muestra el nuevo valor en el html
                            p_task.textContent = input_task.value;
                            // manda el nuevo valor al json
                            card.titulo = input_task.value;

                            const p_description = task_closer.querySelector('.text-description');
                            // muestra el nuevo valor en el html
                            p_description.textContent = input_description.value;
                            // manda el nuevo valor al json
                            card.descripcion = input_description.value;

                            const expiration = task_closer.querySelector('.expiration');
                            // muestra el nuevo valor en el html
                            expiration.textContent = 'Vencimiento: ' + input_expiration.value;
                            // manda el nuevo valor al json
                            card.vencimiento = input_expiration.value;

                            let users_in_charge = task_closer.querySelector('.users-in-charge');
                            users_in_charge.textContent = ' Encargado/s: ';

                            // array para guardar los usuarios encargos a la tarea
                            const list_users = [];
                            // recorre todas las opciones y las deselecciona, para que no queden seteadas 
                            for (var i = 0; i < input_select.options.length; i++) {
                                if (input_select.options[i].selected) {
                                    users = parseInt(input_select.options[i].value);
                                    list_users.push(users);
                                    users_in_charge.textContent += input_select.options[i].textContent + ', ';
                                }
                            }
                            card.usuarios = list_users;
                            // borrar la ultima coma de los usuarios
                            users_in_charge.textContent = users_in_charge.textContent.slice(0, -2);

                            form1.classList.toggle("expand-form");

                            console.log(data);
                            const result = send_json_server(data, 'http://servidor.php');
                        }

                    }
                }

            })
            .then(() => {
                input_task.value = "";
                input_description.value = "";
                input_expiration.value = "";
                input_select.value = "";
            })
            .catch(error => {
                console.error('Error al cargar el JSON: ', error);
            });


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

        // cambia la clase para que se oculte el div dinámico
        const container_functions = i_color.closest(".container-functions");
        container_functions.classList.toggle("hidden");
    }

    if (event.target && event.target.className === "p-delete" || event.target.className === "p-edit") {
        const p_edit = event.target;

        // cambia la clase para que se oculte el div dinámico
        const container_functions = p_edit.closest(".container-functions");
        container_functions.classList.toggle("hidden");
    }

    // Evento para cerrar formulario1 al clickear X
    if (event.target && event.target.id === "close-form" || event.target.id === "img-close-form") {
        input_task.value = "";
        input_description.value = "";
        input_expiration.value = "";

        const parent = event.target.closest("#form1");
        parent.classList.remove("expand-form");
    }

    // Al hacer click al boton de añadir columna, intercambia la clase para mostrar el formulario
    if (event.target && event.target.id === "submit-id-column") {
        event.preventDefault();

        // como estoy en el mismo nivel de form2, accedo al padre, y luego selecciono el form2
        const element_parent = event.target;
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
        h3_column.className = 'title-column';
        h3_column.textContent = input_column.value;

        const button = document.createElement('button');
        button.className = "btn-form add-task";
        button.id = "button-id";
        button.type = "submit";
        button.textContent = "Añadir Tarea +";

        div_column.appendChild(img);
        div_column.appendChild(h3_column);
        div_column.appendChild(button);
        card_container.appendChild(div_column);

        input_column.value = "";

        const form2 = event.target.closest("#form2");

        form2.classList.toggle("expand-form");
        form2.classList.toggle("form2");
    }

    // formulario para agregar nota en la tarea
    if (event.target && event.target.id === "submit-note") {
        event.preventDefault();

        const parent = event.target;
        const column_close = parent.closest('.task');

        const div_note = column_close.querySelector('.content-notes');

        // obtiene el valor del input para luego mostrarlo dentro del div
        const value_input = column_close.querySelector('.input-note');

        const p_note = document.createElement('p');
        p_note.textContent = value_input.value;


        div_note.appendChild(p_note);

        value_input.value = "";

        // agregarlo en el JSON y mandarlo a la URL de php para 
        // guardarlo en la base de datos
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


});

function handleChangeColor(event) {
    let color_task = "";
    if (event.target.id === "i-red") {
        color_task = '#fb4141';
    } else if (event.target.id === "i-yellow") {
        color_task = '#f8ef3b';
    } else if (event.target.id === "i-green") {
        color_task = '#2cf64e';
    } else if (event.target.id === "i-white") {
        color_task = '#ffffff';
    }

    fetch('../tasks.json')
        .then(response => response.json())
        .then(data => {
            const container_functions = event.target.closest('.container-functions');

            const p_edit = container_functions.querySelector('.p-edit');

            const p_edit_id = parseInt(p_edit.id);

            for (const column of data.columnas) {
                for (const card of column.tarjetas) {
                    // si el id de la tarjeta coincide con el id de la tarjeta a cambiar el color
                    // cambia el color de la tarjeta al indicado
                    if (card.id === p_edit_id) {
                        card.color = color_task;
                        break;
                    }
                }
            }
            console.log(data);
            const result = send_json_server(data, 'http://servidor.php');

            // si se pudo enviar los datos, elimina el elemento del HTML,
            // por el momento sacar el if hasta que se haga la conexión y funcione correctamente
            // if (result) {
            // cambiar color de la tarea en el HTML
            select_task_element(event, color_task);
            // } else {
            // console.log("No se puedo cambiar el color");
            // }
        })
        .catch(error => {
            console.error('Error al cargar el JSON: ', error);
        });

}

// funcion para acceder al evento que clickie y seleccionar color al background
function select_task_element(event, color) {
    const current_element = event.target;

    const task_element = current_element.closest('.task');
    task_element.style.backgroundColor = color;
    return color;
}

function handleEdit(event) {
    event.preventDefault();

    // columna de donde se activo el evento añadir tarea
    const parent = event.target;
    // tarea donde se edito 
    task_closer = parent.closest('.task');


    fetch('../tasks.json')
        .then(response => response.json())
        .then(data => {
            const container_functions = event.target.closest('.container-functions');

            const p_edit = container_functions.querySelector('.p-edit');

            // cambia de string a integer
            const p_edit_id = parseInt(p_edit.id);

            for (const column of data.columnas) {
                for (const card of column.tarjetas) {

                    if (card.id === p_edit_id) {
                        // me trae el fomrulario del html, asi lo edito y lo vuelvo a mostrar al usuario
                        const form_1 = document.getElementById("form1");

                        // ocultar boton de añadir tarea
                        form_1.querySelector("#submit-id-task").classList.add("hidden-title");
                        // mostrar boton editar, borrando la clase de ocultar
                        form1.querySelector("#submit-edit-id-task").classList.remove("hidden-title");


                        // setea los valores del formulario para editar cada campo
                        const name_task = form_1.elements['task'];
                        name_task.value = card.titulo;

                        const description = form_1.elements['description'];
                        description.value = card.descripcion;

                        const expiration = form_1.elements['expiration'];
                        expiration.value = change_date_format(card.vencimiento);

                        const selected_options = form_1.querySelector('.select-container');

                        // recorre todas las opciones y las deselecciona, para que no queden seteadas 
                        for (let i = 0; i < selected_options.options.length; i++) {
                            selected_options.options[i].selected = false;
                        }

                        // recorre los usuarios que estan asociados a la tarea
                        for (user_in_charge of card.usuarios) {
                            // Recorre las opciones y selecciona la deseada
                            for (let i = 0; i < selected_options.options.length; i++) {
                                if (selected_options.options[i].value == user_in_charge) {
                                    selected_options.options[i].selected = true;
                                }
                            }
                        }
                        break;
                    }
                }
            }
        })
        .catch(error => {
            console.error('Error al cargar el JSON: ', error);
        });




    form1.classList.toggle("expand-form");
}

function handleDelete(event) {
    // id de la tarea para eliminar
    let task_id = event.target.id;

    // cambio el id que es un string a decimal
    task_id = parseInt(task_id);

    fetch('../tasks.json')
        .then(response => response.json())
        .then(data => {
            // crear nuevo JSON para mandar a la URL
            const new_json = {
                usuarios: data.usuarios,
                columnas: data.columnas.map(columna => ({
                    ...columna,
                    tarjetas: columna.tarjetas.filter(tarjeta => {
                        return tarjeta.id !== task_id;
                    })
                }))
            };

            const result = send_json_server(new_json, 'http://servidor.php');

            // si se pudo enviar los datos, elimina el elemento del HTML,
            // por el momento sacar el if hasta que se haga la conexión y funcione correctamente
            // if (result) {
            // eliminar elemento del HTML
            const task_to_remove = event.target.closest(".task");
            task_to_remove.remove();
            // } else {
            // console.log("No se puedo eliminar")
            // }
        })
        .catch(error => {
            console.error('Error al cargar el JSON: ', error);
        });
}

// Drag y drop
board.addEventListener("dragstart", (event) => {
    if (event.target && event.target.id === "taskId" && event.target.draggable) {
        const task = event.target;

        // cerrar el div que muestra mas opciones a las tareas (editar,eliminar, cambiar de color)
        task.querySelector(".container-functions").classList.remove("hidden");

        task.classList.add("is-dragging");
    }
});

board.addEventListener("dragend", (event) => {
    if (event.target && event.target.id === "taskId" && event.target.draggable) {
        const task = event.target;

        task.classList.remove("is-dragging");
    }
});

board.addEventListener("dragover", (event) => {
    event.preventDefault();

    if (event.target && event.target.id === "todo-column") {
        const zone = event.target;

        const bottom_task = insertAboveTask(zone, event.clientY);

        // busca el elemento que tenga la clase .is-dragging, es decir, que está siendo arrastrado
        const current_task = document.querySelector(".is-dragging");

        if (!bottom_task) {
            zone.appendChild(current_task);
        } else {
            zone.insertBefore(current_task, bottom_task);
        }
    }
});

// Lógica para insertar tarea arriba o abajo de la tarea existente
function insertAboveTask(zone, mouseY) {
    const non_dragging_tasks = zone.querySelectorAll(".task:not(.is-dragging)");

    let closest_task = null;
    let closest_offset = Number.NEGATIVE_INFINITY;

    non_dragging_tasks.forEach((task) => {

        // indica la posición vertical del elemento task 
        const { top } = task.getBoundingClientRect();
        const offset = mouseY - top;

        if (offset < 0 && offset > closest_offset) {
            closest_offset = offset;
            closest_task = task;
        }
    });

    return closest_task;
}

//mostrar cada tarea en su respectiva columna según corresponda
fetch('../tasks.json')
    .then(response => response.json())
    .then(data => {
        // recorrer las tarjetas y generar el HTML para cada una
        for (const column of data.columnas) {
            // crear los elementos HTML para la tarjeta
            const div_card_column = document.createElement('div');
            div_card_column.className = "card-column";
            div_card_column.id = "todo-column";
            div_card_column.dataset.position = column.posicion;

            // Icono para borrar columna
            const img_column = document.createElement('img');
            img_column.className = "img-column";
            img_column.id = "img-delete-column";
            img_column.src = "https://cdn-icons-png.flaticon.com/128/7666/7666109.png";
            img_column.alt = "icono de borrar";

            //agregar los inputs para cambiar los h3 de cada columna
            const h3_column = document.createElement('h3');
            h3_column.className = "title-column";
            h3_column.id = "h3-id";
            h3_column.textContent = column.titulo;

            const button_add_task = document.createElement('button');
            button_add_task.type = "submit";
            button_add_task.className = "btn-form add-task";
            button_add_task.id = "button-id";
            button_add_task.textContent = "Añadir Tarea +";

            // colocando los elementos a las columnas
            div_card_column.appendChild(img_column);
            div_card_column.appendChild(h3_column);
            div_card_column.appendChild(button_add_task);

            card_container.appendChild(div_card_column);

            for (const task of column.tarjetas) {
                // if (column.id === task.id_columna) {
                // Crear elemento div que contiene la tarea
                const div_task = document.createElement("div");
                div_task.className = 'task';
                div_task.style.backgroundColor = task.color;
                div_task.id = 'taskId';
                div_task.draggable = true;

                // Crear boton y div para "ver mas funciones" para las tareas
                const button = document.createElement("button");
                button.className = "button-icon fix";
                button.id = "more-functions";
                button.type = "button";

                const img = document.createElement("img");
                img.id = "img-more-icon";
                img.src = "https://cdn-icons-png.flaticon.com/128/10519/10519044.png";
                img.alt = "icon-delete";

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
                p_edit.id = task.id;
                p_edit.textContent = "Editar";

                div_p_edit.appendChild(p_edit);

                const div_p_delete = document.createElement("div");

                const p_delete = document.createElement("p");
                p_delete.className = "p-delete";
                p_delete.id = task.id;
                p_delete.textContent = "Eliminar";

                div_p_delete.appendChild(p_delete);

                div_container_functions.appendChild(div_change_color);
                div_container_functions.appendChild(div_p_edit);
                div_container_functions.appendChild(div_p_delete);

                div_task.appendChild(button);

                // Crear elemento p dentro el div
                const p = document.createElement('p');
                p.className = "title-task";
                p.textContent = task.titulo;

                // Añadir elemento p al div
                div_task.appendChild(p);

                // Crear elemento div con información adicional dentro del otro div
                const additional_info_div = document.createElement('div');
                additional_info_div.className = 'additional-info';

                // Crear elementos p dentro del div con info adicional
                const description_p = document.createElement('p');
                description_p.textContent = 'Descripción de la tarea: ';

                const text_description_p = document.createElement('p');
                text_description_p.className = 'text-description';
                text_description_p.textContent = task.descripcion;

                const in_charge_p = document.createElement('p');
                in_charge_p.textContent = "Encargado/s: ";
                in_charge_p.className = 'users-in-charge';

                // recorre el objeto encargado, e indica el nombre del id que esta encargado la tarea
                for (const index in task.usuarios) {
                    for (const users of data.usuarios) {
                        if (task.usuarios[index] === users.id) {
                            in_charge_p.textContent += users.nombre + ', ';
                        }
                    }
                }
                // borrar la ultima coma de los usuarios
                in_charge_p.textContent = in_charge_p.textContent.slice(0, -2);

                const estimated_hours_p = document.createElement('p');
                estimated_hours_p.className = 'expiration';
                estimated_hours_p.textContent = 'Vencimiento: ' + change_date_format(task.vencimiento);

                // añadir los elementos p al div con info adicional
                additional_info_div.appendChild(description_p);
                additional_info_div.appendChild(in_charge_p);
                additional_info_div.appendChild(estimated_hours_p);
                description_p.appendChild(text_description_p);

                // añadir div adicional al div principal
                div_task.appendChild(additional_info_div);


                // bloque para agregar notas a la tarea
                const add_notes = document.createElement('div');
                add_notes.className = "notes";

                const p_title_note = document.createElement('p');
                p_title_note.className = "p-title-note";
                p_title_note.textContent = "Notas:";

                add_notes.appendChild(p_title_note);

                const div_content_notes = document.createElement('div');
                div_content_notes.className = "content-notes";

                add_notes.appendChild(div_content_notes);

                for (const notes of task.notas) {
                    const p_note = document.createElement('p');
                    p_note.textContent = notes.nota;

                    div_content_notes.appendChild(p_note);
                }

                const label_notes = document.createElement('label');
                label_notes.htmlFor = "notes";
                label_notes.textContent = "Añadir Notas:";

                add_notes.appendChild(label_notes);

                const input_notes = document.createElement('input');
                input_notes.className = "input-note";
                input_notes.id = "input-note-idddd";
                input_notes.name = "notes";
                input_notes.type = "text";

                add_notes.appendChild(input_notes);

                const button_notes = document.createElement('button');
                button_notes.className = "btn-form submit";
                button_notes.id = "submit-note";
                button_notes.type = "submit";
                button_notes.textContent = "Añadir Nota";

                add_notes.appendChild(button_notes);

                div_task.appendChild(add_notes);

                // añadir la tarea al contenedor de la columna, según corresponda
                div_card_column.appendChild(div_task);
                // }
            }
        }
    })
    .catch(error => {
        console.error('Error al cargar el JSON: ', error);
    });

function die(message) {
    throw new Error(message);
}

// función para mandar el JSON a al servidor
function send_json_server(data, url) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            // Hacer algo con los datos de la respuesta
            console.log(data, "la consulta se realizó con éxito");
            return true;
        })
        .catch(error => {
            // Manejar errores de la petición
            console.error('No fue posible realizar la acción, vuelva a intertarlo más tarde', error);
            return false;
        });
}


// accede al json y muestra los usuarios disponibles en el formulario para seleccionar
const select_in_charge = document.createElement("select");

fetch('../tasks.json')
    .then(response => response.json())
    .then(data => {
        // selecciono elemento del documento HTML
        const select_container = document.querySelector(".select-container");

        // accedo a la bd y muestro los usuarios disponibles
        for (const users of data.usuarios) {
            //crear opciones
            const options = document.createElement("option");
            options.value = users.id;
            options.text = users.nombre;

            select_container.appendChild(options);
        }

        const result = send_json_server(data, 'http://servidor.php');

        // si se pudo enviar los datos, elimina el elemento del HTML,
        // por el momento sacar el if hasta que se haga la conexión y funcione correctamente
        // if (result) {

        // } else {
        // console.log("No se puedo cambiar el color");
        // }
    })
    .catch(error => {
        console.error('Error al cargar el JSON: ', error);
    });


// cambia el formato de la fecha , output YYYY-MM-dd
function change_date_format(input_date) {
    // parsear la fecha
    const date = new Date(input_date);

    // obtener los componentes de la fecha
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    // formatear la fecha en el nuevo formato "yyyy-MM-dd"
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
}

// obtiene la fecha actual
function get_current_date() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1; // Los meses en JavaScript comienzan desde 0
    const year = date.getFullYear();

    // asegurarsee de que los valores tengan todos los dígitos
    if (day < 10) {
        day = '0' + day;
    }

    if (month < 10) {
        month = '0' + month;
    }

    // contruyendo el string
    const current_date = year + '-' + month + '-' + day;
    return current_date;
}