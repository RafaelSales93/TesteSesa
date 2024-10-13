"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
function converterTemperatura(fahrenheit) {
    var celsius = (5 * (fahrenheit - 32)) / 9;
    return "A temperatura em Fahrenheit \u00E9 ".concat(fahrenheit, "\u00B0F e em Celsius \u00E9 ").concat(celsius.toFixed(2), "\u00B0C.");
}
receberTemperatura();
function receberTemperatura() {
    var entrada = prompt("Digite uma temperatura em Fahrenheit:"); // Recebe a entrada do usuário
    var fahrenheit = Number(entrada); // Converte a entrada para número
    if (isNaN(fahrenheit)) {
        console.log("Por favor, insira um número válido.");
    }
    else {
        var resultado = converterTemperatura(fahrenheit);
        console.log(resultado);
    }
}
