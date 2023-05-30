const tasks = document.querySelectorAll('.task');

// Itera sobre cada tarea y si se activa el evento clik, le agrega otra clase a la tarea
tasks.forEach((task) => {
    task.addEventListener('click', () => {
        const additional_info = task.querySelector('.additional-info');
        additional_info.classList.toggle("expand");
    });
});
