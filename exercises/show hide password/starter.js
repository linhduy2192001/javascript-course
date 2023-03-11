window.addEventListener("load", function () {
    const toggle = document.querySelector(".toggle")
    toggle.addEventListener("click", function () {
        const input = this.previousElementSibling
        const inputType = input.getAttribute("type")
        if (inputType === "password") {
            input.setAttribute("type","text")
        } else {
            input.setAttribute("type","password")
            
        }
    })
})