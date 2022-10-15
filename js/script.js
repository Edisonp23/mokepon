let ataqueJugador
let ataqueRival

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

    crearMensaje ()
}
//mensajes de ataque
function crearMensaje() {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement ('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + 'la mascota del enemigo atacó con' + ataqueRival + 'GANASTE 🎉🎉'
    sectionMensajes.appendChild(parrafo)
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min + 1) + min)
}

// carga el script junto con el HTML
window.addEventListener('load', iniciarJuego) 