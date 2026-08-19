
class Conta {
  constructor(agencia, numero, cliente, saldo = 0) {
    this.agencia = agencia
    this.numero = numero
    this.cliente = cliente
    this.saldo = saldo
  }

  depositar(valor) {
    if (valor <= 0) {
      console.log(`valor invalido.`)
    } else {
      this.saldo += valor 
      this.imprimirExtrato()
    }
  }

  sacar(valor) {
    if (valor > this.saldo) {
      console.log(`saldo insuficiente`)
    } else if (valor <= 0) {
      console.log("valor invalido")
    }else {
      this.saldo -= valor
      this.imprimirExtrato()
    }
  }

  imprimirExtrato() {
    console.log(`-----------------------------`)
    console.log(`Cliente: ${this.cliente}`)
    console.log(`Agência: ${this.agencia}`)
    console.log(`Conta: ${this.numero}`)
    console.log(`Saldo: R$ ${this.saldo}`)
    console.log(`-----------------------------`)
  }
}



