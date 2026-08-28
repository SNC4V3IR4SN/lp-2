import { Conta } from "./Conta";
const conta1 = new Conta(123,'gabriel', 100)
conta1.depositar(500)
conta1.sacar(100)
conta1.imprimirExtrato()

import { ContaCorrente } from "./contaCorrente";
const conta2 = new ContaCorrente(123,'gabriel', 100)
conta2.imprimirExtrato()
conta2.imprimirExtrato()