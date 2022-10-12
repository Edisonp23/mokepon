//inicia el juego seleccionando mascota
function iniciarJuego(){
    let btnMascota = document.getElementById('boton-mascota')
    btnMascota.addEventListener('click',selecMascota)

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
    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaRival = document.getElementById('mascota-rival')
    if (ataqueAleatorio == 1){
        spanMascotaRival.innerHTML = 'Hipodoge'
    } else if (ataqueAleatorio == 2){
        spanMascotaRival.innerHTML = 'Capipepo'
    } else {
        spanMascotaRival.innerHTML = 'Ratigueya'
    }
}
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min + 1) + min)
}

// carga el script junto con el HTML
window.addEventListener('load', iniciarJuego) 