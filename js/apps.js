
let fechaActual = new Date()
console.log(fechaActual)
console.log(fechaActual.getDay())

let diasSemanas = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"]
let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Septiembre","Octubre","Noviembre","Diciembre"];

console.log(diasSemanas[fechaActual.getDay()])

let parrafoFecha = document.getElementById(`fecha`)
parrafoFecha.innerHTML = `${diasSemanas[fechaActual.getDay()]} ${fechaActual.getDate()} de ${meses[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`