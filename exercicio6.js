
// ======== ARRAYS ========

const livros = [
    "Dom Casmurro",
    "1984",
    "Harry Potter",
    "Clean Code",
    "Código Limpo",
    "Pequeno Príncipe"
];

for (i = 0; i < livros.length; i++){
    if(livros[i] === "Clean Code"){
        console.log("Livro Recomendado pelos desenvolvedores:")
    }
    console.log(`${i+1} - ${livros[i]}`);
};

console.log(`Total de livros cadastrados: ${livros.length}`)

