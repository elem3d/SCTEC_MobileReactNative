class contaBancaria {
    titular = "";
    saldo = "";
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor){
        this.saldo += valor;
    }
    sacar(valor){
        this.saldo -= valor;
    }
}

const contaClara = new contaBancaria("Clara", 1200)
console.log(`Saldo de Clara: ${contaClara.saldo}`)

contaClara.depositar(500);
console.log(`Saldo de Clara após depósito: ${contaClara.saldo}`)

contaClara.sacar(1550)
console.log(`Saldo de Clara após saque: ${contaClara.saldo}`)