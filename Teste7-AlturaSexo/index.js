"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
function processarDados(pessoas) {
    var maiorAltura = 0;
    var menorAltura = 0;
    var somaAlturaMulheres = 0;
    var quantidadeMulheres = 0;
    var quantidadeHomens = 0;
    pessoas.forEach(function (pessoa) {
        if (pessoa.altura > maiorAltura)
            maiorAltura = pessoa.altura;
        if (pessoa.altura < menorAltura)
            menorAltura = pessoa.altura;
        if (pessoa.sexo === 'F') {
            somaAlturaMulheres += pessoa.altura;
            quantidadeMulheres++;
        }
        else if (pessoa.sexo === 'M') {
            quantidadeHomens++;
        }
    });
    var mediaAlturaMulheres = quantidadeMulheres > 0 ? somaAlturaMulheres / quantidadeMulheres : 0;
    var totalPessoas = pessoas.length;
    var porcentagemHomens = (quantidadeHomens / totalPessoas) * 100;
    var porcentagemMulheres = (quantidadeMulheres / totalPessoas) * 100;
    console.log("Maior altura: ".concat(maiorAltura, " cm"));
    console.log("Menor altura: ".concat(menorAltura, " cm"));
    console.log("M\u00E9dia de altura das mulheres: ".concat(mediaAlturaMulheres.toFixed(2), " cm"));
    console.log("N\u00FAmero de Homens: ".concat(quantidadeHomens));
    console.log("N\u00FAmero de Mulheres: ".concat(quantidadeMulheres));
    console.log("Porcentagem de homens: ".concat(porcentagemHomens.toFixed(2), "%"));
    console.log("Porcentagem de mulheres: ".concat(porcentagemMulheres.toFixed(2), "%"));
}
var pessoas = [
    { altura: 210, sexo: 'F' },
    { altura: 190, sexo: 'F' },
    { altura: 180, sexo: 'F' },
    { altura: 160, sexo: 'F' },
    { altura: 160, sexo: 'M' },
    { altura: 170, sexo: 'M' },
    { altura: 180, sexo: 'M' },
    { altura: 190, sexo: 'M' },
    { altura: 200, sexo: 'M' },
    { altura: 160, sexo: 'F' },
    { altura: 210, sexo: 'F' },
    { altura: 190, sexo: 'F' },
    { altura: 180, sexo: 'F' },
    { altura: 160, sexo: 'F' },
    { altura: 160, sexo: 'M' },
    { altura: 170, sexo: 'M' },
    { altura: 180, sexo: 'M' },
    { altura: 190, sexo: 'M' },
    { altura: 200, sexo: 'M' },
    { altura: 160, sexo: 'F' },
    { altura: 210, sexo: 'F' },
    { altura: 190, sexo: 'F' },
    { altura: 180, sexo: 'F' },
    { altura: 160, sexo: 'F' },
    { altura: 160, sexo: 'M' },
    { altura: 170, sexo: 'M' },
    { altura: 180, sexo: 'M' },
    { altura: 190, sexo: 'M' },
    { altura: 200, sexo: 'M' },
    { altura: 160, sexo: 'F' },
    { altura: 210, sexo: 'F' },
    { altura: 190, sexo: 'F' },
    { altura: 180, sexo: 'F' },
    { altura: 160, sexo: 'F' },
    { altura: 160, sexo: 'M' },
    { altura: 170, sexo: 'M' },
    { altura: 180, sexo: 'M' },
    { altura: 190, sexo: 'M' },
    { altura: 200, sexo: 'M' },
    { altura: 160, sexo: 'F' },
    { altura: 210, sexo: 'F' },
    { altura: 190, sexo: 'F' },
    { altura: 180, sexo: 'F' },
    { altura: 160, sexo: 'F' },
    { altura: 160, sexo: 'M' },
    { altura: 170, sexo: 'M' },
    { altura: 180, sexo: 'M' },
    { altura: 190, sexo: 'M' },
    { altura: 200, sexo: 'M' },
    { altura: 160, sexo: 'F' },
];
processarDados(pessoas);
