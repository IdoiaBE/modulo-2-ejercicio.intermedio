// Quiero generar una página que incluya: un título descriptivo del juego, un desplegable para seleccionar opciones, un botón de jugar, un texto que vaya cambienado.

//Quiero generar una página que haga lo siguiente: que cuando la ususaria seleccione una opción y pinche el botón jugar se genere un número aleatorio del 1 al 9, que el servidor asocie el número aleatorio creado a una acción (piedra, papel o tijera), que el servidor compare la acción seleccionada por la usuaria con la generada aleatoriamente, que como resultado de la comparación pinte un texto u otro en la pantalla.


//PASOS
// 1. Crear el html. --Linkear el js (script)
// 2. Traer al js todos los elementos que voy a escuchar, modificar...---select, botón, texto
// 3.Escuchar el evento del click en el botón jugar, recoger datos y programar respuesta
//    -Crear un función que escuche el evento (addEventListener)
//    -Crear un función que maneje la respuesta (handleClick) -> recoger datos select, compararlos y pintar mensaje
//    -Crear un función que genere un número aleatorio (Math.random)
//    -Crear un función que asocie los números aleatorios con las acciones piedra, papel o tijera

'use strict';

const selectOptions = document.querySelector('.js-select');

const playButton = document.querySelector('.js-btn');

const message = document.querySelector('.js-text');

//esta función me genera un número aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }  

//esta función me traduce ese número a la acción 'piedra, papel o tijera'
function numberToAction (){
    //guardo el número aleatorio (máximo 9) que me ha creado la función
    const randomNumber = getRandomNumber(9);
    console.log (randomNumber)

    //si el número es menor o igual a tres lo voy a guardar con la palabra 'piedra'...
    if (randomNumber <= 3) {
        return 'rock'
    } else if (randomNumber >= 7) {
        return 'paper'
    } else {
        return 'scissors'
    }

}  

function handleClick () {
    //guardo la opción que ha seleccionado la usuaria
    const selectValue = selectOptions.value;
    console.log (selectValue)

    //guardo la acción/palabra que se haya generado con la función numberToAction
    const randomAction = numberToAction ();
    console.log (randomAction)

    //si la opcion elegida por la usuaria y la acción random son iguales, se pinta 'Empate'...
    if (selectValue === randomAction) {
        message.innerHTML = 'Empate.';
    } else if (selectValue === 'scissors' && randomAction === 'paper') {
        message.innerHTML = 'Has ganado!'; 
    } else if (selectValue === 'paper' && randomAction === 'rock') {
        message.innerHTML = 'Has ganado!';
    } else if (selectValue === 'rock' && randomAction === 'scissors') {
        message.innerHTML = 'Has ganado!';
    } else if (selectValue === 'scissors' && randomAction === 'rock') {
        message.innerHTML = 'Has perdido :(';
    } else if (selectValue === 'paper' && randomAction === 'scissors') {
        message.innerHTML = 'Has perdido :(';
    } else if (selectValue === 'rock' && randomAction === 'paper') {
        message.innerHTML = 'Has perdido :(';
    }  
}

playButton.addEventListener('click', handleClick)