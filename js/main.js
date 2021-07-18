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
}


 const button=document.getElementById("startButton");
const input=document.getElementById("name");

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



