// const tasks = document.querySelectorAll('.task');

const allBoard = document.querySelector('.board');


// // Itera sobre cada tarea y si se activa el evento clik, le agrega otra clase a la tarea
// tasks.forEach((task) => {
//     task.addEventListener('click', () => {
//         const additional_info = task.querySelector('.additional-info');
//         additional_info.classList.toggle("expand");
//     });
// });


allBoard.addEventListener('click', (event) => {
    if (event.target && event.target.id === "taskId" || event.target.tagName === "P" || event.target.id === ".additional-info") {
        // columna de donde se activo el evento añadir tarea
        const parent = event.target;
        const column_close = parent.closest('.task');
        
        const additional_info = column_close.querySelector('.additional-info');
        additional_info.classList.toggle("expand");
    }
})