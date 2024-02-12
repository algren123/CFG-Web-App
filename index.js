// Task array to store tasks
const tasks = [];

// Functions for task manipulation
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const title = taskInput?.value;

  if (title) {
    tasks.push({ title, completed: false });
    renderTasks();
    taskInput.value = "";
  }
}

function deleteTask(index) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Function to render tasks in the DOM
function renderTasks() {
  const taskListElement = document.getElementById("taskList");
  if (taskListElement) {
    taskListElement.innerHTML = "";

    tasks.forEach((task, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
                <div class="item-header">
                  <span>${task.title}</span>
                  <span>
                    ${task.completed ? "Completed" : "Pending"}
                  </span>
                </div>
                <div class="btn-group">
                  <button class="btn toggle-btn" onclick="toggleTask(${index})">Toggle</button>
                  <button class="btn delete-btn" onclick="deleteTask(${index})">Delete</button>
                </div>
            `;
      listItem.className = "task-item";

      taskListElement.appendChild(listItem);
    });
  }
}
