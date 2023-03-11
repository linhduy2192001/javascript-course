const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");
[...tabItems].forEach((item) => item.addEventListener("click", handleClickTab))
function handleClickTab (ev) {
    [...tabItems].forEach(item => item.classList.remove("active"))
    ev.target.classList.add("active")
    const tabNumber = ev.target.dataset.tab;
    [...tabContents].forEach(item => {
        item.classList.remove("active")
        if (item.getAttribute("data-tab") === tabNumber) {
            item.classList.add("active")
        }
    })
}