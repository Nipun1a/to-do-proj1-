// this js file is for the section-19 journey of backend with NodeJs and projects

const fs = require("fs"); // fs is a built-in module in nodejs that allows you to work with the file system
const path = require("path"); // path is a built-in module in nodejs that allows you to work with file and directory paths
const filePath = "./tasks.json";// this is the path to the file where we will store our tasks

const loadTasks = () =>{ // this function will load the tasks from the file and return them as an array
    try{
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error){
        return []
    }
}

const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks)
    fs.writeFileSync(filePath, dataJSON);
};

const addTask = (task) => {
    const tasks = loadTasks()
    tasks.push({task}); // this will add the task to the tasks array
    saveTasks(tasks)
    console.log("Task added:", task)
}

const listTasks = () => {
    const tasks = loadTasks()
    tasks.forEach((task, index) => console.log(`${index + 1}. ${task.task}`));
};

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add"){
    addtask(argument)
}else if (command === 'list'){
    listTasks()
}else if (command === 'remove'){
    removeTask(parseInt (argument))
}else {
    console.log("command not found");
}