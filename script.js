document.addEventListener('DOMContentLoaded', function () { 
    const todoInput = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task-button");
    const todoList = document.getElementById("todo-list");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Render stored tasks when page loads
    tasks.forEach(task => renderTask(task));

    // Check if button exists before adding event listener
    if (addTaskButton) {
        addTaskButton.addEventListener("click", function () {
            const taskText = todoInput.value.trim();
            if (taskText === "") return; // Prevent adding empty tasks

            const newTask = {
                id: Date.now(),
                text: taskText,
                completed: false
            };

            tasks.push(newTask);
            saveTasks();
            renderTask(newTask); // Display the new task in UI
            todoInput.value = ""; // Clear input field
        });
    } else {
        console.error("Error: Add Task Button Not Found!");
    }

    // Function to render a task in the UI
    function renderTask(task) {
        console.log(task.text);
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);
        
        if (task.completed) {
            li.classList.add("completed");  // Add completed class
        }

        li.innerHTML = `
            <span>${task.text}</span>
            <button class="delete-button">Delete</button>
        `;

        // Toggle task completion on click (excluding button clicks)
        li.addEventListener("click", (e) => {
            if (e.target.tagName === "BUTTON") return; // Prevent toggle if delete button is clicked
            task.completed = !task.completed;
            li.classList.toggle("completed");
            saveTasks();
        });

        // Delete button event listener
        li.querySelector('.delete-button').addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent triggering the li click event
            tasks = tasks.filter(t => t.id !== task.id); // Fix filtering logic
            li.remove();
            saveTasks();
        });

        todoList.appendChild(li);
    }

    // Function to save tasks to localStorage
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
});
