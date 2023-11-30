'use strict'

function Gamer(apodo, carta, vidas, valor) {
    
    this.apodo = apodo;
    this.carta = carta;
    this.vidas = vidas;
    this.valor = valor;

    this.restar = function () {
        if (this.carta === this.valor){
            alert("Correcto!!")
            return
        } else {
            this.vidas = this.vidas - 1;
            alert(`Lo siento ${this.apodo} te quedan ${this.vidas}`)
        }
    
    }

};
let apodo = prompt("Ingrese el apodo del jugador:");
let carta = null;
let vidas = 5;
let valor = parseInt(Math.random() * 7) + 1;
let user = new Gamer(apodo, carta, vidas, valor);


do{
    user.carta = Number(prompt("ingresa un numero del 1 al 7"))
    user.restar();
}
while (user.vidas > 0);



