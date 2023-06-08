// const drag = document.querySelectorAll(".task");
// const drop = document.querySelectorAll(".card-column");

const board2 = document.querySelector('.board');


board2.addEventListener("dragstart", (event) => {
    if (event.target && event.target.id === "taskId" && event.target.draggable) {
        const task = event.target;

        // cerrar el div que muestra mas opciones a las tareas (editar,eliminar, cambiar de color)
        task.querySelector(".container-functions").classList.remove("hidden");

        task.classList.add("is-dragging");
    }
})

board2.addEventListener("dragend", (event) => {
    if (event.target && event.target.id === "taskId" && event.target.draggable) {
        const task = event.target;

        task.classList.remove("is-dragging");
    }
})

board2.addEventListener("dragover", (event) => {
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
})


// drop.forEach((zone) => {
//     zone.addEventListener("dragover", (event) => {
//         event.preventDefault();

//         const bottom_task = insertAboveTask(zone, event.clientY);

//         // busca el elemento que tenga la clase .is-dragging, es decir, que está siendo arrastrado
//         const current_task = document.querySelector(".is-dragging");

//         if (!bottom_task) {
//             zone.appendChild(current_task);
//         } else {
//             zone.insertBefore(current_task, bottom_task);
//         }
//     });
// });


// drag.forEach((task) => {
//     task.addEventListener("dragstart", () => {
//         // cerrar el div que muestra mas opciones a las tareas (editar,eliminar, cambiar de color)
//         task.querySelector(".container-functions").classList.remove("hidden");

//         task.classList.add("is-dragging");
//     });
//     task.addEventListener("dragend", () => {
//         task.classList.remove("is-dragging");
//     });
// });

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
