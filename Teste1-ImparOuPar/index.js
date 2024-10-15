"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
function PaRouImpar(numero) {
    var parOuImpar = numero % 2 === 0 ? 'Par' : 'Impar';
    var positivoOuNegativo = numero >= 0 ? 'Positivo' : 'Negativo';
    return "O N\u00FAmero ".concat(numero, " \u00E9 ").concat(parOuImpar, " \u00E9 ").concat(positivoOuNegativo, ".");
}
receberNumero();
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
