const input = document.getElementById("usertext")
const output = document.getElementById("output")
const box = document.querySelector(".output")

if (typeof(Storage) !== "undefined") {

function save(){
				localStorage.setItem("user", input.value)
				input.value =""
				alert("Already saved! :)")
}

function load(){
				document.getElementById("output").innerHTML= localStorage.getItem("user")
				box.classList.add("outputtoggle")
}
}else{ alert("Browser is not supported")
}





