
  function onReady(){
    let toDos = [];
    let toDoId = 1;
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      //get the text
      let title = newToDoText.value;
      let toDoObj = {
        name: title,
        id: toDoId
      }

      toDoId++;

      toDos.push(toDoObj);
      
      // create a new li
      let newLi = document.createElement('li');
      // create a new input
      let checkbox = document.createElement('input');
      // set the input's type to checkbox
      checkbox.type = "checkbox";

      let deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";

      deleteBtn.addEventListener('click', function(event){
        // this.parentElement represents the button's <li> parent
        toDoList.removeChild(this.parentElement);
      })
      // set the title
      newLi.textContent = title;
      // attach the checkbox to the li
      newLi.appendChild(checkbox);
      // deleteBtn
      newLi.appendChild(deleteBtn);
      // attach the li to the ul
      toDoList.appendChild(newLi);
      //empty the input
      newToDoText.value = '';
    });
  };

window.onload = function () {
  onReady();
};
