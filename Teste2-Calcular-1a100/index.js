"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
exibirSoma();
function calculaSoma() {
    var soma = 0;
    for (var i = 1; i <= 100; i++) {
        soma += i;
        console.log("Somando ".concat(i, ": a soma atual \u00E9 ").concat(soma));
    }
    console.log("A soma total dos n\u00FAmeros de 1 a 100 \u00E9: ".concat(soma));
}
function exibirSoma() {
    var resultado = calculaSoma();
}
