let btn = gg("#clickme");

let colors = ["red", "green", "blue"];

let i = 0;

btn.addEventListener("click", () => {
  let h1 = gg("#my-h1");
  h1.innerHTML = "This is a new Text";
  h1.style.background = colors[i];

  if (i + 1 >= colors.length) {
    i = 0;
  } else i++;
});

function gg(select) {
  return document.querySelector(select);
}
