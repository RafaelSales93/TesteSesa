"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
function PaRouImpar(numero) {
    // Verifica se o número é par ou ímpar
    var parOuImpar = numero % 2 === 0 ? 'par' : 'ímpar';
    // Verifica se o número é positivo ou negativo
    var positivoOuNegativo = numero >= 0 ? 'positivo' : 'negativo';
    // Retorna o resultado
    return "O n\u00FAmero ".concat(numero, " \u00E9 ").concat(parOuImpar, " e ").concat(positivoOuNegativo, ".");
}
// Função para receber entrada do usuário
function receberNumero() {
    var entrada = prompt("Digite um número:"); // Recebe a entrada do usuário
    var numero = Number(entrada); // Converte a entrada para número
    if (isNaN(numero)) {
        console.log("Por favor, insira um número válido.");
    }
    else {
        var resultado = PaRouImpar(numero);
        console.log(resultado);
    }
}
// Chama a função para iniciar o processo
receberNumero();
