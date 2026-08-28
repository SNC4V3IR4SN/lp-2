export class Conta {
  //atributos 
  //somente leitura : só consigo ver oq esta dentro E para editar somente no construtor 
  readonly numero: number
  //atributo privado somente a classe dona dele pode acessar diretamente this.#saldo
  #saldo: number
  public cliente: string

  //encapsuladores - getters e setters || gets e sets
  get saldo() {
    return this.#saldo
  }
  set saldo(valor: number) {
    this.#saldo = valor
  }
  // modificadores de acesso: indica o nivel de acesso dos atributos
  // private - somente a classe em que ele esta pode manipular diretamente 
  //protected - somente a superclass (mãe) e subclass (filhas) manipulam diretamente 
  //public - pode ser manipulado diretamente de qualquer lugar 

  constructor(numero: number, cliente: string, saldoInicial?: number) {
    this.numero = numero
    this.cliente =cliente
    this.#saldo = saldoInicial || 0
  }
  //metodos
depositar(valor : number) : void  {
if (valor <= 0){
  console.log("o valor do deposito deve ser positivo ")
}else {
  this.#saldo += valor
  console.log(`deposito de R$${valor} realizado com sucesso`)
}
}

sacar(valor: number) : void {
  if (valor <= 0 ) {
    console.log('o valor do saque deve ser positivo ')
    return
  }
  if (valor > this.#saldo) {
    console.log("saldo insuficiente")
    return
  }
  this.#saldo -= valor 
  console.log(`saque de R$${valor} realizado com sucesso `)

}

imprimirExtrato () : void {
  console.log(`saldo atual ${this.#saldo}`)
}
}