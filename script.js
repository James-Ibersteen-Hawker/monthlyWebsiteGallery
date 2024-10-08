window.addEventListener("scroll", myScroll);
window.onload = function startUp() {
  myScroll();
  link();
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

//a future library function?

function link() {
  let linkA = document.getElementsByClassName("linkA");
  let linkB = document.getElementsByClassName("linkB");
  for (let i = 0; i < linkA.length; i++) {
    linkB[i].innerHTML = linkA[i].innerHTML;
  }
}
