document.addEventListener("DOMContentLoaded", () => {
  formElement = document.querySelector("#create-task-form")
  formElement.addEventListener("submit" ,addToDo)

  
  

});

function addToDo(e){
  const tasks = document.querySelector("#tasks")
  const userInput = document.querySelector("#new-task-description")
  const listItem = document.createElement("li")
  const removeButton = document.createElement("button")
  const prioritySelect = document.createElement("select")
  
  new Array("Priority", "High", "Medium", "Low").forEach(function(priority) {
    const priorityOption = document.createElement("option")
    priorityOption.innerText = priority
    prioritySelect.appendChild(priorityOption)
  })
  
  removeButton.innerText = "x"
  removeButton.addEventListener("click", function(e) {
      e.target.parentElement.remove()
  })

  prioritySelect.addEventListener("change", function(e) {
    if (e.target.value == "High"){
      e.target.parentElement.style.color = "Red"
    }

    if (e.target.value == "Medium"){
      e.target.parentElement.style.color = "yellow"
    }

    if (e.target.value == "Low"){
      e.target.parentElement.style.color = "green"
    }
  })
  
  listItem.appendChild(document.createTextNode(userInput.value))
  listItem.appendChild(prioritySelect)
  listItem.appendChild(removeButton)
  
  tasks.appendChild(listItem)
  
  e.preventDefault()
}