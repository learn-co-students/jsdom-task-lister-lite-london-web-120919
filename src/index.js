document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskArray = [];
  const input = document.getElementById("new-task-description");
  let myTodos = document.getElementById('tasks')
  let form = document.getElementById("create-task-form")

  form.addEventListener('submit', e => {
    e.preventDefault()
    taskArray.push(input.value)
    e.target.reset()
    toDoList()
  })

  function toDoList() {
    for (let i = 0; i < taskArray.length; i++){
      let listItem = document.createElement('li')
      listItem.innerText = `${taskArray[i]}`
      let deleteItem = document.createElement('button')
      deleteItem.innerHTML = 'x'
      deleteItem.id = 'delete'
      listItem.appendChild(deleteItem)
      myTodos.appendChild(listItem)
    }
  }

  myTodos.addEventListener('click', e => {
      
    if (e.target.id === 'delete'){
      
    }
  })


});
