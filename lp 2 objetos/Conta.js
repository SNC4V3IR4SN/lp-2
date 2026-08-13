
class Conta {
  constructor(agencia, numero, cliente, saldo) {
    this.agencia = agencia
    this.numero = numero
    this.cliente = cliente
    this.saldo = saldo
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor
      console.log(`Depósito de R$ ${valor} realizado com sucesso.`)
    } else {
      console.log("Informe um valor válido para depósito.")
    }
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor
      console.log(`Saque de R$ ${valor} realizado com sucesso.`)
    } else {
      console.log("Informe um valor maior que 0 e menor ou igual ao saldo.")
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

//conta corrente desconta 1 real por extrato impresso


// Criando a conta do Gabriel
const contaDoGabriel = new Conta(
  123,
  321,
  "Gabriel",
  100
)

// Exibindo o saldo inicial
contaDoGabriel.imprimirExtrato()

// Realizando um depósito
contaDoGabriel.depositar(100)

// Exibindo o saldo após o depósito
contaDoGabriel.imprimirExtrato()

// Realizando um saque
contaDoGabriel.sacar(50)

// Exibindo o saldo após o saque
contaDoGabriel.imprimirExtrato()