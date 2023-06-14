let draggingElement = null;

function dragStart(event) {
  draggingElement = event.target.closest(".listItem");
  draggingElement.classList.add("dragging");
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const targetElement = event.target.closest(".listItem");
  const parent = targetElement.parentNode;

  if (draggingElement !== targetElement) {
    const targetRect = targetElement.getBoundingClientRect();
    const draggingRect = draggingElement.getBoundingClientRect();

    if (draggingRect.top < targetRect.top) {
      parent.insertBefore(draggingElement, targetElement.nextSibling);
    } else {
      parent.insertBefore(draggingElement, targetElement);
    }
  }

  setTimeout(() => {
    draggingElement.classList.remove("dragging");
  }, 300);
}

function toggleButton(element) {
  element.classList.toggle("on");
}

function toggleEditMode(button) {
  const section = button.closest(".listItem");
  const input = section.querySelector("input");
  const editButton = section.querySelector(".editButton");
  const saveButton = section.querySelector(".saveButton");

  if (input.disabled) {
    // Enable edit mode
    input.disabled = false;
    input.focus();
    editButton.style.display = "none";
    saveButton.style.display = "inline-block";
  } else {
    // Save changes
    input.disabled = true;
    editButton.style.display = "inline-block";
    saveButton.style.display = "none";
  }
}

function toggleDescription(button) {
  const section = button.closest(".listItem");
  const input = section.querySelector("input");
  const description = section.querySelector(".description");
  const previousPlaceholder = input.getAttribute("previous-placeholder");

  if (input.placeholder === description.innerText)
    input.placeholder = previousPlaceholder;
  else{
    input.placeholder = description.innerText;
  } 
}
