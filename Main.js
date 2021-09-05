const menubtn = document.querySelector(".menu");
const menu = document.querySelector(".hamenu");
const link = document.querySelectorAll(".toplist")
const btn = document.querySelector(".sub")

menubtn.addEventListener ("click", function(){
    menu.classList.toggle("showmenu");
});

link.forEach((item) => {
    item.addEventListener("click", () => {
        menu.classList.remove("showmenu")  
    })
})

btn.addEventListener("click", function(){
    menu.classList.remove("showmenu")
})