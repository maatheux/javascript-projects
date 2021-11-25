(function main() {
    const saveTasks = () => {
        const divTasks = tasks.querySelectorAll('div');
        const tasksList = [];
        for (let task of divTasks) {
            tasksList.push(task.querySelector('label').innerText);
        }

        const tasksJSON = JSON.stringify(tasksList); // irá salvar a lista em uma string JSON
        localStorage.setItem('tasks', tasksJSON); // irá salvar essa string JSON no local storage do navegador
    };

    const addSavedTasks = () => {
        const savedTasks = localStorage.getItem('tasks'); // pegar os itens no local storage do navegador
        const tasksList = JSON.parse(savedTasks); // jogando os itens na array

        for (let task of tasksList) {
            addNewTask(task);
        }
    };

    const addNewTask = taskInput => {
        let newDiv = createDiv(taskInput);
        tasks.appendChild(newDiv);
        saveTasks();
    };

    const createDiv = msg => {
        let div = document.createElement('div');
        let checkbox = document.createElement('input');
        let label = document.createElement('label');
        let btn = document.createElement('button');
        let divsLength = tasks.querySelectorAll('div');

        div.classList.add('task');
        div.classList.add(`task-${divsLength.length}`);
        checkbox.type = 'checkbox';
        checkbox.id = `option-${divsLength.length}`;
        div.appendChild(checkbox);
        label.setAttribute('label', `option-${divsLength.length}`);
        label.innerText = msg;
        div.appendChild(label);
        btn.classList.add('delete-task');
        btn.innerText = 'Apagar';
        div.append(btn);

        return div;
    };

    const taskInput = document.querySelector('.task-input');
    const addTaskBtn = document.querySelector('.add-task-btn');
    const tasks = document.querySelector('.tasks');

    addTaskBtn.addEventListener('click', () => {
        if (!taskInput.value) {
            alert('Campo em branco. Digite novamente!');
            return;
        }
        let taskInputValue = taskInput.value;
        addNewTask(taskInputValue);
        taskInput.value = '';
        taskInput.focus();
    });

    taskInput.addEventListener('keypress', e => {
        if (e.keyCode === 13) {
            if (!taskInput.value) {
                alert('Campo em branco. Digite novamente!');
                return;
            }
            let taskInputValue = taskInput.value;
            addNewTask(taskInputValue);
            taskInput.value = '';
            taskInput.focus();
        }
    }); //Utilizamos keypress para detectar que tecla foi usado pelo user. No caso o enter é a tecla 13

    tasks.addEventListener('click', e => {
        let element = e.target;
        if (element.classList.contains('delete-task')) {
            tasks.removeChild(element.parentElement);
            saveTasks();
        }
    });

    addSavedTasks();
})();
