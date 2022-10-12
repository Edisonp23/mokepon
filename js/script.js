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
}

// carga el script junto con el HTML
window.addEventListener('load', iniciarJuego) 