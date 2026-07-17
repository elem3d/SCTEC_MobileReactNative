const prompt = require("prompt-sync")();

function calcularCarrinho(
  precoItem1,
  precoItem2,
  cupomDesconto,
  quantidadeItens,
) {
  const total = precoItem1 + precoItem2;
  const cupom = cupomDesconto;
  const itens = quantidadeItens;

  if ((cupom = "PROMO10")) {
    total -= (total * 0.1);
  }

  let freteGratis = false;

  if ((itens = 2)) {
    freteGratis = true;
  } else {
    freteGratis = false;
  }

  if (total >= "100") {
    console.log("Parabéns, frete grátis!");
    freteGratis = true;
  }

  return `Total: R$ ${total} | Frete grátis: ${freteGratis}`;
}

const precoItem1Input = prompt("Preço do item 1: ");
const precoItem2Input = prompt("Preço do item 2: ");
const cupomInput = prompt("PROMO10");
const quantidadeDeItensInput = prompt("Quantidade de itens: ");

console.log(
  calcularCarrinho(
    precoItem1Input,
    precoItem2Input,
    cupomInput,
    quantidadeDeItensInput,
  ),
);