const drag = document.querySelectorAll(".task");
const drop = document.querySelectorAll(".card-column");

drag.forEach((task) => {
    task.addEventListener("dragstart", () => {
        task.classList.add("is-dragging");
    });
    task.addEventListener("dragend", () => {
        task.classList.remove("is-dragging");
    });
});

drop.forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
        e.preventDefault();

        const bottom_task = insertAboveTask(zone, e.clientY);

        // busca el elemento que tenga la clase .is-dragging, es decir, que está siendo arrastrado
        const current_task = document.querySelector(".is-dragging");

        if (!bottom_task) {
            zone.appendChild(current_task);
        } else {
            zone.insertBefore(current_task, bottom_task);
        }

    });
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
