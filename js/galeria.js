let obras=[
	{	
		titulo:"Big Science",
		imagen:"img/bigScience.jpg",
		año:"1982"
},
	{	
		titulo:"Mister Heartbreak",
		imagen:"img/misterHeartbreak.jpg",
		año:"1984"
},
	{
		titulo:"The Handphone Table",
		imagen:"img/handphoneTable.jpg",
		año:"1978"
},
	{
		titulo:"Violín Tape-bow",
		imagen:"img/tapeBow.jpg",
		año:"1977"
},
	{
		titulo:"Home of the Brave",
		imagen:"img/theBrave.jpg",
		año:"1968"
}
]
function mostrarGaleria(){
	let = html ='';

	for(let i = 0;i<obras.length; i++){
		html=html +'<div class="obras">';
		html=html +'<img src="'+ obras[i].imagen +'"alt="'+ obras[i].titulo+ '">';
		html=html +'<p>'+ obras[i].titulo +'</p>';
		html=html +'<p>'+ obras[i].año +'</p>';
		html=html +'</div>'; 
		}

document.querySelector("#obras").innerHTML = html;
}
mostrarGaleria()

let esGrande=false;

function cambiarTamano() {
	 console.log("boton apretado");
	const imagenes=document.querySelectorAll("#obras img");
	if (esGrande == false) {
		for (let i = 0; i<imagenes.length; i++) {
			imagenes[i].style.width = "18rem";
			imagenes[i].style.height = "18rem";
		}
		esGrande=true;
	}else{
		for (let i = 0; i <imagenes.length; i++) {
			imagenes[i].style.width="10rem";
			imagenes[i].style.height="10rem";
		}
		esGrande=false;
	}
}