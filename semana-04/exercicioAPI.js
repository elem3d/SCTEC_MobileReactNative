async function buscarUsuarios() {
  const response = await fetch("https://dummyjson.com/users");

  const dados = await response.json();

  return dados.users;
}

async function main() {
  const usuarios = await buscarUsuarios();

   // o console log retorna algo nessa maneira
  // {
  //   id: 24,
  //   firstName: 'Mateo',
  //   lastName: 'Nguyen',
  //   maidenName: '',
  //   age: 31,
  //   gender: 'male',
  //   email: 'mateo.nguyen@x.dummyjson.com',
  //   phone: '+1 341-597-6694',
  //   username: 'mateon',
  //   password: 'mateonpass',
  //   birthDate: '1994-6-2',
  //   image: 'https://dummyjson.com/icon/mateon/128',
  //   bloodGroup: 'O+',
  //   height: 174.29,
  //   weight: 59.98,
  //   eyeColor: 'Red',
  //   hair: { color: 'Purple', type: 'Wavy' },
  //   ip: '192.57.144.7',
  //   address: {
  //     address: '1578 Fourth Street',
  //     city: 'Columbus',
  //     state: 'Missouri',
  //     stateCode: 'MO',
  //     postalCode: '20673',
  //     coordinates: [Object],
  //     country: 'United States'
  //   },
  //   macAddress: 'a7:26:10:7a:36:29',
  //   university: 'Columbia University',
  //   bank: {
  //     cardExpire: '12/29',
  //     cardNumber: '4021840414995098',
  //     cardType: 'Visa',
  //     currency: 'CAD',
  //     iban: 'DE43275561962007561223'
  //   },
  //   company: {
  //     department: 'Accounting',
  //     name: 'Spinka LLC',
  //     title: 'Business Analyst',
  //     address: [Object]
  //   },
  //   ein: '229-249',
  //   ssn: '416-877-230',
  //   userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
  //   crypto: {
  //     coin: 'Bitcoin',
  //     wallet: '0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a',
  //     network: 'Ethereum (ERC20)'
  //   },
  //   role: 'user'
  // },

/* TODO:
  1. Mostrar no terminal: nome, idade, email -------------------- #feito
  2. Novo Array apenas com o nome completo de cada um ----------- #feito
  3. Novo array apenas com idade 30+ e exibir no terminal ------- #feito
  4. Encontrar Emily e exibir no terminal ----------------------- #feito
  5. Verificar se -18 e mostrar no terminal (true/false) -------- #feito
  6. Verificar se todos os usuários tem endereço ---------------- #feito
  7. Calcular média de idade dos usuários e mostrar no terminal - #
  */

// Guardando usuários simples em array para futuro se precisar
const usuariosSimples = usuarios.map((usuario) =>{
  return {nome: `${usuario.firstName} ${usuario.lastName}`,
  idade: usuario.age,
  email: usuario.email};
})

// Impriminso usuário simples

usuariosSimples.forEach((usuario) => {
  console.log(`Nome: ${usuario.nome}
  Idade: ${usuario.idade}
  Email: ${usuario.email}`);
});

// Guardando apenas nomes completos

const usuariosNomes = usuarios.map((usuario) => {
  return `${usuario.firstName} ${usuario.lastName}`;
});

//Fazendo array de usuários 30+ e implimindo

const usuariosTrintaMais = usuarios.map((usuario) => {
  if (usuario.age >= 30){
    return usuario;
  };
});
console.log(usuariosTrintaMais);

//Encontrando a Emily:

const usuarioEmily = usuarios.find((usuario) => {
  return usuario.firstName === "Emily";
});
console.log(usuarioEmily);

//Verificação de Idade:

const menorDeIdade = usuarios.some((usuario) =>{
  return usuario.age < 18;
});
console.log(`Usuários menores de idade: ${menorDeIdade}`)

//Verificação de endereço:

const usuariosTemEndereco = usuarios.every((usuario) =>{
  return Object.values(usuario.address).length !== 0;
});
console.log(`Todos os usuários tem endereço: ${usuariosTemEndereco}`);

// Calculando a média de idade

const mediaIdades = (usuarios.reduce((acc, usuario) =>{
  return  acc + usuario.age;
}, 0)) / usuarios.length;
console.log(`A média de idade dos usuários é de ${mediaIdades.toFixed(1)} anos`)
}

main();