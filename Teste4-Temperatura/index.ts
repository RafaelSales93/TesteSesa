import * as promptSync from 'prompt-sync'
var prompt = promptSync()


function converterTemperatura(fahrenheit: number): string {
    const celsius = (5 * (fahrenheit - 32)) / 9;
    return `A temperatura em Fahrenheit é ${fahrenheit}°F e em Celsius é ${celsius.toFixed(2)}°C.`;
}
receberTemperatura();
function receberTemperatura(): void {
    const entrada = prompt("Digite uma temperatura em Fahrenheit:"); // Recebe a entrada do usuário
    const fahrenheit = Number(entrada); // Converte a entrada para número
    if (isNaN(fahrenheit)) {
        console.log("Por favor, insira um número válido.");
    } else {
        const resultado = converterTemperatura(fahrenheit);
        console.log(resultado);
    }
}

