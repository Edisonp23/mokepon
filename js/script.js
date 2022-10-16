let ataqueJugador
let ataqueRival
let vidasJugador = 3
let vidasRival = 3

//inicia el juego seleccionando mascota
function iniciarJuego(){
    let btnMascota = document.getElementById('boton-mascota')
    btnMascota.addEventListener('click',selecMascota)

    let btnFuego = document.getElementById('boton-fuego')
    btnFuego.addEventListener('click', ataqueFuego)
    let btnAgua = document.getElementById('boton-agua')
    btnAgua.addEventListener('click', ataqueAgua)
    let btnTierra = document.getElementById('boton-tierra')
    btnTierra.addEventListener('click', ataqueTierra)

    let btnReiniciar = document.getElementById('boton-reiniciar')
    btnReiniciar.addEventListener('click', reiniciarJuego)
}
//función para seleccionar mascota
function selecMascota(){

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascota = document.getElementById('mascota-jugador')

   if (inputHipodoge.checked){ 
    alert('seleccionaste a Hipodoge')
    spanMascota.innerHTML = 'Hipodoge'
   } else if (inputCapipepo.checked){
    alert('seleccionaste a Capipepo')
    spanMascota.innerHTML = 'Capipepo'
   } else if (inputRatigueya.checked){
    alert('seleccionaste a Ratigueya')
    spanMascota.innerHTML = 'Ratigueya'
   } else {
    alert('Por favor selecciona una mascota.')
   } 
    selecMascotaRival()
}
function selecMascotaRival(){
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaRival = document.getElementById('mascota-rival')
    if (mascotaAleatoria == 1){
        spanMascotaRival.innerHTML = 'Hipodoge'
    } else if (mascotaAleatoria == 2){
        spanMascotaRival.innerHTML = 'Capipepo'
    } else {
        spanMascotaRival.innerHTML = 'Ratigueya'
    }
}
// ataques jugador
function ataqueFuego() {
    ataqueJugador= 'FUEGO'
    ataqueAleatorioRival()
}

function ataqueAgua() {
    ataqueJugador= 'AGUA'
    ataqueAleatorioRival()
}

function ataqueTierra() {
    ataqueJugador= 'TIERRA'
    ataqueAleatorioRival()
}
// ataque aleatorio rival
function ataqueAleatorioRival(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueRival = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueRival = 'AGUA'
    } else {
        ataqueRival = 'TIERRA'
    }

    combate ()
}

// logica para combate y mensaje de resultado
function combate () { 
    let spanVidaJugador = document.getElementById('vida-jugador')
    let spanVidaRival = document.getElementById('vida-rival')

    if (ataqueJugador == 'FUEGO' && ataqueRival == 'TIERRA') {
        crearMensaje('GANASTE 🎉🎉')
        vidasRival--
        spanVidaRival.innerHTML = vidasRival
    } else if (ataqueJugador == 'AGUA' && ataqueRival == 'FUEGO') {
        crearMensaje('GANASTE 🎉🎉')
        vidasRival--
        spanVidaRival.innerHTML = vidasRival
    } else if (ataqueJugador == 'TIERRA' && ataqueRival == 'AGUA') {
        crearMensaje('GANASTE 🎉🎉')
        vidasRival--
        spanVidaRival.innerHTML = vidasRival
    } else if (ataqueJugador == ataqueRival) {
        crearMensaje('EMPATE 😒😒')
    } else {
        crearMensaje('PERDISTE 😔😔')
        vidasJugador--
        spanVidaJugador.innerHTML = vidasJugador
        
    }
     revisarVidas()
}

// revisa vidas y muestra mensaje de ganador
function revisarVidas() {
    if (vidasJugador == 0) {
        crearMensajeFinal('¡¡Lo sentimos!! Perdiste 🥲🥲')
    } else if (vidasRival == 0) {
        crearMensajeFinal('¡¡Felicicdades!! Ganaste 🎉🎉')
    }

}
// Muestra mensaje de resultado final
function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement ('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)
// Deshabilita los botones de ataque al llegar a vida 0
    let btnFuego = document.getElementById('boton-fuego')
    btnFuego.disabled = true
    let btnAgua = document.getElementById('boton-agua')
    btnAgua.disabled = true
    let btnTierra = document.getElementById('boton-tierra')
    btnTierra.disabled = true
}

//mensajes de ataque
function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement ('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ''+ ataqueJugador + ' la mascota del enemigo atacó con ' + ataqueRival + ' - ' + resultado
    sectionMensajes.appendChild(parrafo)
}
// aleatoriedad
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min + 1) + min)
}
//recarga la página 
function reiniciarJuego () {

    location.reload()

}
// carga el script junto con el HTML
window.addEventListener('load', iniciarJuego)  