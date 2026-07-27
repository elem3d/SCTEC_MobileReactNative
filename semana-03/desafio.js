/* =========================================
  DESAFIO - Sistema de Controle de Estacionamento
  ==========================================

 =========================================
 FUNCIONALIDADE 1
 Registrar as vagas disponíveis
 =========================================

console.log("=== VAGAS DISPONÍVEIS ===");

TODO:
 Exiba as vagas de 1 até 20.
 Exemplo:
 Vaga 1 disponível.
 Vaga 2 disponível.
 ...
*/

let vagas = 20

for(i = 1; i <= 20; i++){
    console.log(`Vaga ${i} disponível`)
};


/*

 =========================================
 FUNCIONALIDADE 2
 Entrada de veículos
 =========================================

console.log("\n=== ENTRADA DE VEÍCULOS ===");

let vagasDisponiveis = 5;

 TODO:
 Enquanto houver vagas disponíveis:
 - Exiba "Veículo estacionado."
 - Diminua uma vaga disponível.
 - Mostre quantas vagas ainda restam.


 Quando todas as vagas forem ocupadas:
console.log("Estacionamento lotado!");

*/

let vagasDisponiveis = 20;

while(vagasDisponiveis > 0){
    console.log(`Veículo Estacionado`);
    vagasDisponiveis--;
};

console.log("Estacionamento Lotado");


/*

 =========================================
 FUNCIONALIDADE 3
 Menu do sistema
 =========================================

let continuar = "S";

TODO:
 Exiba o menu pelo menos uma vez.

 MENU
 1 - Consultar vagas
 2 - Registrar entrada
 3 - Registrar saída

 Depois pergunte:
 "Deseja realizar outra operação? (S/N)"

 Enquanto a resposta for "S",
 o menu deve aparecer novamente.

*/
const prompt = require("prompt-sync")();


let continuar = "S";

do{
    console.log(`----- MENU -----
    1 - Consultar vagas
    2 - Registrar entrada
    3 - Registrar saída`);
    continuar = prompt("Deseja realizar outra operação? (S/N)");
}while (continuar.toUpperCase() === "S");

console.log("Sistema Encerrado");