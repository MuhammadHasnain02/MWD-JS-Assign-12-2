// ---------------- Class ----------------
class TodoList {
    constructor() {
        this.tasks = []
    }

    addTask(task) {
        if (task) {
            this.tasks.push(task)
        }
    }

    removeTask(index) {
        this.tasks.splice(index, 1)
    }

    listTasks() {
        return this.tasks
    }
}

// ---------------- Main Logic ----------------
const todo     = new TodoList()
const taskInput = document.getElementById("taskInput")
const addBtn   = document.getElementById("addBtn")
const taskList = document.getElementById("taskList")

// Render Function
function renderTasks() {

    taskList.innerHTML = ""
    todo.listTasks().forEach((task, index) => {

        let li = document.createElement("li")
        li.className = "flex justify-between items-center bg-gray-200 px-3 py-2 rounded-md"

        li.innerHTML = `
            <span>${task}</span>
            <button class="rounded transition duration-500 hover:cursor-pointer hover:scale-105">🗑️</button>
        `

        // Remove button
        li.querySelector("button").addEventListener("click", () => {
            todo.removeTask(index)
            renderTasks()
        });

        taskList.appendChild(li)

    });

}

// Add Task
addBtn.addEventListener("click", () => {
    todo.addTask(taskInput.value)
    taskInput.value = ""
    renderTasks()
});