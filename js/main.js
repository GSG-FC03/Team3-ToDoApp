const toDoContainer = document.querySelector("to-do-container");
const button=document.getElementById("startButton");
const input=document.getElementById("name");
document.addEventListener("DOMContentLoaded",displayToDo);

button.addEventListener('click', function (e) { 
   e.preventDefault()
   if (input.value != "") {
       window.location.href = '../html/toDoLists.html'

 let name = input.value
alert(`hello ${name}`);
  } 
   else {
       alert("Please enter a name");
   }
});
const search = document.getElementsByClassName("search");
search[0].style.display = "none";
// Function to disply the text area and hide the FAB button
function hideFab() {
  if ((writeTasks[0].style.display = "none")) {
    writeTasks[0].style.display = "block";
    addTaskButton[0].style.display = "none";
  }
}





// Get te Length of local storage + 1 as a key number
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

  
  // let a = document.createElement("p");
  // a.classList.add("to-do-card-stick");
  
  
  // const toDoSelector = document.createElement("input")
  // toDoCard.classList.add("to-do-selector");

// console.log(localStorage.getItem(4));
// let content = localStorage.getItem(3);
// console.log(content);
// a.innerHTML = content;
// body.appe
                              // document.querySelector(".to-do-container").appendChild(a);
// toDoContainer.appendChild(a);

const toDoCard = document.createElement("div");
  toDoCard.classList.add("to-do-card");
  
  let newContent = localStorage.getItem(localStorage.length);
  const toDoCardStick = document.createElement("p");
  toDoCardStick.classList.add("to-do-card-stick");
  toDoCardStick.innerHTML = newContent;


const toDoSelector = document.createElement("input");
toDoCard.classList.add("to-do-selector");
toDoSelector.type = "checkbok";

console.log(newContent);

document.querySelector(".to-do-container").appendChild(toDoCard);
console.log("333",toDoCardStick);
   toDoCard.appendChild(toDoCardStick); 
     toDoCard.appendChild(toDoSelector)
}

function displayToDo(){
  let content
for (let i =0; i<localStorage.length; i++){
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
const toDoSelector = document.createElement("input");
toDoCard.classList.add("to-do-selector");
toDoSelector.type = "checkbok";


//  toDoCardStick.textContent= localStorage.getItem();
document.querySelector(".to-do-container").appendChild(toDoCard);
console.log("333",toDoCardStick);
   toDoCard.appendChild(toDoCardStick); 
     toDoCard.appendChild(toDoSelector);
  }
}

// localStorage.getItem(localStorage.key(i))






