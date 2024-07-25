
let input =  document.getElementById("input")
let image = document.querySelector(".image");


const generate= async () =>{

	let qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${input.value}`
	if(qrUrl){
		image.src = qrUrl
	}
	if(!input.value){
		image.src = "qrcode.png"
	}

 input.value = ""
}



window.addEventListener("keypress",(keyCode)=>{
	if(keyCode.charCode== 13){
		generate()
	}
	
})




































