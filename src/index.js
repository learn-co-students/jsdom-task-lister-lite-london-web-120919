const taskArray = []
let toDoList = document.querySelector('#tasks')


document.addEventListener("DOMContentLoaded", () => {
  let input = document.querySelector("#new-task-description")
  const form = document.querySelector("#create-task-form")
  let dateField = createInputField()

  form.insertBefore(createPriorityDropdown(), input)
  form.insertBefore(dateField, input)
  form.addEventListener('submit', function(e){
    e.preventDefault()
    let task = input.value
    let date = dateField.value
    let priority = selected
    e.target.reset()
    createToDo(date, task, priority)
    // aaaaargh need to somehow push the selected into the class array - maybe need to construct an element and add this to the array rather than constructing elements later and adding to the dom?
    
  })
})

// create <li> element
function createToDo(date, task, priority) {
  let toDo = document.createElement("li")
  toDo.innerHTML = `Deadline: ${date}, task:${task}`
  toDo.classList = priority
  let deleteButton = createDelete()
  toDo.appendChild(deleteButton)
  taskArray.push(toDo)
  constructList()
}

// put list together
function constructList() {
  toDoList.innerHTML = ""
  for (let index = 0; index < taskArray.length; index++) {
    const element = taskArray[index];
    element.id = index
    applyColor(element)
    toDoList.appendChild(element)
  }
  // sortByPriority()
}


// apply color coding to list elements
function applyColor(element){
  if (element.classList == 1) {
    element.style.color = 'red'
  } else if (element.classList == 2) {
    element.style.color = 'orange'
  } else if (element.classList == 3) {
    element.style.color = 'green'
  }
}

// create delete button
function createDelete(){
    deleteButton = document.createElement("button")
    deleteButton.innerText = "X"
    deleteButton.class = "delete"
    return deleteButton
}

// delete button event listener
tasks.addEventListener('click', function(e) {
  if (e.target.class === "delete") {
    taskArray.splice(e.target.parentElement.id, 1)
    constructList()
  }

})


// create dropdown list for priorities
function createPriorityDropdown(){
  function createDropdown(){
  const dropdown = document.createElement('select')
    dropdown.classList = "priorities"
  const selectPriority = document.createElement('option')
    selectPriority.value = "select"
    selectPriority.innerText = "Select Priority"
  const high = document.createElement('option')
    high.value = "1"
    high.innerText = "High Priority"
  const medium = document.createElement('option')
    medium.value = "2"
    medium.innerText = "Medium Priority"
  const low = document.createElement('option')
    low.value = "3"
    low.innerText = "Low Priority"
  dropdown.add(selectPriority)
  dropdown.add(high)
  dropdown.add(medium)
  dropdown.add(low)
  return dropdown
  }
  let priorities = createDropdown()
  priorities.addEventListener('change', function(e){
    selected = e.target.value
  })
  return priorities
}

// new input field
function createInputField() {
  deadlineField = document.createElement("input")
  deadlineField.type = "text"
  deadlineField.placeholder = "Due By"
  return deadlineField
}

