const form = document.getElementById("formularioDeInscricao");

const resumo = document.createElement("section");
resumo.id ="resumo";

form.after(resumo);

form.addEventListener("submit", function(event){
    event.preventDefault();


    const interessesInput = []
    document.querySelectorAll('input[name = "temas"]:checked').forEach(tema => {interessesInput.push(tema.value);});

    

    const dadosDoInscrito = {
        nome: document.getElementById("name").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,
        idade: document.getElementById("idade").value,
        dataNascimento: document.getElementById("nascimento").value,
        apresentacao: document.getElementById("apresentacao") .value,
        trilha: document.getElementById("trilha").value,
        nivelConhecimento: document.querySelector('input[name = "nível"]:checked').value,
        areasDeInteresse: interessesInput
    }

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

