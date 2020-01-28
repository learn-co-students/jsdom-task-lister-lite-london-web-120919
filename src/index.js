document.addEventListener("DOMContentLoaded", () => {
  let input = document.getElementById("new-task-description")
  let taskArray = []
  let myToDos = document.getElementById("tasks")
  let form = document.getElementById("create-task-form")

  form.addEventListener('submit', e =>  {
    e.preventDefault()
    taskArray.push(input.value)
    e.target.reset()
    toDoList()
  } )

  function toDoList() {
    myToDos.innerHTML = ""
    for (let index = 0; index < taskArray.length; index++) {
      let listItem = document.createElement('li')
      listItem.innerText = `${taskArray[index]}`
      let deleteItem = document.createElement('button')
      deleteItem.innerText = `x`
      deleteItem.class = `delete`
      deleteItem.id = index
      listItem.appendChild(deleteItem)
      myToDos.appendChild(listItem)
    }
  }

  myToDos.addEventListener('click', e => {
    if (e.target.class === 'delete') {
      taskArray.splice(e.target.id, 1)
      toDoList()
      
    }

  })

});
