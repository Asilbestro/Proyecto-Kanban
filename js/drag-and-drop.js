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
        const cur_task = document.querySelector(".is-dragging");

        if (!bottom_task) {
            zone.appendChild(cur_task);
        } else {
            zone.insertBefore(cur_task, bottom_task);
        }

    });
});

// Lógica para insertar tarea arriba o abajo de la tarea existente
function insertAboveTask(zone, mouseY) {
    const els = zone.querySelectorAll(".task:not(.is-dragging)");

    let closest_task = null;
    let closest_offset = Number.NEGATIVE_INFINITY;

    els.forEach((task) => {
        const { top } = task.getBoundingClientRect();
        const offset = mouseY - top;

        if (offset < 0 && offset > closest_offset) {
            closest_offset = offset;
            closest_task = task;
        }
    });

    return closest_task;
}
