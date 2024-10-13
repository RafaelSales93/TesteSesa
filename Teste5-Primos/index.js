"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
function ehPrimo(numero) {
    if (numero <= 1)
        return false;
    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0)
            return false;
    }
    return true;
}
function exibirPrimos(inicio, fim) {
    console.log("N\u00FAmeros primos entre ".concat(inicio, " e ").concat(fim, ":"));
    for (var i = inicio; i <= fim; i++) {
        if (ehPrimo(i)) {
            console.log(i);
        }
    }
}
receberIntervalo();
function receberIntervalo() {
    var entradaInicio = prompt("Digite o início do intervalo:");
    var entradaFim = prompt("Digite o fim do intervalo:");
    var inicio = Number(entradaInicio);
    var fim = Number(entradaFim);
    exibirPrimos(inicio, fim);
}
