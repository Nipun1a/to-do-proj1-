// this is starting of the backend  and hitesh is doing in the to do app so therfore i am doing this 

const fs = require("fs"); // it is doing the file system operations
const filePath = "./data/todo.json"; // this is the path of the file where we are storing the data

const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch (error) {
        return [];
    }
}

const saveTasks = (tasks) => {
    const tasks = loadTasks();
    tasks.push(task);
    saveTasks(tasks);
    console.log("tasks saved successfully");


}


const addTask = (task) => {
    const tasks = loadTasks();
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false
    };
    tasks.push(newTask);
    saveTasks(tasks);
}

const command = process.argv[2];
const argument = process.argv[3]; // this is the command which we are passing from the command line
 // this is the command which we are passing from the command line

if (command === "add") {// this is the loic for adding,deleting and listing the tasks
    addTask(argument);
}else if (command === "list") {
    listTasks();
}
else if (command === "delete") {
    deleteTask(argument);   
}
else {
    console.log("commond not found");
}

// make the function for listing the tasks and deleting the tasks it is your homework  