"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
function PaRouImpar(numero) {
    var parOuImpar = numero % 2 === 0 ? 'par' : 'ímpar';
    var positivoOuNegativo = numero >= 0 ? 'positivo' : 'negativo';
    return "O n\u00FAmero ".concat(numero, " \u00E9 ").concat(parOuImpar, " e ").concat(positivoOuNegativo, ".");
}
function receberNumero() {
    var entrada = prompt("Digite um número:");
    var numero = Number(entrada);
    if (isNaN(numero)) {
        console.log("Por favor, insira um número válido.");
    }
    else {
        var resultado = PaRouImpar(numero);
        console.log(resultado);
    }
}
receberNumero();
