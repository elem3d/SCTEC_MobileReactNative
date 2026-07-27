const notas = [8, 7, 10, 9];

// Verificar se todas as notas são maiores ou iguais a 7
const resultado = notas.every((nota) => {
  return nota >= 7;
});

console.log(resultado); // true (todas as notas atendem à condição)

// Verificar se todas as notas são maiores ou iguais a 9
const verificacao = notas.every((nota) => {
  return nota >= 9;
});

console.log(verificacao);

//==================================

const produtos = [
  { nome: "Camiseta", preco: 49.9, estoque: 15 },
  { nome: "Calça", preco: 89.9, estoque: 8 },
  { nome: "Tênis", preco: 199.9, estoque: 3 },
  { nome: "Boné", preco: 29.9, estoque: 0 },
  { nome: "Meia", preco: 15.9, estoque: 25 },
];

const produtosCaro = produtos.filter((pr) => pr.preco > 100);

console.log(produtosCaro);