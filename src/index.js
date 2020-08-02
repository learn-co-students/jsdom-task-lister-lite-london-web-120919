
document.addEventListener("DOMContentLoaded", () => {
  //take DOM element and save in a CONST
  const taskDescription = document.querySelector("#new-task-description")
  const myTodo = document.querySelector("#tasks")
  const form = document.querySelector("#create-task-form")
  
  let listArray = []

  form.addEventListener('submit', function (e) {
    e.preventDefault()
     createNewTask()
  })

  function createNewTask() {
    /// select where to show---> create it
    let newTaskToAdd = document.createElement('li')
    // grab the input------ const taskDescription = document.querySelector("#new-task-description")
    newTaskToAdd.innerText = taskDescription.value;
    //show on the HTML----- const myTodo = document.querySelector("#tasks")
    myTodo.appendChild(newTaskToAdd)
  }


  
});

