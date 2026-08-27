const form = document.getElementById("formularioDeInscricao");

const resumo = document.createElement("section");
resumo.id ="resumo";

formulario.arter(resumo);

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

    resumo.innerHTML = "<h2>Resumo de Inscrição:<h2/>"
});

