let nameField = document.querySelector("#nameField");
let ul = document.querySelector("#nameList");

nameField.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    let name = event.target.value;
    createLi(ul, name);
    event.target.value = "";
  }
});

function createLi(ul, name) {
  let li = document.createElement("li");
  li.className = "list-group-item d-flex";
  li.innerHTML = name;

  let cross = document.createElement("span");
  cross.innerHTML = "x";
  cross.className = "ml-auto";
  cross.style.cursor = "pointer";
  cross.style.color = "red";

  cross.addEventListener("click", function () {
    ul.removeChild(li);
  });

  li.appendChild(cross);
  ul.appendChild(li);
}
