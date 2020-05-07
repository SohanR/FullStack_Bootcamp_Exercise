let btn = document.querySelector("#btn");
let pr = document.querySelector("#para");

let isShow = false;

btn.addEventListener("click", () => {
  if (isShow) {
    pr.style.visibility = "hidden";
    isShow = false;
    btn.innerHTML = "Show";
  } else {
    pr.style.visibility = "visible";
    isShow = true;
    btn.innerHTML = "Hide";
  }
});
