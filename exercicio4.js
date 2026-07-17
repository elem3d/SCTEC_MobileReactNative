// -------------- INSTRUÇÕES --------------------
// - Crie as funções que faltam (valor final, faixa etária, status do pagamento, mensagem final)
// - Misture Arrow Function e function tradicional (mínimo 2 de cada, já contando o exemplo acima)
// - Crie uma função orquestradora que junta tudo e devolve a mensagem final pronta pra tela
// - Chame a orquestradora no final e dê console.log no resultado

/* Minhas Anotações:

----------- O QUE PRECISA -----------
    
    1. Calcular desconto ----------------------------------------- #feito
    2. Classificar cliente por faixa etária ---------------------- #feito
    3. Traduzir status do pagamento ------------------------------ #feito
    4. Exibir uma única mensagem com as informações acima -------- #feito
REGRAS:
    - Desconto de 15% se valor da compra >=300 ou clienteVIP
    - Faixa etária: menor de 18 = menor de idade / 18 a 59 anos = adulto / 60+ = idoso
    - Status do pagamento: 1 = pago ; 2 = pendente ; 3 = cancelado ; qualquer outro = inválido
    - Mensagem final: montar com template literal: nome, faixa etária, valor com desconto aplicado e status.

*/

// DADOS DE TESTE

const cliente = {
    nome: "Fernanda Lima",
    idade: 34,
    clienteVIP: false,
    valorCompra: 320,
    statusPagamento: 1 // 1, 2, 3 ou qualquer outro valor para testar
}
// ----------------------------------------------------------------------

const verificarDesconto = (valorCompra, clienteVIP) => (valorCompra >= 300 || clienteVIP) ? (valorCompra * 0.15) : 0;

const calcularValorDaCompra = (valorCompra, desconto) => valorCompra - desconto;

const faixaEtaria = (idade) => { 
    let classificação = "";
    
    if(idade < 18){
        classificação = "Menor de idade";
    }
    else if(idade >= 18 && idade < 60){
        classificação = "Adulto";
    }
    else if(idade >= 60){
        classificação = "Idoso";
    }
    else{
        classificação = "idade inválida"
    };
    return classificação;
};

function traduzirStatus(status) {
    let mensagemStatus = ""
    switch (status){
        case 1:
            mensagemStatus = "Pago";
            break;
        case 2:
            mensagemStatus = "Pendente";
            break;
        case 3:
            mensagemStatus = "Cancelado";
            break;
        default:
            mensagemStatus = "Status Inválido";
            break;
    }
    return mensagemStatus;
};

function resumoPedido(cliente){
    const valorDesconto = verificarDesconto(cliente.valorCompra, cliente.clienteVIP);
    const valorTotal = calcularValorDaCompra(cliente.valorCompra,valorDesconto);
    const classificacaoEtaria = faixaEtaria(cliente.idade);
    const status = traduzirStatus(cliente.status);
    
    return `Cliente: ${cliente.nome}
        Valor da Compra: ${valorTotal}
        Desconto: R$ ${valorDesconto},00
        Faixa Etária: ${classificacaoEtaria}
        Status da Compra: ${status}`
};

console.log(resumoPedido(cliente));

