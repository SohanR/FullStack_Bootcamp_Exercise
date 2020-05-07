let btn = document.getElementById("clickme");

let colors = ["red", "green", "blue"];

let i = 0;

btn.addEventListener("click", () => {
  let h1 = document.getElementById("my-h1");
  h1.innerHTML = "This is a new Text";
  h1.style.background = colors[i];

  if (i + 1 >= colors.length) {
    i = 0;
  } else i++;
});
