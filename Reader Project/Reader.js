let words = document.getElementById("userwords").value;

if('speechSynthesis' in window){
	alert("Your browser is supported")
}else{
	alert("Your browser is not supported please try a different browser")
}

function speakFunction() {

	var message = new SpeechSynthesisUtterance()
	message.text = document.getElementById("userwords").value;
	window.speechSynthesis.speak(message)
	document.getElementById("userwords").value = "";

	
}
