const menubtn = document.querySelector(".hamenu")
const closebtn = document.querySelector(".close")
const menu = document.querySelector(".menu")
const link = document.querySelectorAll(".link1")

menubtn.addEventListener("click", function () {
    menu.classList.toggle("menutoggle")
})

closebtn.addEventListener("click", function () {
    menu.classList.toggle("menutoggle")
})

link.forEach(element => {
    element.addEventListener("click", function () {
        menu.classList.remove("menutoggle")
    })
});