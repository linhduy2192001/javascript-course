const accordionHeaders = document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach(item => item.addEventListener("click", handleClickAccordion))

function handleClickAccordion(ev) {
    const content = ev.target.nextElementSibling
    content.style.height = `${content.scrollHeight}px`
    content.classList.toggle("is-active")
    if (!content.classList.contains("is-active")) {
        content.style.height = "0px"
    }
    const icon = ev.target.querySelector(".icon")
    icon.classList.toggle("fa-angle-down")
    icon.classList.toggle("fa-angle-up")
}