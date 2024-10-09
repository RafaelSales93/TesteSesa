"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
function exibirTabuada(n) {
    for (var i = 1; i <= 10; i++) {
        var resultado = n * i;
        console.log("".concat(n, " x ").concat(i, " = ").concat(resultado));
    }
}
receberNumero();
function receberNumero() {
    var entrada = prompt("Digite um número para exibir a tabuada:");
    var numero = Number(entrada);
    if (isNaN(numero)) {
        console.log("Por favor, insira um número válido.");
    }
    else {
        exibirTabuada(numero);
    }
}
