document.addEventListener("DOMContentLoaded", () => {

  const newTaskForm = document.getElementById("create-task-form");
  // const newTaskDesciption = document.getElementById("new-task-description");
  // const newTaskPriority 

  // List where the Todo will be strored
  const newTaskUl = document.getElementById("tasks");

  //attach event listeners
 

  const createNewTask = event => {
    event.preventDefault();
    //so it doesn't try to submit to another page

    //create the element
    const newTaskDescription = document.getElementById("new-task-description"); 
    const newTask = document.createElement('li');
    newTask.innerText = newTaskDescription.value;
    //add the style 

    
    //apend it to ul
    newTaskUl.appendChild(newTask);


  };

  // it has to be after so it can't find 
  newTaskForm.addEventListener("submit", createNewTask);



})