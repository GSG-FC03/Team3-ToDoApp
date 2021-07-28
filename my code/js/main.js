//DOM selectors
const FABadd = document.getElementsByClassName("buttons-add")[0];
const FABdone = document.querySelector(".toDo-button");
const toDoContainer = document.querySelector(".toDo");
const toDoTextArea = document.querySelector("#toDo-text");

//Event listeners
FABadd.addEventListener("click", displayTextArea);
FABdone.addEventListener("click", saveToLocal);
document.addEventListener("DOMContentLoaded", displaySavedTask);

//functions
//Get started button function
function logIn() {
  if (nameField.value !== "") {
    window.location.href = "./toDo.html";
    localStorage.setItem("name", nameField.value);
  } else {
    alert("Name is required");
  }
}

function displayTextArea() {
  if ((toDoContainer.style.display = "none")) {
    toDoContainer.style.display = "block";
    FABadd.style.display = "none";
  }
}

function setKey() {
  return localStorage.length;
}
let localKeys = Object.keys(localStorage);
localKeys.sort(function (a, b) {
  return a - b;
});

function saveToLocal() {
  if (toDoTextArea.value !== "") {
    localStorage.setItem(setKey(), toDoTextArea.value);
    let newTask = localStorage.getItem(localStorage.length -1 );
        
    //To do container 
    taskContainer = document.createElement("div");
    taskContainer.classList.add("tasks-container");
    
    //To do selector
    taskSelector = document.createElement("input");
    taskSelector.type = "checkbox";
    taskSelector.classList.add("tasks-checkbox");
    // taskSelector.innerHTML = newTask;

    //To do pargraph
    taskBox = document.createElement("p");
    taskBox.classList.add("tasks-card");
    taskBox.innerHTML = newTask;
    document.querySelector(".tasks").appendChild(taskContainer);
    taskContainer.appendChild(taskSelector);
    taskContainer.appendChild(taskBox);
    toDoTextArea.value="";
    // taskBox.innerText = newTask;
  } else {
    // toDoContainer.style.display = "none";
    // FABadd.style.display = "block";
    alert("Write an task to save it");
  }
}

function displaySavedTask() {
  greeting = document.querySelector(".header-name");
greetingText = `Hi, ${localStorage[0]}`
greeting.innerHTML = greetingText;

  for (let i =1; i<localStorage.length; i++){
    let allTask = localStorage.getItem(localKeys[i]);

     //To do container 
     taskContainer = document.createElement("div");
     taskContainer.classList.add("tasks-container");

    taskSelector = document.createElement("input");
    taskSelector.type = "checkbox";
    taskSelector.classList.add("tasks-checkbox");

    taskBox = document.createElement("p");
    taskBox.classList.add ("tasks-card");
    taskBox.innerHTML = allTask;
    document.querySelector(".tasks").appendChild(taskContainer);
    taskContainer.appendChild(taskSelector); 
    taskContainer.appendChild(taskBox); 
 
}
}
