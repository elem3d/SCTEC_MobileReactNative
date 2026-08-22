// ==========================================
// Cenário: toda vez que os dados de um usuário chegam da API,
// queremos garantir que ele sempre tenha o MESMO formato no app,
// mesmo que a API mude a ordem dos campos ou esqueça algum.
// ==========================================
class Usuario {
  constructor(nome, email, telefone) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.enderecos = []; // todo usuário novo começa sem endereço cadastrado
  }
}

// Simulando o retorno de uma API (response.json())
const dadosDaApi = {
  nome: "Matheus Silva",
  email: "matheus@email.com",
  telefone: "48999999999",
};

// Em vez de espalhar o objeto "cru" da API pelo app inteiro,
// criamos uma instância -> qualquer tela que receber "usuarioLogado"
// sabe exatamente quais campos existem
const usuarioLogado = new Usuario(
  dadosDaApi.nome,
  dadosDaApi.email,
  dadosDaApi.telefone,
);

console.log(usuarioLogado);
// Usuario { nome: 'Matheus Silva', email: 'matheus@email.com', telefone: '48999999999', enderecos: [] }

// ==========================================
// Cenário: o app cresce e ganha um plano "Premium"
// (ex: assinatura com frete grátis, tipo Nubank Ultravioleta)
// Em vez de reescrever nome, email e telefone de novo,
// reaproveitamos tudo que já existe em Usuario com "extends"
// ==========================================
class UsuarioPremium extends Usuario {
  constructor(nome, email, telefone, plano, dataAssinatura) {
    super(nome, email, telefone); // monta a parte "básica" do usuário

    // Aqui só ficam os dados EXCLUSIVOS do usuário premium
    this.plano = plano;
    this.dataAssinatura = dataAssinatura;
    this.freteGratis = true;
  }
}

const usuarioVip = new UsuarioPremium(
  "Ana Paula",
  "ana@email.com",
  "48988887777",
  "Premium Anual",
  "2026-01-10",
);

console.log(usuarioVip);
// UsuarioPremium {
//   nome: 'Ana Paula',
//   email: 'ana@email.com',
//   telefone: '48988887777',
//   enderecos: [],
//   plano: 'Premium Anual',
//   dataAssinatura: '2026-01-10',
//   freteGratis: true
// }