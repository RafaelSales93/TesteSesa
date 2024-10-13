"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
function calcularAnosParaUltrapassar() {
    var alturaAnacleto = 150;
    var alturaFelisberto = 110;
    var anos = 0;
    while (alturaFelisberto <= alturaAnacleto) {
        alturaAnacleto += 2;
        alturaFelisberto += 3;
        anos++;
    }
    console.log("Felisberto ultrapassar\u00E1 Anacleto em ".concat(anos, " anos."));
    console.log("Altura de Anacleto: ".concat(alturaAnacleto / 100, " metros."));
    console.log("Altura de Felisberto: ".concat(alturaFelisberto / 100, " metros."));
}
calcularAnosParaUltrapassar();
