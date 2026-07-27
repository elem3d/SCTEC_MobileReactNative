const precos = [80, 150, 950, 4200, 320];
/*
Desafio 1 – every()
O gerente deseja verificar se todos os produtos custam mais de R$ 50,00.
Utilize o método every() para responder essa verificação.
*/

const maisDeCinquenta = precos.every((preco) => {
    return preco > 50;
});

console.log(maisDeCinquenta);

/*
Desafio 2 – some()
O gerente deseja saber se existe pelo menos um produto que custa mais de R$ 4.000,00.
Utilize o método some() para realizar essa verificação.
*/

const maisDe4K = precos.some((valor) => {
    return valor > 4000;
});

console.log(maisDe4K);

/*
Desafio 3 – reduce()
O setor financeiro precisa calcular o valor total de todos os produtos cadastrados.
Utilize o método reduce() para somar todos os preços
*/

const somaProdutos = precos.reduce((acc, n) => {
    return acc + n;
}, 0);

console.log(somaProdutos);