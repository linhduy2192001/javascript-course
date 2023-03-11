const toggle = document.querySelector(".menu-toggle")
const menu = document.querySelector(".menu")

toggle.addEventListener("click", handleToggleMenu)

function handleToggleMenu(ev) {
    ev.target.classList.toggle("fa-bars")
    ev.target.classList.toggle("fa-times")
    menu.classList.toggle("is-show")
}

document.addEventListener("click", handleClickOutMenu)
function handleClickOutMenu(ev) {
    console.log('ev.target', ev.target)
    if (!menu.contains(ev.target) && !ev.target.matches(".menu-toggle")) {
        menu.classList.remove("is-show")
        toggle.classList.remove("fa-times")
        toggle.classList.add("fa-bars")
    }
}