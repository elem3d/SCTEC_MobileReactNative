//INTRODUÇÃO À FUNÇÕES

function verificarMaioridade(idadeDoUsuario){
    let mensagem = "";
    const idade = idadeDoUsuario;
    idade >= 18 ? mensagem = "É maior de idade" : mensagem = "Não é maior de idade";

    return mensagem;
};

console.log(verificarMaioridade(21));
