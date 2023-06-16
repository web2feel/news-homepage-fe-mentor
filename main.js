import './style.scss'

let openNav = document.querySelector(".openNav")
let closeNav = document.querySelector(".closeNav")

openNav.addEventListener("click", () => {
  document.body.classList.add("active")
})

closeNav.addEventListener("click", () => {
  document.body.classList.remove("active")
})