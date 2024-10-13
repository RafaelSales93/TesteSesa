"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
function verificarTriangulo(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return "Equilátero";
        }
        else if (a === b || a === c || b === c) {
            return "Isósceles";
        }
        else {
            return "Escaleno";
        }
    }
    else {
        return "Os valores fornecidos não formam um triângulo.";
    }
}
receberLadosTriangulo();
function receberLadosTriangulo() {
    var entradaA = prompt("Digite o primeiro lado do triângulo:");
    var entradaB = prompt("Digite o segundo lado do triângulo:");
    var entradaC = prompt("Digite o terceiro lado do triângulo:");
    var a = Number(entradaA);
    var b = Number(entradaB);
    var c = Number(entradaC);
    var resultado = verificarTriangulo(a, b, c);
    console.log(resultado);
}
