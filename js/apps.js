function obtenerFechaYHora(){
    let fechaActual = new Date()
// console.log(fechaActual)
// console.log(fechaActual.getDay())

let diasSemanas = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"]
let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Septiembre","Octubre","Noviembre","Diciembre"];

// console.log(diasSemanas[fechaActual.getDay()])

let parrafoFecha = document.getElementById(`fecha`)
let parrafoHora = document.getElementById(`hora`)
parrafoFecha.innerHTML = `${diasSemanas[fechaActual.getDay()]} ${fechaActual.getDate()} de ${meses[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`

let hora = fechaActual.getHours();
let minutos = fechaActual.getMinutes();
let segundos = fechaActual.getSeconds();

if(segundos < 10){
    segundos = `0${segundos}`
}
if(minutos < 10){
    minutos = `0${minutos}`
}
if(hora < 10){
    hora = `0${hora}`
}

parrafoHora.innerHTML = `${hora}: ${minutos}: ${segundos}`

}

window.setInterval(obtenerFechaYHora, 1000)