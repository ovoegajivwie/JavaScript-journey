function generateColor() {
    var color = '#'
    var letter = '0123456789ABCDEF'
    var p = document.getElementById("colorcode")
    var bgcolor = document.querySelector("body")
    var btncolor = document.querySelector("#generator")
    for (let i = 0; i < 6; i++) {
        p.innerHTML = color += letter[Math.floor(Math.random()*16)]
        bgcolor.style.backgroundColor = p.innerHTML
        btncolor.style.backgroundColor = p.innerHTML
    }
    
}