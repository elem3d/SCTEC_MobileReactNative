const { createElement } = require("react");

const form = document.getElementById("formularioDeInscricao");

const resumo = document.createElement("section");
resumo.id ="resumo";

form.after(resumo);

form.addEventListener("submit", function(event){
    event.preventDefault();

    const nomeInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
    const idadeInput = document.getElementById("idade");
    const nascimentoInput = document.getElementById("nascimento");
    const apresentacaoInput = document.getElementById("apresentacao");
    const trilhaInput = document.getElementById("trilha");
    const conhecimentoInput = document.querySelector('input[name = "nível"]:checked');
    
    const interessesInput = []
    document.querySelectorAll('input[name = "temas"]:checked').forEach(tema => {interessesInput.push(tema.value);});


    const dadosDoInscrito = {
        nome: nomeInput.value,
        email: emailInput.value,
        senha: senhaInput.value,
        idade: idadeInput.value,
        dataNascimento: nascimentoInput.value,
        apresentacao:apresentacaoInput.value,
        trilha: trilhaInput.value,
        nivelConhecimento:conhecimentoInput.value,
        areasDeInteresse: interessesInput
    }
    
    const validacao = (dadosInscrito) =>{
        //Definindo as regras:
        const senhaRegra = /^(?=.*[0-9])(?=.*[A-Z]).{8,}$/;
        const emailRegra = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const apresentacaoRegra = /(?:\S\s*){21,}/

        let erros = [];

        //Verificações:
        if(!senhaRegra.test(dadosInscrito.senha)){
            erros.push({
                error: 1,
                campo: senhaInput,
                mensagem: "A senha deve ter ao menos um número, uma letra maiúscula e 8 caracteres"
            });
        }
        if(!emailRegra.test(dadosInscrito.email)){
            erros.push({
                erro: 2,
                campo: emailInput,
                mensagem: "Insira um email válido"
            });
        }
        if(!apresentacaoRegra.test(dadosInscrito.apresentacao)){
            erros.push({
                erro: 3,
                campo: apresentacaoInput,
                mensagem: "A apresentação deve conter ao menos 20 caracteres"
            });
        }if(dadosInscrito.areasDeInteresse.length < 1){
            erros.push({
                erro: 4,
                campo: interessesInput,
                mensagem: "Selecione ao menos 1 campo de interesse"
            })
        }


        erros.forEach((erro) => {
            console.log(`Error: ${erro.erro}`);
            erro.campo.classList.add("inputErro");

            const mensagem = createElement("span");
            mensagem.classList.add("mensagem-erro");
            mensagem.textContent = erro.mensagem;
            const campo = erro.campo.closest("fieldset") || closest(erro.campo)
            campo.appendChild(mensagem)
        })
    };

    validacao(dadosDoInscrito);

    resumo.innerHTML = `<h2>Resumo da Inscrição: ${dadosDoInscrito.nome}</h2>
        <p><strong>Nome Completo:</strong> ${dadosDoInscrito.nome}</p>
        <p><strong>E-mail:</strong> ${dadosDoInscrito.email}</p>
        <p><strong>Senha:</strong> ${dadosDoInscrito.senha}</p>
        <p><strong>Idade:</strong> ${dadosDoInscrito.idade}</p>
        <p><strong>Data de nascimento:</strong> ${dadosDoInscrito.nascimento}</p>
        <p><strong>Trilha:</strong> ${dadosDoInscrito.trilha}</p>
        <p><strong>Nível:</strong> ${dadosDoInscrito.nivel}</p>
        <p><strong>Temas:</strong> ${dadosDoInscrito.temas.length > 0 ? dadosDoInscrito.temas.join(", ") : "Nenhum Informado"}</p>
        <p><strong>Apresentação:</strong> ${dadosDoInscrito.apresentacao || "Nenhum Informada"}</p>`;
});

