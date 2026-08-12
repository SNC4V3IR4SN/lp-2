class Conta {
  constructor(agencia, numero, cliente, saldo) {
    this.agencia = agencia
    this.numero = numero
    this.cliente = cliente
    this.saldo = saldo
  }

  depositar(valor, ) {
    if(valor > 0){
      this.saldo += valor 
    }else {
      console.log("informe um valor valido")
    }

  sacar(valor) { 
    if (valor > 0 && valor <= this.saldo) { this.saldo -= valor 
      
    } 
    else { console.log("Informe um valor maior que 0 e menor ou igual ao saldo") } } imprimirExtrato() { console.log(`A conta de nr ${this.numero} possui R$ ${this.saldo}`) } }

var contaDoGabriel = new Conta(123, 321, 'Gabriel', 100)

contaDoGabriel.imprimirExtrato()
contaDoGabriel.depositar(100)
contaDoGabriel.imprimirExtrato()
contaDoGabriel.sacar()
contaDoGabriel.imprimirExtrato()