//1. Создать страницу, которая выводит нумерованный список песен:
var playList = [
  {
    author: "LED ZEPPELIN",

    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",

    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "LYNYRD SKYNYRD",

    song: "FREE BIRD",
  },

  {
    author: "DEEP PURPLE",

    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",

    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",

    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",

    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",

    song: "ENTER SANDMAN",
  },
];

var div = document.getElementById("list");
var ol = document.createElement("ol");
div.appendChild(ol);
for (var i = 0; i < playList.length - 1; i++) {
  var li = document.createElement("li");
  li.innerHTML = playList[i].song;
  ol.appendChild(li);
}
//2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.
function OpenWindow() {
  var open = document.getElementById("modalWindow");
  open.style.display = "block";
}
function CloseWindow() {
  var close = document.getElementById("modalWindow");
  close.style.display = "none";
}

//3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.
let node = null;
function NextNode() {
  resetColor();
  if (node == null) {
    let list = document.getElementById("traffic-lights");
    node = list.firstElementChild;
    node.style.opacity = 1;
    return;
  }
  node = node.nextElementSibling;
  console.log(node);
  if (node != null) {
    node.style.opacity = 1;
  }
}
function resetColor() {
  let liList = document.getElementsByClassName("circle");
  for (let i = 0; i < liList.length; i++) {
    liList[i].setAttribute("style", "opacity:0.5");
  }
}
