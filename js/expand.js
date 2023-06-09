
const allBoard = document.querySelector('.board');

allBoard.addEventListener('click', (event) => {
    if (event.target && event.target.id === "taskId" || event.target.tagName === "P" || event.target.tagName === "DIV") {
        // columna de donde se activo el evento añadir tarea
        const parent = event.target;
        column_close = parent.closest('.task');

        const additional_info = column_closer.querySelector('.additional-info');
        additional_info.classList.toggle("expand");
    }
})