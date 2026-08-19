import { ContaCorrente } from "./ContaCorrente.js" 
import { Conta } from "./Conta.js"

var contaGabriel = new ContaCorrente(12,21,"Gabriel", 10)

contaGabriel.depositar(10)

var contaJoao = new Conta(12,25,'joao', 10)
contaJoao.depositar(10)
