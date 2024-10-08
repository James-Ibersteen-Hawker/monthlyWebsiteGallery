window.addEventListener("scroll", myScroll);
window.onload = function startUp() {
  myScroll();
};

function myScroll() {
  let nav = document.getElementById("nav");
  let body = document.body;
  if (scrollY > 50) {
    nav.classList.remove("from");
    nav.classList.add("to");
    // body.classList.remove("Bfrom");
    // body.classList.add("Bto");
  } else {
    nav.classList.remove("to");
    nav.classList.add("from");
    // body.classList.remove("Bto");
    // body.classList.add("Bfrom");
  }
  counter(body);
}

function counter(body) {
  body.setAttribute(
    "style",
    `background: rgb(80,${255 - Math.floor(scrollY / 10) - 100},10);`
  );
}
