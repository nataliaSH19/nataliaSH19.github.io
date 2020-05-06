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
//task2
document.addEventListener("DOMContentLoaded", () => {
  const getSort = ({ target }) => {
    const order = (target.dataset.order = -(target.dataset.order || -1));
    const index = [...target.parentNode.cells].indexOf(target);
    const collator = new Intl.Collator(["en", "ru"], { numeric: true });
    const comparator = (index, order) => (a, b) =>
      order *
      collator.compare(
        a.children[index].innerHTML,
        b.children[index].innerHTML
      );

    for (const tBody of target.closest("table").tBodies)
      tBody.append(...[...tBody.rows].sort(comparator(index, order)));

    for (const cell of target.parentNode.cells)
      cell.classList.toggle("sorted", cell === target);
  };

  document
    .querySelectorAll(".table_sort thead")
    .forEach((tableTH) =>
      tableTH.addEventListener("click", () => getSort(event))
    );
});
//task3
const resizeTable = document.querySelector(".res_table");
const resizeBtn = document.querySelector(".res_btn");
function resize(event) {
  resizeTable.style.width =
    event.clientX - resizeTable.getBoundingClientRect().left + "px";
  resizeTable.style.height =
    event.clientY - resizeTable.getBoundingClientRect().top + "px";
}
function stopResize() {
  document.removeEventListener("mousemove", resize);
}

resizeBtn.addEventListener("mousedown", () => {
  document.addEventListener("mousemove", resize);
});
document.addEventListener("mouseup", stopResize);
