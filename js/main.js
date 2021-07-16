const search = document.getElementsByClassName("search");
search[0].style.display = "none";

function hideFab() {
  if ((writeTasks[0].style.display = "none")) {
    writeTasks[0].style.display = "block";
    addTaskButton[0].style.display = "none";
  }
}
function realTime() {
  const date = new Date();
  const dateHour = date.getHours();
  const dateMin = date.getMinutes();
  const dateSec = date.getSeconds();
  return `${dateHour}:${dateMin}:${dateSec}`;
}

function saveToLocal() {
  const taskContent = document.querySelector("#taskText").value;
  return localStorage.setItem(realTime(), taskContent);
}
