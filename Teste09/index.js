"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
function printar() {
    var denominador = 1;
    var numerador = 38;
    var acumuladorSoma = 0;
    while (denominador < 38) {
        console.log('denominador', denominador);
        console.log('numerador', numerador);
        console.log('numerador -1 ', numerador - 1);
        acumuladorSoma += (numerador * (numerador - 1)) / denominador;
        denominador++;
        numerador--;
    }
    console.log(acumuladorSoma);
}
printar();
