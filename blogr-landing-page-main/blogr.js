const menudiv = document.querySelector(".menu")
const menubtn = document.querySelector(".menubtn")
const closebtn = document.querySelector(".closebtn")
const connectbtn = document.querySelector(".menulink3")
const submenubtn = document.querySelector(".submenu")
const all = document.querySelectorAll("#linkid")
const submenulink = document.querySelectorAll(".submenulink")


menubtn.addEventListener("click", function () {
    menudiv.classList.toggle("menutoggle")
    menubtn.classList.toggle("menubtntoggle")
    closebtn.classList.toggle("closebtntoggle")
    
})

closebtn.addEventListener("click", function () {
    menudiv.classList.toggle("menutoggle")
    menubtn.classList.toggle("menubtntoggle")
    closebtn.classList.toggle("closebtntoggle")
    
})


connectbtn.addEventListener("click", function () {
    submenubtn.classList.toggle("submenutoggle")
})

all.forEach(el => {
    el.addEventListener("click", function () {
        menudiv.classList.toggle("menutoggle")
        menubtn.classList.toggle("menubtntoggle")
        closebtn.classList.toggle("closebtntoggle")
    })

});


submenulink.forEach(element => {
    element.addEventListener("click", function () {
        submenubtn.classList.toggle("submenutoggle")
    })
});
