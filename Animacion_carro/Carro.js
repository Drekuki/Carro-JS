var carro = document.querySelector('.Carro')
var fondo = document.querySelector('.Padre')
var ruedaiz = document.querySelector('.Ruedaiz')
var ruedade = document.querySelector('.Ruedade')
var polvo = document.querySelector('.Polvo')

carro.addEventListener('click', InicioMovimiento)

function InicioMovimiento(){
    fondo.classList.add('fondo-animado')
    ruedaiz.classList.add('ruedas-move')
    ruedade.classList.add('ruedas-move')
    polvo.classList.remove('oculto')
    polvo.classList.add('polvo-move')
}



