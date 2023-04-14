function obtenerFechaYHora(){
    let fechaActual = new Date()
// console.log(fechaActual)
// console.log(fechaActual.getDay())

let diasSemanas = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"]
let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Septiembre","Octubre","Noviembre","Diciembre"];

// console.log(diasSemanas[fechaActual.getDay()])

let parrafoFecha = document.getElementById(`fecha`)
let parrafoHora = document.getElementById(`reloj`)
parrafoFecha.innerHTML = `${diasSemanas[fechaActual.getDay()]} ${fechaActual.getDate()} de ${meses[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`

let hora = document.getElementById(`horas`);
hora = fechaActual.getHours();
let minutos = document.getElementById(`minutos`);
minutos = fechaActual.getMinutes();
let segundos = document.getElementById(`segundos`);
segundos = fechaActual.getSeconds();
let ampm = document.getElementById(`ampm`)

if(segundos < 10){
    segundos = `0${segundos}`
}
if(minutos < 10){
    minutos = `0${minutos}`
}

if(hora >= 12){
    hora = hora - 12
    ampm = `PM`
    if(hora < 10){
        hora = `0${hora}`
    }
} else{
    ampm = `AM`
}

if(hora === 0){
    hora == 12
}

parrafoHora.innerHTML = `${hora}: ${minutos}: ${segundos} ${ampm}`

}

window.setInterval(obtenerFechaYHora, 1000)

function cambiarColor(color){
    let seccionParrafos = document.getElementById(`seccionParrafos`)
    seccionParrafos.className = `fs-1 ${color}`
}

let btnAzul = document.getElementById(`btnAzul`)
let btnVerde = document.getElementById(`btnVerde`)
let btnVioleta = document.getElementById(`btnVioleta`)

btnAzul.addEventListener(`click`, () => cambiarColor(`textoAzul`));
btnVerde.addEventListener(`click`, ()=> cambiarColor(`textoVerde`));
btnVioleta.addEventListener(`click`, ()=>cambiarColor(`textoVioleta`))
