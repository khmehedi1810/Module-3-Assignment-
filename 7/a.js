function printMousePos(event) {
    alert("clientX: " + event.clientX + " - clientY: " + event.clientY)
  }
  
  document.addEventListener("click", printMousePos);