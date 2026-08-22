// Ao Clicar no botão categorias somente ele fica com a classe ativa

const categoriasBtn = document.querySelectorAll(".categoria");

const manegeActiveBtn = (button) => {
  const activeBtn = document.querySelector(".categoria.ativa");
  if(activeBtn){
    activeBtn.classList.remove("ativa");
    button.classList.add("ativa")
  }
};

categoriasBtn.forEach((btn) => {
  btn.addEventListener("click", () => manegeActiveBtn(btn))
});

//Ao clicar no card do pedido ele "seleciona"

const opcoesPedidos = document.querySelectorAll(".restaurante-card");

opcoesPedidos.forEach((card) =>{
  card.addEventListener("click", () =>{
    const activeCard = document.querySelector(".card-ativo");
    if(activeCard) {
      activeCard.classList.remove(".card-ativo")
    };
    card.classList.add(".card-ativo");
  });
});

// Ao clicar no botão "Pedir" o pedido fica verde


const pedirBtn = document.querySelectorAll(".botao-pedir");

pedirBtn.forEach((btn) =>{
  btn.addEventListener("click", () => {
    btn.classList.add("pedido-ativo")
  });
});