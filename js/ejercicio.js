let cantidadObras = 0;
let obras = [];
let tiempoTrans = 0;
let costo= 0;

document.querySelector("#cantidadForm").addEventListener("submit",function(e){
	e.preventDefault();
	let valor=document.querySelector("#cantidadObras").value;
	if (valor === ""||valor<=0) {
		document.querySelector("#errorCantidad").innerText = "Ingresa un numero mayor a 0.";
		return;
	}
cantidadObras = Number(valor);
document.querySelector("#cantidadObras").disabled =true;
document.querySelector("#confirmar").disabled =true;

document.querySelector("#nombre").disabled =false;
document.querySelector("#duracion").disabled =false;
document.querySelector("#peso").disabled =false;
document.querySelector("#agregarObra").disabled =false;

	document.querySelector("#contador").innerText="Obra 0 de "+cantidadObras;
});

document.querySelector("#obraForm").addEventListener("submit", function(e){
	e.preventDefault();
	let nombreObra = document.querySelector("#nombre").value;
	let duracionObra = document.querySelector("#duracion").value;
	let pesoObra = document.querySelector("#peso").value;
if (nombreObra===""||duracionObra===""||duracionObra <=0||pesoObra===""||pesoObra<=0) {
	document.querySelector("#errorObra").innerText="Completa todos los campos con datos válidos."
	return;
}
obras.push({nombre:nombreObra, duracion:Number(duracionObra), peso:Number(pesoObra)});

document.querySelector("#listaObras").innerHTML ='<li>'+nombreObra+' - '+duracionObra+' min -'+ pesoObra + ' MB</li>';

document.querySelector("#nombre").value ="";
document.querySelector("#duracion").value ="";
document.querySelector("#peso").value ="";
document.querySelector("#errorObra").innerText ="";

document.querySelector("#contador").innerText ='Obra '+ obras.length + 'de'+cantidadObras;

if (obras.length===cantidadObras) {
	document.querySelector("#nombre").disabled = true;
	document.querySelector("#duracion").disabled = true;
	document.querySelector("#peso").disabled = true;
	document.querySelector("#agregarObra").disabled = true;

	document.querySelector("#tiempoTrans").disabled = false;
	document.querySelector("#costo").disabled = false;
	document.querySelector("#confirmarDatos").disabled = false;
}
});

document.querySelector("#datosForm").addEventListener("submit", function(e){
	e.preventDefault();
	let tiempo = document.querySelector("#tiempoTrans").value;
	let costoValor = document.querySelector("#costo").value;
if (tiempo===""||tiempo<=0||costoValor===""||costoValor<=0) {
	document.querySelector("#errorDatos").innerText='Completa los datos con numeros mayores a 0.'
	return;
}
tiempoTrans=Number(tiempo);
costo = Number(costoValor);

document.querySelector("#tiempoTrans").disabled = true; 
document.querySelector("#costo").disabled = true; 
document.querySelector("#confirmarDatos").disabled = true; 

document.querySelector("#calcular").disabled = false; 
});

document.querySelector("#calcular").addEventListener("click",function(){
	let total=0;
	let mayor=obras[0];

for (let i = 0; i<obras.length; i++) {
	total=total +obras[i].duracion;
	if (obras[i].duracion>mayor.duracion){
		mayor=obras[i];
	}
}
let promedio = total/obras.length;
let tiempoDescarga = mayor.peso*tiempoTrans;

let pesoTotal=0;
for (let i = 0; i<obras.length; i++) {
	pesoTotal = pesoTotal + obras[i].peso;
}
let presupuesto = pesoTotal * costo*12;

document.querySelector("#total").innerText = 'Duracion total:'+total+' min';
document.querySelector("#promedio").innerText = 'Duracion promedio:'+promedio+' min';
document.querySelector("#mayor").innerText = 'Obra mas larga:'+mayor.nombre+'(tiempo de descarga:'+tiempoDescarga+'s)';
document.querySelector("#presupuesto").innerText = 'Presupuesto anual:$'+presupuesto;

document.querySelector("#resultados")
document.querySelector("#calcular").disabled = true;
});
document.querySelector("#reiniciar").addEventListener("click",function(){
	location.reload();
})