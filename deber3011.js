'use strict'

function Gamer(apodo, valor, carta, vidas) {
    
    this.apodo = apodo;
    this.carta = carta;
    this.vidas = vidas;
    this.valor = valor;

    this.restar = function () {
        if (this.carta = this.valor){
            alert("Correcto!!")
            break
        } else {
            this.vidas -= this.vidas;
            alert(`Lo siento ${this.apodo} te quedan ${this.vidas}`)
        }
    
    }

    this.lostLifes = function () {

    }

};
let apodo = prompt("Ingrese el apodo del jugador:");
let valor = parseInt(Math.random() * 7) + 1;
let user = new Gamer(apodo, valor, carta, vidas);

do(
let carta = Number(prompt("Ingresa una carta del 1 al 7"));
let vidas = 5;
user.restar();
)
while (user.vidas > 0);



