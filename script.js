var tasks = [];

var taskInput = document.getElementById("taskInput");
var taskList  = document.getElementById("taskList");

function addTask(){
    var taskText = taskInput.value.trim();

    if (taskText === "") return;

    tasks.push(taskText);

    taskInput.value = "";
    displayTaskList();
}

function removeTask(index){
    tasks.splice(index,1)

    displayTaskList();
}

function displayTaskList(){
    taskList.innerHTML = "";

    for(var i = 0; i < tasks.length; i++ ){
        var taskText = tasks[i];
        var listItem = document.createElement("li");

        listItem.innerHTML = /*'<input type="checkbox""</input>'+*/ taskText + ' <button class="remove-button" onclick="removeTask('+ i + ')">Remove</button>';

        taskList.appendChild(listItem);
    }
}