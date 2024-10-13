import * as promptSync from 'prompt-sync'
var prompt = promptSync()

function calcularAnosParaUltrapassar(){
    let alturaAnacleto = 150; 
    let alturaFelisberto = 110;
    let anos = 0;

    while (alturaFelisberto <= alturaAnacleto) {
        alturaAnacleto += 2;
        alturaFelisberto += 3;
        anos++;
    }
    console.log(`Felisberto ultrapassará Anacleto em ${anos} anos.`);
    console.log(`Altura de Anacleto: ${alturaAnacleto / 100} metros.`);
    console.log(`Altura de Felisberto: ${alturaFelisberto / 100} metros.`);
}
calcularAnosParaUltrapassar();
