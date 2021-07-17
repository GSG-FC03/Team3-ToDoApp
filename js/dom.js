// Document Elements
const addTaskButton = document.getElementById("addTask");
const writeTasks = document.getElementsByClassName("writeTasks");
const properties = document.getElementsByClassName("properties");
const submitTask = document.getElementById("saveTask");
// To-Do Container elements
writeTasks[0].style.display = "none";
// Event Listeners
addTaskButton.addEventListener("click", hideFab);
submitTask.addEventListener("click", saveToLocal);
