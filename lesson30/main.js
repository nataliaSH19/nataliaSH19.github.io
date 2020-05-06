//task1
let textArea = document.getElementById("textArea"),
  someText = document.getElementById("someText");
document.body.onkeydown = keyHandler;

function keyHandler(e) {
  if (e.ctrlKey && (e.code === "KeyS" || e.code === "KeyE")) {
    e.preventDefault();
    if (e.code === "KeyS") {
      if (textArea.style.display) {
        textArea.style.display = "";
        someText.style.display = "block";
        someText.textContent = textArea.value;
      }
    } else {
      if (!textArea.style.display) {
        textArea.style.display = "block";
        someText.style.display = "none";
        textArea.value = someText.textContent;
      }
    }
  }
  if (e.code === "Escape" && textArea.style.display) {
    textArea.style.display = "";
    someText.style.display = "block";
  }
}
