const toDoContainer = document.querySelector(".to-do-container");
const button = document.getElementById("startButton");
const input = document.getElementById("name");
const Sayhello = document.querySelector(".headBar");
const Editinput = document.querySelector("#editPlace");
//toDoContainer.addEventListener("click", Checkelement);
document.addEventListener("DOMContentLoaded", displayToDo);

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value != "") {

    
    window.location.href = "../html/toDoLists.html";
    var name = input.value;
    const Hello = document.createElement("h1");
    Hello.innerHTML =  "Hi" + " " + name;
    console.log(Sayhello);
    alert("hello")
    Sayhello.appendChild(Hello);
    
   
    // hello ${name}
    
  } else {
    alert("Please enter a name");
  }
});
//const search = document.getElementsByClassName("search");
//search[0].style.display = "none";
// Function to disply the text area and hide the FAB button
function hideFab() {
  if ((writeTasks[0].style.display = "none")) {
    writeTasks[0].style.display = "block";
    addTaskButton[0].style.display = "none";
  }
}

// Get the Length of local storage + 1 as a key number
function setId() {
  return localStorage.length + 1;
}
// store the value of text area to local storage
function saveToLocal() {
  const taskContent = document.querySelector("#taskText").value;
  localStorage.setItem(setId(), taskContent);
  let localKeys = Object.keys(localStorage);
  localKeys.sort(function (a, b) {
    return a - b;
  });

  const toDoCard = document.createElement("div");
  toDoCard.classList.add("to-do-card");

  let newContent = localStorage.getItem(localStorage.length);
  const toDoCardStick = document.createElement("p");
  toDoCardStick.classList.add("to-do-card-stick");
  toDoCardStick.innerHTML = newContent;

  const toDoSelector = document.createElement("input");
  toDoCard.classList.add("to-do-selector");
  toDoSelector.type = "checkbox";

  console.log(newContent);

  document.querySelector(".to-do-container").appendChild(toDoCard);
  console.log("333", toDoCardStick);
  toDoCard.appendChild(toDoCardStick);
  toDoCard.appendChild(toDoSelector);
}

function displayToDo() {
  let content;
  for (let i = 0; i < localStorage.length; i++) {
    const toDoCard = document.createElement("div");
    toDoCard.classList.add("to-do-card");
    // toDoCard.innerHTML = content;
    //                                                                      //  console.log("555",toDoCard);

    // adding p tag with class name (.to-do-card-stick) to the new div container which has the class name (.to-do-card)
    content = localStorage.getItem(localStorage.key(i));

    const toDoCardStick = document.createElement("p");
    toDoCardStick.classList.add("to-do-card-stick");
    toDoCardStick.innerHTML = content;

    // adding checkbox input with class name (.to-do-selector) to the new div container which has the class name (.to-do-card)
    const toDoSelector = document.createElement("INPUT");
    //toDoSelector.type = "checkbox";
    toDoSelector.setAttribute("type", "checkbox");

    toDoCard.classList.add("to-do-selector");

    //  toDoCardStick.textContent= localStorage.getItem();
    //document.querySelector(".to-do-container").appendChild(toDoCard);
    console.log("333", toDoCardStick);
    toDoCard.appendChild(toDoCardStick);
    toDoCard.appendChild(toDoSelector);
  }
}
/* function Checkelement(element) {
  let targetElement = element.target;
   let value = targetElement.innerHTML;
  editOrDelete(value); 
}


function editOrDelete(lastVlaue) {
  

  Editinput.value =lastVlaue ;
  removeButton.addEventListener("click", function () {
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage[key];
      if (value ==lastVlaue) 
      localStorage.removeItem(key);
    }
  }); 
   const editPlace = document.getElementById("editPlace");
  Edit.addEventListener("click", function () {
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage[key];
      if (value ==lastVlaue) 
      localStorage.setItem(key, editPlace.value);
    }
  }); 
}
 */