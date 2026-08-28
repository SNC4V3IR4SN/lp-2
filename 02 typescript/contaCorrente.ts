import { Conta } from "./Conta";
 export class ContaCorrente extends Conta {
  imprimirExtrato(): void {
    const taxaImpressao : number = 1
    if (this.saldo < taxaImpressao) {
      console.log(`saldo insuficiente para impressao`)
    }else {
      this.saldo -= taxaImpressao
      console.log(`saldo atual (apos impressao de extrato): R$${this.saldo}`)

    }
  }
}