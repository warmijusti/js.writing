const openNav = document.getElementById("open");
const closeNav = document.getElementById("close");
const container = document.querySelector(".container");

openNav.addEventListener("click", () => container.classList.add("show-nav"));

closeNav.addEventListener("click", () =>
  container.classList.remove("show-nav")
);
