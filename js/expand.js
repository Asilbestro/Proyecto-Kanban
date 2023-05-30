const tasks = document.querySelectorAll('.task');

// Itera sobre cada tarea y si se activa el evento clik, le agrega otra clase a la tarea
tasks.forEach((task) => {
    task.addEventListener('click', () => {
        const additionalInfo = task.querySelector('.additional-info');
        additionalInfo.classList.toggle("expand");
    });
});

